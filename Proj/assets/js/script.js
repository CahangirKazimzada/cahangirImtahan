const menuBar = document.querySelector(".menu-bar");
const respList = document.querySelector(".resp-list");

menuBar.addEventListener("click", () => {
    respList.classList.toggle("open-list");
});

const cards = document.querySelector(".cards");

fetch("http://localhost:3000/cards").then(res => res.json()).
then(data => {
    data.forEach(element => {
        createCards(element)
    });
});

function createCards(el){
    const cardBox = document.createElement("div");
    cardBox.className = "card-box";
    const img = document.createElement("img");
    img.src = el.img;
    const country = document.createElement("div");
    country.className = "country";
    const link = document.createElement("a");
    link.innerText = el.country;
    country.appendChild(link);
    const cardContent = document.createElement("div");
    cardContent.innerText = el.content;
    const loremText = document.createElement("div");
    loremText.innerText = el.loremText;
    cardBox.append(img, country, cardContent, loremText);
    cards.appendChild(cardBox);
}