
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 1
  }
/*
  if (n < 1) {
    slideIndex = slides.length
  }
*/
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatically change slides every 4 seconds
var autoSlideInterval = setInterval(function() {
  plusSlides(1);
}, 4000);

// Pause automatic slide change on mouse hover
var slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(autoSlideInterval);
});

// Resume automatic slide change on mouse leave
slideshowContainer.addEventListener('mouseleave', function() {
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 4000);
});
showSlides(slideIndex);