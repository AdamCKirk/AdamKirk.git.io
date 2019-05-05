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
