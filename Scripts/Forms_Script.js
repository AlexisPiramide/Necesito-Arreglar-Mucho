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

    inicio.addEventListener("click", async function (e) {
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

    volver.addEventListener("click", volverForm);
    volver2.addEventListener("click", volverForm);
    console.log("DOM fully loaded and parsed");



    const passwordlogin = document.getElementById("passwordlogin");
    const passwordloginbutton = document.getElementById("passwordloginbutton");

    passwordloginbutton.addEventListener("click", async function (e) {
        e.preventDefault();
        let contraseña = passwordlogin.value;
        let email = emailInput.value;
        let result = await comprobarContraseñaEnServidor(email, contraseña);
        if (result[[0]]) {
            sessionStorage.setItem("usuario", result[1]);
            window.location='/articulos.html'
        } else {
            alert("Contraseña incorrecta")
        }
    });

    const passwordregistro = document.getElementById("passwordregistro");
    const repetirpassword = document.getElementById("repetirpassword");
    const usuario = document.getElementById("usuario");
    const passwordregistrobutton = document.getElementById("passwordregistrobutton");

    passwordregistro.addEventListener("blur", ValidadorContraseña);
    repetirpassword.addEventListener("blur", ValidadorConfirmarContraseña);


    passwordregistrobutton.addEventListener("click", async function (e) {
        e.preventDefault();
        let contraseña = passwordregistro.value;
        let email = emailInput.value;
        let nombre_usuario = usuario.value;

        if (await comprobarUsuarioEnServidor(usuario.value)) {
            alert("El nombre de usuario ya existe")
        }
        else {
            await añadirUsuario(email, contraseña, nombre_usuario);
            sessionStorage.setItem("usuario", nombre_usuario);
            window.location='/articulos.html'
        }
    });
}

/**Logica añadir usuario al server */

async function añadirUsuario(email, contraseña, nombre_usuario) {

    try {
        const response = await fetch(URL_SERVER + "usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                correo: email,
                contraseña: contraseña,
                nombre_usuario: nombre_usuario
            }),
        });
        if (response.ok) {
            const usuario = await response.json();
            console.log(usuario);
            return usuario;
        }
    }
    catch (error) {
        console.error(error);
    }
}

/**Logica valicacion del correo con el servidor */

const URL_SERVER = "http://52.87.217.52:3000/";


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

async function comprobarContraseñaEnServidor(email, contraseña) {
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

/**Logica valicacion del registro con el servidor */

async function comprobarUsuarioEnServidor(usuario) {
    try {
        const response = await fetch(URL_SERVER + "usuarios");
        if (response.ok) {
            const usuarios = await response.json();
            for (const usuario of usuarios) {
                if (usuario.nombre_usuario === usuario) {
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

function ValidadorContraseña() {
    let passwordInput = document.getElementById("passwordregistro");

    passwordInput.addEventListener("input", function () {
        let password = this.value;
        let mensaje = GeneradorMensaje(password);

        if (mensaje === "") {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("La contraseña debe contener al menos : " + mensaje);
            this.reportValidity();
        }
    });
}

function GeneradorMensaje(Contraseña) {
    let validacion = true;
    let mensaje = "";

    if (Contraseña.length < 8) {
        mensaje += "8 caracteres";
        validacion = false;
    }

    if (!/[A-Z]/.test(Contraseña)) {
        if (!validacion) {
            mensaje += ", 1 letra Mayuscula";
        } else {
            mensaje += "1 letra Mayuscula";
        }
        validacion = false;
    }

    if (!/\d/.test(Contraseña)) {
        if (!validacion) {
            mensaje += ", 1 Numero";
        } else {
            mensaje += "1 Numero";
        }
        validacion = false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(Contraseña)) {
        if (!validacion) {
            mensaje += ", 1 Caracter Especial (#$%^&...).";
        } else {
            mensaje += "1 Caracter Especial (#$%^&...).";
        }
        validacion = false;
    }

    return mensaje;
}

function ValidadorConfirmarContraseña() {
    let passwordInput = document.getElementById("passwordregistro");
    let repetirPasswordInput = document.getElementById("repetirpassword");
    repetirPasswordInput.addEventListener("blur", function () {
        let password = passwordInput.value;
        let confirmpassword = repetirPasswordInput.value;

        if (password == confirmpassword) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("La contraseña no coincide");
            this.reportValidity();
        }
    });
}
