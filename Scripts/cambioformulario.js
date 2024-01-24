const htmllogin = `<button id="volver"><img src="../../Volver.png"></button><header>Inicio Sesion</header><form action="#"><div class="field email"><div class="input-area"><input id="campoemail" type="email" placeholder="Email Address" disabled value="220240@fppiramide.com"><i class="icon fas fa-envelope"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Email can't be blank</div></div><div class="field password"><div class="input-area"><input type="password" placeholder="Password"><i class="icon fas fa-lock"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Password can't be blank</div></div><div class="pass-txt"><a href="#">¿Olvidaste tu contraseña?</a></div><input type="submit" value="Login"></form><div class="sign-txt">¿Nuevo Usuario? <a id="cambio">Registrate</a></div>`;
const htmlregistro = `<button id="volver"><img src="../../Volver.png"></button><header>Registro</header><form action="#"><div class="field"><div class="input-area"><input type="text" placeholder="Usuario" name="usuario"><i class="icon fas fa-user"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Usuario can't be blank</div></div><div class="field email"><div class="input-area"><input type="email" disabled value="220240@fppiramide.com"><i class="icon fas fa-envelope"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Email can't be blank</div></div><div class="field password"><div class="input-area"><input id="password" type="password" placeholder="Password" name="password"><i class="icon fas fa-lock"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Password can't be blank</div></div><div class="field password"><div class="input-area"><input id="repetirpassword" type="password" placeholder="Confirm Password" name="confirmPassword"><i class="icon fas fa-lock"></i><i class="error error-icon fas fa-exclamation-circle"></i></div><div class="error error-txt">Passwords don't match</div></div><div class="pass-txt"><a href="#">¿Olvidaste tu contraseña?</a></div><input type="submit" value="Registrarse"></form><div class="sign-txt">¿Ya tienes una cuenta? <a id="cambio">Inicia Sesión</a></div></div>`;
const htmlSelector = `<div class="wrapper"><form><div class="form-group"><label for="email">Email</label><input id="email" autofocus="" type="email" name="email" placeholder="email@example.com" required="required"></div><div class="form-group"><button id="registro" type="submit" class="button"><span>Registro nuevos usuarios</span></button></div><div class="form-group"><button id="inicio" type="submit" class="button"><span>Inicio de sesion con Email</span></button></div></form></div>`;


function cambioFormulario(){
    const cambio = document.getElementById("cambio");
    cambio.addEventListener("click", () => logicaCambio(htmlregistro, htmllogin, htmlSelector));
    const volver = document.getElementById("volver");
    volver.addEventListener("click", () => logicaCambio(htmlregistro, htmllogin, htmlSelector));
}

function logicaCambio(htmlregistro, htmllogin, htmlSelector) {
    const id = event.target.id;
    const wrapper = document.getElementById("wrapper");
    const cambio = document.getElementById("cambio");
    if(id === "cambio"){
        if (cambio.value === "registro"){
            wrapper.innerHTML = htmlregistro;
        }
        if(cambio.value === "inicio"){
            wrapper.innerHTML = htmllogin;
        }
    }
    if (id === "volver") {
        wrapper.innerHTML = htmlSelector;
    }
}