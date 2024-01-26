document.addEventListener("DOMContentLoaded", mainScript);

function mainScript() {

    const emailInput = document.getElementById("emailforminput");

    emailInput.addEventListener("blur", function (e) {
        validarEmail();
    });

    const registro = document.getElementById('registro');
    const inicio = document.getElementById('inicio');


    registro.addEventListener("click", async function (e) {
        e.preventDefault()
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (await comprobarEmailEnServidor(email)) {
                alert("El correo seleccionado no es correcto o ya hay una cuenta vinculada a ella ¿desea iniciar sesion?")
            } else {
                registroForm()
            }
        }
    });

    inicio.addEventListener("click",async function (e) {
        e.preventDefault()
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            if (await comprobarEmailEnServidor(email)) {    
                inicioForm()
            } else {
                alert("El correo seleccionado no es correcto o no hay ninguna cuenta vinculada a ella ¿desea crear una cuenta?")
            }
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



    const passwordlogin = document.getElementById("passwordlogin");
    const passwordloginbutton = document.getElementById("passwordloginbutton");

    passwordloginbutton.addEventListener("click", async function (e) {
        e.preventDefault();
        let contraseña = passwordlogin.value;
        let email = emailInput.value;
        let result = await comprobarContraseñaEnServidor(email,contraseña);
        if (result[[0]]) {
            sessionStorage.setItem("usuario", result[1]);
        } else {
            alert("Contraseña incorrecta")
        }
    });
}

/**Logica valicacion del correo con el servidor */

const URL_SERVER = "http://18.213.254.148:3000/";


async function comprobarEmailEnServidor(email) {
    try {
        const response = await fetch(URL_SERVER + "usuarios");
        if (response.ok) {
            const usuarios = await response.json();
            for (const usuario of usuarios) {
                if (usuario.correo === email) {
                    console.log(true);
                    return true;
                }
            }
        } else {
            console.log("error");
            throw new Error("Error de servidor");
        }
    } catch (error) {
        console.error(error);
    }
}

/**Logica valicacion del contraseña con el servidor */

async function comprobarContraseñaEnServidor(email,contraseña) {
    try {
        const response = await fetch(URL_SERVER + "usuarios");
        if (response.ok) {
            const usuarios = await response.json();
            for (const usuario of usuarios) {
                if (usuario.correo === email) {
                    console.log(true);
                    if (usuario.contraseña === contraseña) {
                        console.log(true);
                        return true;
                    }
                    return [true, usuario.nombre_usuario]
                }
                
            }
        } else {
            console.log("error");
            throw new Error("Error de servidor");
        }
    } catch (error) {
        console.error(error);
    }
}

/**Logica cambio de formularios */

function registroForm(e) {
    mostrarRegistro();
    const correoinico = document.getElementById("correoinicio")
    const correoregistro = document.getElementById("correoregistro")
    const emailforminput = document.getElementById("emailforminput").value

    correoregistro.value = emailforminput;
    correoinico.value = emailforminput;
}

function inicioForm(e) {
    mostrarLogin();
    const correoinico = document.getElementById("correoinicio")
    const correoregistro = document.getElementById("correoregistro")
    const emailforminput = document.getElementById("emailforminput").value

    correoregistro.value = emailforminput;
    correoinico.value = emailforminput;
}

function volverForm(e) {
    e.preventDefault();
    mostrarForm();
}


function cambioForm(e) {
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

/**Logica Validaciones */

function validarEmail() {
    let emailInput = document.getElementById("emailforminput");

    let email = emailInput.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

    } else {
        emailInput.setCustomValidity("El correo electrónico no es válido");
        emailInput.reportValidity();
    }
}

