document.addEventListener("DOMContentLoaded", mainScript);

function mainScript() {

    const emailInput = document.getElementById("emailforminput");
   
    emailInput.addEventListener("blur", function (e) {
        validarEmail();
    });

    const registro = document.getElementById('registro');
    const inicio = document.getElementById('inicio');

   
    registro.addEventListener("click", function (e) {
        e.preventDefault()
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            /**
             * if(estaenserver){
             * registroForm()
             * }else{
             *  alert("El correo seleccionado no es correcto o ya hay una cuenta vinculada a ella ¿desea iniciar sesion?")
             * 
             * }
             * 
             * 
             */
            registroForm()
        }
    });

    inicio.addEventListener("click", function (e) {
        e.preventDefault()
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            /**
             * if(estaenserver){
             * registroForm()
             * }else{
             *  alert("El correo seleccionado no es correcto o existe cuenta relacionada con ella ¿desea crear cuenta?")
             * 
             * }
             */
            inicoForm()
        }
    });

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
    mostrarRegistro();
    const correoinico = document.getElementById("correoinicio")
    const correoregistro = document.getElementById("correoregistro")
    const emailforminput = document.getElementById("emailforminput").value

    correoregistro.value = emailforminput;
    correoinico.value = emailforminput;
}

function inicoForm(e){
    mostrarLogin();
    const correoinico = document.getElementById("correoinicio")
    const correoregistro = document.getElementById("correoregistro")
    const emailforminput = document.getElementById("emailforminput").value

    correoregistro.value = emailforminput;
    correoinico.value = emailforminput;
}

function volverForm(e){
    e.preventDefault();
    mostrarForm();
}


function cambioForm(e){
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

function validarEmail() {
    let emailInput = document.getElementById("emailforminput");

    let email = emailInput.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
       
    } else {
        emailInput.setCustomValidity("El correo electrónico no es válido");
        emailInput.reportValidity();
    }
}
