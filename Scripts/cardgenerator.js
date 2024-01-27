document.addEventListener("DOMContentLoaded", mainScript);


const URL_SERVER = "http://18.213.254.148:3000/";


document.addEventListener("DOMContentLoaded", mainScript);

async function mainScript() {
    const data = await fetchDataFromDatabase();
    generateCards(data);
}


const data = [
    {
        imageSrc: "https://t2.ea.ltmcdn.com/es/posts/8/6/7/la_alimentacion_del_pinguino_20768_600.jpg",
        itemName: "Pinguino",
        itemDescription: "Description 1"
    },
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/09/Polar_Bear_-_Alaska.jpg",
        itemName: "Oso Polar",
        itemDescription: "Description 2"
    },
    {
        imageSrc: "https://static.nationalgeographic.es/files/styles/image_3200/public/surface-narwhal-canada.jpg?w=1600&h=900",
        itemName: "Narval",
        itemDescription: "Description 3"
    },
    {
        imageSrc: "https://www.fundacionaquae.org/wp-content/uploads/2019/09/ballena.jpg",
        itemName: "Ballena",
        itemDescription: "Description 4"
    }
];

async function fetchDataFromDatabase() {
    try {
        const response = await fetch(URL_SERVER + "articulos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
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


