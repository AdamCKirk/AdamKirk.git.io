// JavaScript Document

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
		
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");

		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
	}
	
	//This section is to counter the fixed  navbar
	var navButtons = document.getElementsByClassName("banner")[0].childNodes;
	
	for (var i = 0; i< navButtons[i].length; i++) {
		
		navButtons.onClick = function(e) {
			
			e.preventDefault();
			
			var elemID = this.getAttribute("href"), elem = document.getElementById(elementID.substr(1));
		
			document.getElementsByTagName("htlm")[0].scrollTop = elem.offsetTop;
		}
	}





// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Start toggle animation code >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------------- This function shows a hidden element ------------------------------------------

let showElement = function (elem) {
    console.log(elem)
	let getHeight = function () {
		elem.style.display = 'block';              // Make it visible
        let height = elem.scrollHeight -20 + 'px'; // Get it's height
        elem.style.display = '';                   // Hide it again
        return height;                             // Return the height
    };
	
	let height = getHeight();                  // Get the height from the above function
    elem.classList.add('is-visible');          // Make the element visible by adding a class
    elem.style.height = height;                // Update the max-height
	
	window.setTimeout(function () {elem.style.height = '' }, 350); // Remove height after animate to scale correctly
};

// ----------------- This function hides a visible element ------------------------------------------

const hideElement = function (elem) {
	
	elem.style.height = elem.scrollHeight - 20 + 'px';         // Returns the size of the elment with px at the end
	window.setTimeout(function () {elem.style.height = '0'}, 1);               // Sets the height to 0 to skrink it
	window.setTimeout(function () {elem.classList.remove('is-visible') }, 350); // Hides the elemnt by removing a class

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
	
	if (!event.target.classList.contains('toggle')) return; // If element click does not have class of toggle then exit function
	console.log(event)

    let content = document.getElementById(event.target.attributes.href.value) // The item clicked should have a href with the toggle contents name
	
	if (!content) return;  // If not content exit function
	toggle(content);       // run the toggle function on the content

}, false);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<< End toggle animation code >>>>>>>>>>>>>>>>>>>>>>>>>>>>








// -------------------- jQuery coding ------------------------
let linkClosed = false;
$('.navCase').animate({right:'-80%'},0);

$(document).ready(() => {
	
	$(".navButton").on("click", () => {		
		
		if(linkClosed == false){
			$('.navCase').animate({right:'0%'},500);
			linkClosed = true;
		} else {
			$('.navCase').animate({right:'-80%'},800);
			linkClosed = false;
		}		
	})	
})
