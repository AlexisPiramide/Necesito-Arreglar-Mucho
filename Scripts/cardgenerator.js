document.addEventListener("DOMContentLoaded", mainScript);


const URL_SERVER = "http://18.213.254.148:3000/";


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
        image.alt = "Item Image";
        card.appendChild(image);

        const itemName = document.createElement("h3");
        itemName.textContent = item.itemName;
        card.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.itemDescription;
        card.appendChild(itemDescription);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        card.appendChild(deleteButton);

        container.appendChild(card);
    });
}

const textobuscar =  document.getElementById('textobuscar')
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


function borrarArticulo(){
    e.preventDefault()


}