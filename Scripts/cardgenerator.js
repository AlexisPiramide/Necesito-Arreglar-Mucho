document.addEventListener("DOMContentLoaded", mainScript);


const URL_SERVER = "http://52.87.217.52:3000/";


document.addEventListener("DOMContentLoaded", mainScript);

async function mainScript() {
    loadUserZone();
    const data = await fetchDataFromDatabase();
    generateCards(data);
}


async function fetchDataFromDatabase() {
    try {
        const response = await fetch(URL_SERVER + "articulos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
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


function generateCards(data) {
    const container = document.getElementById("card-container");
    console.log(data);
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = item.imageSrc;
        card.appendChild(image);

        const itemName = document.createElement("h3");
        itemName.textContent = item.itemName; 
        itemName.setAttribute("aria-label", item.itemName);
        itemName.setAttribute("tabindex",0);
        card.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.itemDescription;
        itemDescription.setAttribute("aria-label", item.itemDescription);
        itemDescription.setAttribute("tabindex",0);
        card.appendChild(itemDescription);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar Articulo";
        deleteButton.setAttribute("tabindex",0);
        card.appendChild(deleteButton);

        const id = document.createElement("div");
        id.textContent = item.id;
        id.style.display = "none";
        card.appendChild(id);

        container.appendChild(card);

    });
}

const textobuscar = document.getElementById('textobuscar')
textobuscar.addEventListener('input', filterCards);

function filterCards() {

    const searchText = textobuscar.value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].querySelector('h3').textContent.toLowerCase();
        if (cardTitle.includes(searchText)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

const contenedor = document.getElementById("card-container");

contenedor.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
        borrarArticulo(e);
    }
});

async function borrarArticulo(e) {
    e.preventDefault();

    const card = e.target.closest(".card");

    const articleId = card.querySelector("div").textContent;

    try {
        const response = await fetch(URL_SERVER + "articulos/" + articleId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            card.remove();
        } else {
            console.error("Failed to delete article");
        }
    } catch (error) {
        console.error(error);
    }
}


const botonarticulos = document.getElementById("botonarticulos");
const botonnuevo = document.getElementById("botonnuevo");
const botonfromularios = document.getElementById("botonfromularios");

botonarticulos.addEventListener("click", cambiarbotonarticulos);
botonnuevo.addEventListener("click", cambiarbotonnuevo);
botonfromularios.addEventListener("click", cambiarbotonfromularios);

function cambiarbotonarticulos() {
    window.location = '/articulos.html';
}

function cambiarbotonnuevo() {
    window.location = '/nuevo.html';
}

function cambiarbotonfromularios() {
    window.location = '/forms.html';
}