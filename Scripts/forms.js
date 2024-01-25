document.addEventListener("DOMContentLoaded", mainScript);

function mainScript() {
    
    const registro = document.getElementById('registro');
    const inicio = document.getElementById('inicio');

    registro.addEventListener("click", submitForm);
    inicio.addEventListener("click", submitForm);

    const volver = document.getElementById('volver');
    const cambio = document.getElementById('cambio');

    volver.addEventListener("click", submitForm);
    cambio.addEventListener("click", submitForm);
    console.log("DOM fully loaded and parsed");
}

function submitForm(e) {

    console.log("submitForm");
    e.preventDefault();

    const buttonId = e.target.id;

    if (ValidadorEmail()){
        console.log("ValidadorEmail");
    }

    switch (buttonId) {
        case 'inicio':
            mostrarLogin();
            console.log(buttonId)
            break;
        case 'registro':
            mostrarRegistro();
            console.log(buttonId)
            break;
        case 'volver':
            mostrarForm();
            console.log(buttonId)
            break;
        case 'cambio':
            if (document.getElementById("formregistro").style.display === 'block') {
                mostrarLogin();
                console.log(buttonId)
            } else if (document.getElementById("formlogin").style.display === 'block') {
                mostrarRegistro();
                console.log(buttonId)
            }
            break;
        default:
            console.log(buttonId)
            console.log("Button not recognized");
    }
}

function mostrarLogin() {
    const login = document.getElementById('formlogin');
    const form = document.getElementById('form');
    const registro = document.getElementById('formregistro');

    login.style.display = 'block';
    form.style.display = 'none';
    registro.style.display = 'none';
}

function mostrarForm() {
    const login = document.getElementById('formlogin');
    const form = document.getElementById('form');
    const registro = document.getElementById('formregistro');

    login.style.display = 'none';
    form.style.display = 'block';
    registro.style.display = 'none';
}

function mostrarRegistro() {
    const login = document.getElementById('formlogin');
    const form = document.getElementById('form');
    const registro = document.getElementById('formregistro');

    login.style.display = 'none';
    form.style.display = 'none';
    registro.style.display = 'block';
}

function ValidadorEmail() {
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("blur", function () {
        const email = emailInput.value;

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("El correo electrónico no es válido");
            this.reportValidity();
        }
    });
}