
var console = console.log;



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Dropdown Button Drawing Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const dropdownButton = document.getElementById('dropdownButton');
const dropdownDrawing = dropdownButton.getContext("2d");

dropdownDrawing.fillStyle = 'grey';
dropdownDrawing.globalAlpha  = 0.5;
dropdownDrawing.fillRect(0, 0, 100, 100);

dropdownDrawing.globalAlpha  = 1;
dropdownDrawing.fillStyle = '#333';
dropdownDrawing.fillRect(10, 15, 60, 8);

dropdownDrawing.fillStyle = '#333';
dropdownDrawing.fillRect(10, 35, 60, 8);

dropdownDrawing.fillStyle = '#333';
dropdownDrawing.fillRect(10, 55, 60, 8);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Dropdown Button Drawing End >>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Single Line Across Screen Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const screenWidth = document.body.clientWidth;          // Retrive the size of the screen and set it to screenWidth
const lineCanvas = document.getElementById("topLine");  // Get ID topline and set it to lineCanvas
const topLine = lineCanvas.getContext("2d");            // Use lineCanvas and set it to 2d graphics and set that to topLine

topLine.beginPath();                    // Start shape
topLine.moveTo(10,10);                  // Move line position to start position (left side of screen -10px)
topLine.lineTo((screenWidth-10),10);    // Move line to width of screen minus 10 px
topLine.closePath;                      // End shape

topLine.strokeStyle = "#3c2d53";        // Colour stroke
topLine.lineWidth = 2;                  // Set width of stroke
topLine.stroke();                       // Draw stroke
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Single Line Across Screen End >>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Item Canvas Creation Start >>>>>>>>>>>>>>>>>>>>>>>>>>>>

let numOfItems = 22;
 
canvasHolder = []   // Will hold all item canvases

for (i = 1; i < numOfItems; i++) {
    canvasHolder[i] = document.getElementById("skillBar"+i);            // Add a new object to canvasHolder and equal it to id skillBar + i
    canvasHolder[i].skillBarItem = canvasHolder[i].getContext("2d");    // Add new property to canvasHolder + i call skillBarItem which links to the skillBar + i ID
    
    canvasHolder[i].gradient = canvasHolder[i].skillBarItem.createLinearGradient((canvasHolder[i].getAttribute('value')*4),0,(canvasHolder[i].getAttribute('value')*4+20),0);
    
    canvasHolder[i].gradient.addColorStop(0, skillRank(canvasHolder[i])); // Uses the function skillRank to set the correct colour in the rectangle for canvasHolder + i
    canvasHolder[i].gradient.addColorStop(1, "#555555");
    
    canvasHolder[i].skillBarItem.fillStyle = canvasHolder[i].gradient;
    
    canvasHolder[i].skillBarItem.fillRect(0,0,480,50);                      // Draw basic shape rectangle for canvasHolder + i                                        
    canvasHolder[i].skillBarItem.fill();                                    // Fill the rectangle with the stated colour for canvasHolder + i
}

function skillRank(event) {

    if (event.getAttribute('value') >= 110) { return'#cfbddd '}           // Above 90
    
    else if (event.getAttribute('value') >= 80) { return '#bdd6ee '}      // Between 70 and 89
    else if (event.getAttribute('value') >= 50) { return '#c5dfb4 '}      // Between 50 and 69
    else if (event.getAttribute('value') >= 30) { return '#f4f2b8 '}      // Between 30 and 49
    else if (event.getAttribute('value') >= 10) { return '#fbe5d6 '}      // Between 10 and 29
    
    else {return 'grey'}                                                  // Below 10
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Item Canvas Creation End >>>>>>>>>>>>>>>>>>>>>>>>>>>>




// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Start toggle animation code >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------------- This function shows a hidden element ------------------------------------------

let showElement = function (elem) {

	let getHeight = function () {
		elem.style.display = 'block';              // Make it visible
		let height = elem.scrollHeight -20 + 'px'; // Get it's height
		elem.style.display = '';                   // Hide it again
		return height;                             // Return the height
	};

	let height = getHeight();                  // Get the height from the above function
	elem.classList.add('is-visible');          // Make the element visible by adding a class
	elem.style.height = height;                // Update the max-height

	window.setTimeout(function () {	elem.style.height = '' }, 350); // Remove height after animate to scale correctly
};

// ----------------- This function hides a visible element ------------------------------------------

const hideElement = function (elem) {

	elem.style.height = elem.scrollHeight - 20 + 'px';                           // Returns the size of the elment with px at the end
	window.setTimeout(function () {	elem.style.height = '0'	}, 1);               // Sets the height to 0 to skrink it
	window.setTimeout(function () {	elem.classList.remove('is-visible') }, 350); // Hides the elemnt by removing a class

};

// ----------------- This function is a toggle to hide and show elements ----------------------------

const toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) { // If element has a class of is-visible, do this
		hideElement(elem);                       // Run function hideElement
		return;                                  // Exit this function
	}
	showElement(elem);                           // If it does not have element run function showElement
};

// ----------------- This function checks to see if the element clicked is toggle then runs the function toggle if true ----------------------------

document.addEventListener('click', function (event) {

	if (!event.target.classList.contains('toggle')) return;                   // If element click does not have class of toggle then exit function

    let content = document.getElementById(event.target.attributes.href.value) // The item clicked should have a href with the toggle contents name
        
	if (!content) return;                                                     // If not content exit function

	toggle(content);                                                          // run the toggle function on the content

}, false);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< End toggle animation code >>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Start slideshow code >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const imageHolder = document.getElementById("imageHolder") // Reference the id imageHolder as imageHolder

for (i = 0; i < imageHolder.children.length; i++){       // Loop through imageHolder's children
    imageHolder.children[i].hidden = true;               // make all children of imageHolder invisible
}

let currentImage = imageHolder.children[0]               // Set the currentImage to the first child of imageHolder
currentImage.hidden = false;                             // Make the currentImage visible

let currentString = currentImage.attributes[0].value.toString()         // Returns the currentImage class name as a string
let currentStringLast = currentString.charAt(currentString.length -1)   // Returns the last character of the currentstring
let currentInterger = parseInt(currentStringLast,10)                    // Returns the currentStringLast character as an interger

// Add a click event to a button so that it changes the currentImage to the next or previous image
document.addEventListener('click', function(event){
    
    if (event.target.classList.contains('imageForward')) {        // If click hits imageForward run this section
        
        currentInterger += 1;                                     // Adds 1 value to the nowNumber interger        

        if (currentInterger > imageHolder.children.length){       // Checks to see if the currentInterger is larger than the imageHolder's children value
            currentInterger = 1;                                  // If the value is greater than the children length then reset to 1
        }

        currentImage.hidden = true;                               // Hides the current image
        currentImage = imageHolder.children[currentInterger -1]   // Updates the current image with the nex timage
        currentImage.hidden = false;
    };
    
    if (event.target.classList.contains('imageBack')) {           // If click hits imageBack run this section
    
        currentInterger -= 1;                                     // Minus 1 value to the nowNumber interger

        if (currentInterger <= 0){                                // Checks to see if the currentInterger is larger than the imageHolder's children value
            currentInterger = imageHolder.children.length;        // If the value is greater than the children length then reset to 1
        }

        currentImage.hidden = true;                               // Hides the old current image
        currentImage = imageHolder.children[currentInterger -1]   // Updates the current image with the next image
        currentImage.hidden = false;                              // Reveal the new current image
    };
})

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< End slideshow code >>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Start Nav Link code >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const buttons = document.getElementsByClassName('button');  // create an array of all button classes

for (i = 0; i < buttons.length; i++){                       // Loop the length of the buttons array
    buttons[i].addEventListener('click', searchThenGo)      // Assign a click event to each of the button classse that runs searchThenGo
}

function searchThenGo(event) {
    let location = event.target.attributes.href.value;      // Store the clicked items href value as location
    
    if (location == 'titleArea'){
        console('here');
        menuMode();
        return;
    }
    document.querySelector('#'+location).scrollIntoView();  // Go to the ID item that is listed in the href value
    menuMode();
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< End Nav Link code >>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Start Menu display code >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const menuButton = document.getElementById('dropdownButton')    // menuButton is the dropdownButton (canvas)
const menu = document.getElementById('linkMenu');               // menu is the linkMenu Area that holds buttons
let menuOut = '-24%';
let menuIn = '0%';

menu.style.right = menuOut;                                     // makes sure that the menu is invisible by reseting style right

menuButton.addEventListener('click', menuMode)                  // Adds a click event to the menuButton that runs menuMode function

function menuMode() {
    
    if (menu.style.right == menuOut){  // if menu is not visible
        menu.style.right = menuIn;       // makes the menu visible by changing the righ style property
        return;                         // Exits function
    }
    
    else {                              // if menu is visible
        menu.style.right = menuOut;    // makes the menu invisible by changing the right style property
        return;                         // Exit function
    }    
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< End Menu display code >>>>>>>>>>>>>>>>>>>>>>>>>>>>





