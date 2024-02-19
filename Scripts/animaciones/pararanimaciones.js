document.addEventListener('DOMContentLoaded', boton);

function boton() {
    const button = document.getElementById('boton_Para_Animaciones');
    let isPaused = false;

    button.addEventListener('click', () => {
        if (isPaused) {
            reanudadanimacion();
            isPaused = false;
        } else {
            pararanimacion();
            isPaused = true;
        }
    });
}


function reanudadanimacion() {
    reanudarLogo();
    reanudaSlider();
    turnOnAnimations();
    showSlides();
}

function pararanimacion() {
    paraLogo();
    pararSlider();
    turnOffAnimations();
}

function reanudarLogo(){
    const wingPaths = document.querySelectorAll('#path8, #path9, #path10, #path11, #path12, #path13, #path14, #path15, #path16, #path17');
    const articulatePaths = document.querySelectorAll('#path3, #path4, #path5, #path6, #path7');
   
    wingPaths.forEach(path => {
        path.style.animation = 'wing 8s infinite';
    });

    articulatePaths.forEach(path => {
        path.style.animation = 'articulate 8s infinite';
    });


    var svg = document.getElementById("logo");
    const paths = svg.getElementsByTagName("path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].style.fill = "url(#inversephoenixGradient)";
    }
}

function paraLogo(){
    const wingPaths = document.querySelectorAll('#path8, #path9, #path10, #path11, #path12, #path13, #path14, #path15, #path16, #path17');
    const articulatePaths = document.querySelectorAll('#path3, #path4, #path5, #path6, #path7');

    wingPaths.forEach(path => {
        path.style.animation = 'none';
    });

    articulatePaths.forEach(path => {
        path.style.animation = 'none';
    });

    var svg = document.getElementById("logo");
    const paths = svg.getElementsByTagName("path");
    for (var i = 0; i < paths.length; i++) {
        paths[i].style.fill = "#084698";
    }
}


function reanudaSlider() {
    let slides = document.getElementsByClassName("mySlidespaused");

    slides[2].classList.replace("mySlidespaused", "mySlides");
    slides[1].classList.replace("mySlidespaused", "mySlides");
    slides[0].classList.replace("mySlidespaused", "mySlides");
    
}

function pararSlider() {
    let slides = document.getElementsByClassName("mySlides");
    
    slides[2].classList.replace("mySlides", "mySlidespaused");
    slides[1].classList.replace("mySlides", "mySlidespaused");
    slides[0].classList.replace("mySlides", "mySlidespaused");
   
    
}


function turnOffAnimations() {
    var elements = document.querySelectorAll('#segment2, #segment4, #segment6, #segment3, #segment5');

    elements.forEach(function(element) {
        element.style.animationName = 'a';
    });
}


function turnOnAnimations() {
    var elements = document.querySelectorAll('#segment2, #segment4, #segment6, #segment3, #segment5');

    elements.forEach(function(element) {
        element.style.animationName = 'aparicionIzquierda';
    });
}

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000);
}