document.addEventListener("DOMContentLoaded", mainScript);

function mainScript() {
    const emailInput = document.getElementById("emailforminput");
    let ultimaBusqueda;
    emailInput.addEventListener("blur", function (e) {
        validarEmail();
    });

    const registro = document.getElementById('registro');
    const inicio = document.getElementById('inicio');

    registro.addEventListener("click", async function (e) {
        e.preventDefault()
        let email = emailInput.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            ultimaBusqueda =await buscarUsuariosPorEmail(email)
            
            if (ultimaBusqueda.correo === email) {
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
            ultimaBusqueda =await buscarUsuariosPorEmail(email)
            if (ultimaBusqueda.correo === email) {
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

    passwordloginbutton.addEventListener("submit", async function (e) {
        e.preventDefault();
        let contraseña = passwordlogin.value;
        if (ultimaBusqueda.contraseña === contraseña) {
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


async function buscarUsuariosPorEmail(email) {
    try {
        const response = await fetch(`${URL_SERVER}usuarios?correo_like=${email}`);
        if (response.ok) {
            const usuarios = await response.json();
            console.log(usuarios);
            return usuarios;
        } else {
            console.log("error");
            throw new Error("Error de servidor");
        }
    } catch (error) {
        console.error(error);
    }
}
