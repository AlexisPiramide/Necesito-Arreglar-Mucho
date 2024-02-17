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
}

function pararanimacion() {
    paraLogo();
}

function reanudarLogo(){
    const wingPaths = document.querySelectorAll('#path8, #path9, #path10, #path11, #path12, #path13, #path14, #path15, #path16, #path17');
    const articulatePaths = document.querySelectorAll('#path3, #path4, #path5, #path6, #path7');
    const all = document.querySelectorAll('#path3, #path4, #path5, #path6, #path7, #path8, #path9, #path10, #path11, #path12,  #path13, #path14, #path15, #path16, #path17 ');
    
    wingPaths.forEach(path => {
        path.style.animation = 'wing 8s infinite';
    });

    articulatePaths.forEach(path => {
        path.style.animation = 'articulate 8s infinite';
    });

    all.forEach(path => {
        path.style.fill = 'url(#phoenixGradient);';
    });
   
}

function paraLogo(){
    const wingPaths = document.querySelectorAll('#path8, #path9, #path10, #path11, #path12, #path13, #path14, #path15, #path16, #path17');
    const articulatePaths = document.querySelectorAll('#path3, #path4, #path5, #path6, #path7');
    const all = document.querySelectorAll('#path1, #path2, #path3, #path4, #path5, #path6, #path7, #path8, #path9, #path10, #path11, #path12,  #path13, #path14, #path15, #path16, #path17 ');
    

    wingPaths.forEach(path => {
        path.style.animation = 'none';
    });

    articulatePaths.forEach(path => {
        path.style.animation = 'none';
    });

    all.forEach(path => {
        path.style.fill = 'black';
       
    });
}
