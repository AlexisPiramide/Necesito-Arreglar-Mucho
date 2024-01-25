
const wrapper = document.getElementById('wrapper');


const login = wrapper.getElementById('login');
const form = wrapper.getElementById('form');
const registro = wrapper.getElementById('registro');


function submitForm(e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const buttonId = e.target.id;

    const emailValue = emailInput.value;

    ValidadorEmail(emailValue);

    if (buttonId === 'login') {
        mostrarLogin();
    } else if (buttonId === 'form') {
        mostrarForm();
    } else if (buttonId === 'registro') {
        mostrarRegistro();
    }

}

function mostrarLogin() {
    login.style.display = 'block';
    form.style.display = 'none';
    registro.style.display = 'none';
}


function mostrarForm() {
    login.style.display = 'none';
    form.style.display = 'block';
    registro.style.display = 'none';
}


function mostrarRegistro() {
    login.style.display = 'none';
    form.style.display = 'none';
    registro.style.display = 'block';
}


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