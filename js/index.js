console.log("script chargé");

/*********** PAGE CARTE ***********/

// Affichage des catégories

// On répertorie les catégories dans la variable categories
const categories = ["Menus", "Sandwiches", "Burgers", "Tacos","Paninis", "Croqs", "Menu enfant", "Petite faim", "Boissons", "Desserts"];

// Pour chaque catégorie du tableau, 
for(const category of categories) {
    // on créé une carte
    addCard(category)
};

// Création de la carte avec son contenu
function addCard(category) {
    // Création de la div card
    const card = document.createElement("div");
    // Pour la gestion du css, on lui ajoute une class
    card.classList.add("body__main--ctn-cards-card");
    // Création d'un titre
    const title = document.createElement("h2");
    // Pour la gestion du css, on lui ajoute une class
    title.classList.add("body__main--ctn-cards-card-title");
    // Pour la gestion du click, on lui ajoute un id
    title.setAttribute("id", `${category.toLowerCase()}`);
    // On renseigne le contenu du titre
    title.textContent = `${category}`;
    // On insère le titre dans la card
    card.appendChild(title);
    // On insère la card dans le ctn-cards
    document.querySelector(".body__main--ctn-cards").appendChild(card);
};

// La catégorie "Menus" contient des sous-catégories que les autres catégories n'ont pas

// Gestion de l'affichage des modales au click

// On écoute le click dans le ctn-cards

// On ouvre la modale dont la class est identique à l'id