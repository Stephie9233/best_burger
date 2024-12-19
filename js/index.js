console.log("script chargé");

/*********** PAGE CARTE ***********/

// Affichage des catégories

// On répertorie les catégories dans la variable categories
const carte = [
    {
        category: "Burgers",
        sandwiches: [
            {
                name: "Big M", 
                composition: ["2 steaks 45 g", "cheddar"], 
                picture: "./img/menus/burgers/big_m.png",
                price_menu: 10.90,
                price: 6.90
            },
            {
                name: "Double cheese", 
                composition: ["2 steaks 45 g", "2 cheddar"],
                picture: "./img/menus/burgers/double_cheese.png", 
                price_menu: 9.90,
                price: 6.25
            },
            {
                name: "Cheese burger", 
                composition: ["1 steak 45 g", "cheddar"],
                picture: "./img/menus/burgers/cheese.png", 
                price_menu: 8.90,
                price: 5.50
            },
            {
                name: "Bacon burger", 
                composition: ["1 steak 90 g", "1 oeuf", "1 bacon", "cheddar"],
                picture: "./img/menus/burgers/bacon.png", 
                price_menu: 11.90,
                price: 7.90
            },
            {
                name: "Beef chicken", 
                composition: ["1 steak 45 g", "1 galette de chicken", "cheddar"],
                picture: "./img/menus/burgers/beef_chicken.png", 
                price_menu: 11.50,
                price: 7.50

            },
            {
                name: "Chicken burger", 
                composition: ["steak poulet pané", "cheddar"],
                picture: "./img/menus/burgers/chicken.png", 
                price_menu: 10.90,
                price: 7.10
            },
            {
                name: "Rostie burger", 
                composition: ["1 steak 90 g", "1 galette de pommes de terre", "cheddar"],
                picture: "./img/menus/burgers/rostie.png", 
                price_menu: 11.90,
                price: 7.90
            }, 
            {
                name: "French burger", 
                composition: ["1 steak 90 g", "crème de camembert"],
                picture: "./img/menus/rustik/french_burger", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Chèvre burger", 
                composition: ["1 steak 90 g", "fromage de chèvre"],
                picture: "./img/menus/rustik/chevre_burger.png", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Blue burger", 
                composition: ["1 steak 90 g", "crème de bleu"],
                picture: "./img/menus/rustik/blue_burger.png", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Double Mega burger 360grs", 
                composition: ["2 steaks 180 g", "2 cheddar"],
                picture: "./img/menus/mega/double_mega_burger.png", 
                price_menu: 15.50,
                price: 13.90
            },
            {
                name: "Mega burger 180grs", 
                composition: ["1 steak 180 g", "2 cheddar"],
                picture: "./img/menus/mega/mega_burger180grs.png", 
                price_menu: 14.50,
                price: 12.90
            },           
        ]
    },
    {
        category: "Formules",
        sandwiches: [
            {
                name: "Duo 1", 
                composition: ["1 double cheese", "1 cheese burger"], 
                price: 13.70
            },
            {
                name: "Duo 2", 
                composition: ["1 chicken burger", "1 cheese burger"], 
                price: 13.70
            },
            {
                name: "Duo 3", 
                composition: ["1 croq Monsieur", "1 cheese burger"], 
                price: 13.50
            },
            {
                name: "A1 - Chesse & Cheese",  
                price: 12.50
            },
            {
                name: "A2 - Cheese & Double Cheese Bacon",  
                price: 13.80
            },
            {
                name: "A3 - Cheese & Big M", 
                price: 13.90
            },
            {
                name: "A4 - Cheese & Big Max",  
                price: 17.50
            },
            {
                name: "A5 - Cheese & Beef Chicken", 
                price: 15.80
            },
            {
                name: "A6 - Cheese & Chicken", 
                price: 13.80
            },
            {
                name: "A7 - Cheese & Croq Mr", 
                price: 12.80
            },
            {
                name: "A9 - Big M & Big M", 
                price: 16.70
            },
            {
                name: "A9 - Big M & Chicken", 
                composition: ["1 chicken burger", "1 cheese burger"], 
                price: 13.70
            },
            {
                name: "A10 - Big M & Beef Chicken", 
                composition: ["1 croq Monsieur", "1 cheese burger"], 
                price: 16.90
            },
        ]
    }, 
    {
        category: "Tacos",
        sandwiches: [
            {
                name: "Tacos simple",
                composition: "1 viande au choix",  
                price: 13.90
            },
            {
                name: "Tacos double",
                composition: "2 viandes au choix",  
                price: 14.90
            },
            {
                name: "Tacos triple",
                composition: "3 viandes au choix", 
                price: 15.90
            },
        ]
    },
    {
        category: "Sandwichs",
        sandwiches: [
            {
                name: "Grec", 
                composition: ["kebab"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Steak", 
                composition: ["2 steaks 45 g", "cheddar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken olives", 
                composition: ["Escalope de poulet", "olive verte", "cheddar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Végétarien", 
                composition: ["Galette de pomme de terre", "oeuf", "cheddar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Roll chicken", 
                composition: ["3 pièces tenders", "2 chedar"], 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Mix boursin", 
                composition: ["Escalope de poulet", "1 steak 45 g", "boursin", "cheddar fondu"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Triple X", 
                composition: ["3 steaks 45 g", "1 oeuf", "1 bacon", "2 cheddar"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Ciabatta", 
                composition: ["Pain ciabatta", "4 steaks 45 g", "2 cheddar", "2 emmental"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "The best", 
                composition: ["100 g viande hachée maison", "1 galette de pomme de terre", "2 emmental"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Chormi X", 
                composition: ["3 steaks 45 g", "chorizo", "2 cheddar"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Salami X", 
                composition: ["3 steaks 45 g", "oeuf", "salami", "cheddar"], 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Fermière", 
                composition: ["1 escalope de poulet", "lardons de dinde fumée", "crème de camembert"], 
                price_menu: 13.90,
                price: 11.90
            },
        ]
    },
    {
        category: "Assiettes",
        sandwiches: [
            {
                name: "Grec", 
                composition: ["Viande de kebab"], 
                price: 15.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar fondu"], 
                price: 15.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar fondu"], 
                price: 15.90
            },
            {
                name: "Steak", 
                composition: ["Viande hachée maison 150 g", "cheddar fondu"], 
                price: 15.90
            },
            {
                name: "Chicken olive", 
                composition: ["Escalope de poulet", "olives vertes", "cheddar fondu"], 
                price: 15.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental fondu"], 
                price: 15.90
            },
        ]
    }, 
    {
        category: "Croqs & Paninis",
        sandwiches: [
            {
                name: "Croq Mr",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq Madame", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq chèvre", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq boursin", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq viande hachée", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini viande hachée",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini poulet", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini 3 fromages", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini thon", 
                price_menu: 10.90,
                price: 7.90
            },
        ]
    },
    {
        category: "Salades",
        sandwiches: [
            {
                name: "Salade César", 
                composition: ["salade", "tomates", "maïs", "olives", "poulet émincé"], 
                price: 9.90
            },
            {
                name: "Salade niçoise", 
                composition: ["Salade", "tomates", "maïs", "olives", "thon"], 
                price: 9.90
            },
        ]
    },
    {
        category: "Frites & Tex Mex",
        sandwiches: [
            {
                name: "Frites", 
                composition: ["La barquette"], 
                price: 4.90
            },
            {
                name: "Potatoes", 
                composition: ["La barquette"], 
                price: 4.90
            },
        ]
    }, 
    {
        category: "Desserts",
        sandwiches: [
            {
                name: "Tarte au daim", 
                composition: ["Part de tarte au chocolat et au daim"], 
                price: 4.90
            },
            {
                name: "Tiramisu", 
                composition: ["Dessert traditionnel de la cuisine italienne"], 
                price: 4.90
            },
        ]
    },
    {
        category: "Boissons",
        sandwiches: [
            {
                name: "7up mojito", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Fanta exotic", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Oasis tropical", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Coca-Cola", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Cristaline", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Coca-Cola zéro sucres", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Coca-Cola cherry", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Ice tea", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Perrier", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Fanta orange", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Oasis pomme cassis", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Tropico", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Schweppes agrumes", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Orangina", 
                composition: ["33 cl"], 
                price: 2.50
            },
            {
                name: "Freez grenadine", 
                composition: ["275 ml"], 
                price: 3.40
            },
        ]
    }
]

// Pour chaque catégorie du tableau, 
for(const el of carte) {
    // on créé une carte
    addCard(el.category)
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
    card.setAttribute("id", `${category.toLowerCase()}`);
    // On renseigne le contenu du titre
    title.textContent = `${category}`;
    // On insère le titre dans la card
    card.appendChild(title);
    // On insère la card dans le ctn-cards
    document.querySelector(".body__main--ctn-cards").appendChild(card);
};

// Gestion du click sur une carte et ouverture de la modale contenant les sandwiches 

// On sélectionne la modale
const modal = document.querySelector(".body__modal");
// On cible le container de cartes
const ctnCardsElement = document.querySelector(".body__main--ctn-cards");
// On cible le titre de la modale

let found;

// On écoute le click sur le container
ctnCardsElement.addEventListener("click", (e) => {
    // On récupère la cible du click
    const targetElement = e.target;
    //console.log(targetElement);
    // On récupère la catégorie 
    getCategoryByClick(targetElement);
    modal.showModal();
})

function getCategoryByClick(targetElement) {
    // Si on clique sur le titre, on récupère la valeur du titre dans la variable value
    let value = targetElement.firstChild.nodeValue;
    //console.log(value);

    // Si on clique dans la div, value vaut undefined on récupère la valeur de l'id dans la v
    if(value == undefined) {
        value = targetElement.attributes[1].textContent;
    } 
    //console.log(value);

    // On récupère dans le tableau carte la catégorie qui correspond à la value
    found = carte.find((el) => el.category.toUpperCase() === value.toUpperCase())
    console.log(found); 
    // On affiche les sandwiches dans le ctn de la modale
    displaySandwiches(found);       
};
   
// Pour chaque sandwich de la catégorie on rajoute une carte au ctn
function displaySandwiches(found) {
    const title = document.querySelector(".body__modal--title");      
    title.textContent = found.category;
    // On rajoute le titre de la catégorie dans la modale
    modal.appendChild(title);
    // Pour chaque sandwich de la catégorie, on créé une carte
    for(const sandwich of found.sandwiches) {
        addSandwich(sandwich);
    } 
}

function addSandwich(sandwich) {
    // on créé la carte
    const cardElement = document.createElement("div");
    cardElement.classList.add("body__modal--ctn-card");
    // on crée le nom
    const nameElement = document.createElement("h3");
    nameElement.classList.add("body__modal--ctn-card-name");
    nameElement.textContent = sandwich.name;
    // on l'insère dans la carte
    cardElement.appendChild(nameElement);

    // on créé la composition
    const compositionElement = document.createElement("p");
    compositionElement.classList.add("body__modal--ctn-card-composition");
    let text = getComposition(sandwich);
    compositionElement.textContent = text;
    
    cardElement.appendChild(compositionElement); 
    modal.appendChild(cardElement);
}
    
function getComposition(sandwich) {
    if(!sandwich.composition) {
        return;
    }
    text = '';
    for(const ingredient of sandwich.composition) {       
        text += `${ingredient},`; 
        console.log(text);
        return text
    }
    
}   
    
//}


// Gestion de l'affichage des modales au click

// On écoute le click dans le ctn-cards

// On ouvre la modale dont la class est identique à l'id