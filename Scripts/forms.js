document.addEventListener("DOMContentLoaded", mainScript);

function mainScript() {
    ValidadorEmail()
    const registro = document.getElementById('registro');
    const inicio = document.getElementById('inicio');

    registro.addEventListener("click", registroForm);
    inicio.addEventListener("click", inicoForm);

    const volver = document.getElementById('volver');
    const volver2 = document.getElementById('volver2');
    const cambio = document.getElementById('cambio');
    const cambio2 = document.getElementById('cambio2');

    volver.addEventListener("click", volverForm);
    volver2.addEventListener("click", volverForm);
    cambio.addEventListener("click", cambioForm);
    cambio2.addEventListener("click", cambioForm);
    console.log("DOM fully loaded and parsed");
}


function registroForm(e){
    console.log(e)
    e.preventDefault();

    mostrarRegistro();
}

function inicoForm(e){
    console.log(e)
    e.preventDefault();

    mostrarLogin();

}

function volverForm(e){
    console.log(e)
    e.preventDefault();

    mostrarForm();
}


function cambioForm(e){
    console.log(e)
    e.preventDefault();

    if (document.getElementById("formregistro").style.display === 'block') {
        mostrarLogin();
    } else if (document.getElementById("formlogin").style.display === 'block') {
        mostrarRegistro();
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
    let emailInput = document.getElementById("emailforminput");

    emailInput.addEventListener("blur", function (e) {
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("El correo electrónico no es válido");
            this.reportValidity();
        }
    });
}