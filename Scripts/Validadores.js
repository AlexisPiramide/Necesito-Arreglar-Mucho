
function ValidadorEmail() {
    let emailInput = document.getElementById("email");
    emailInput.addEventListener("blur", function () {
        let email = emailInput.value;

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("El correo electrónico no es válido");
            this.reportValidity();
        }
    });
}

function ValidadorContraseña() {
    let passwordInput = document.getElementById("password");

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
    let passwordInput = document.getElementById("password");
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