document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelector(".circles");
    const toggleButton = document.getElementById("toggleAnimation");
  
    let isCirclesVisible = true;
  
    toggleButton.addEventListener("click", function () {
      if (isCirclesVisible) {
        circles.style.visibility = "hidden";
      } else {
        circles.style.visibility = "visible";
      }
  
      isCirclesVisible = !isCirclesVisible;
    });
  });
  
  