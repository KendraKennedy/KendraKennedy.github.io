var slideIndex = [1, 1];

var slideId = ["mySlides1","mySlides2"]
var dotId = ["dotSet1", "dotSet2"]

currentSlide(1, 0);
currentSlide(1, 1);

// Next/previous controls
function plusSlides(n, slideSetIndex) {
  currentSlide(slideIndex[slideSetIndex] += n, slideSetIndex);
}

// dot controls
function currentSlide(n, slideSetIndex) {
	var dots = document.getElementsByClassName(dotId[slideSetIndex]);
	
	if(n > dots.length){
		n = 1;
	}else if(n < 1){
		n = dots.length;
	}
	
	var i;
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	dots[n-1].className += " active";
	
	showSlides(slideIndex[slideSetIndex] = n, slideSetIndex);
}

// set shown image
function showSlides(n, slideSetIndex) {
  var i;
  var slides = document.getElementsByClassName(slideId[slideSetIndex]);
  
  if (n > slides.length) {slideIndex[slideSetIndex] = 1}
  
  if (n < 1) {slideIndex[slideSetIndex] = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex[slideSetIndex]-1].style.display = "block";
  
}