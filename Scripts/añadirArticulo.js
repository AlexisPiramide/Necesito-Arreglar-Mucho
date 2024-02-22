const URL_SERVER = "http://52.87.217.52:3000/";

document.addEventListener("DOMContentLoaded", mainScript);

async function mainScript() {
    loadUserZone();
}

function loadUserZone() {
    const user = document.getElementById("texto-usuario");
    const usuario = sessionStorage.getItem("usuario");
    if (usuario != null) {
        user.innerHTML = usuario;
    } else {
        user.innerHTML = "User Zone";
    }
}

const boton = document.getElementById("añadirArticulo")
boton.addEventListener("click", async function (e) {
    e.preventDefault();
    await añadirArticulo();
    window.location = '/articulos.html';
});


async function añadirArticulo() {
    let nombre = document.getElementById("nombre").value;
    let imagen = document.getElementById("imagen").value;
    let mensaje = document.getElementById("mensaje").value;
    
    try {
        const response = await fetch(URL_SERVER + "articulos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                imageSrc: imagen,
                itemName: nombre,
                itemDescription: mensaje
            }),
        });
        if (response.ok) {
            const articulo = await response.json();
            console.log(articulo);
            return articulo;
        }
    } catch (error) {
        console.error(error);
    }
}
