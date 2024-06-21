
document.addEventListener('DOMContentLoaded', function() {
    var backgroundDiv = document.querySelector('.background-div');
  
    function fadeInOnScroll() {
      var distanceFromTop = backgroundDiv.getBoundingClientRect().top;
      var viewHeight = window.innerHeight;
  
      // Calculate when the top of the background-div is at the bottom of the viewport
      var triggerPoint = viewHeight - backgroundDiv.offsetHeight / 2;
  
      // Check if the background-div is in view
      if (distanceFromTop < triggerPoint) {
        backgroundDiv.style.opacity = 1;
        backgroundDiv.style.transform = 'translateY(0)';
      }
    }
  
    // Initial check in case the div is already visible on page load
    fadeInOnScroll();
  
    // Listen for scroll events to trigger the slide-up and fade-in effect
    window.addEventListener('scroll', fadeInOnScroll);
  });