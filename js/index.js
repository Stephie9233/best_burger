// import { createContentModale } from "modale.js"
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
                picture: "./img/menus/rustik/french_burger.png", 
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
                picture: "./img/menus/burgers/duo_1.png", 
                price: 13.70
            },
            {
                name: "Duo 2", 
                composition: ["1 chicken burger", "1 cheese burger"],
                picture: "./img/menus/burgers/duo_2.png", 
                price: 13.70
            },
            {
                name: "Duo 3", 
                composition: ["1 croq Monsieur", "1 cheese burger"], 
                picture: "./img/menus/burgers/duo_3.png",
                price: 13.50
            },
            {
                name: "A1 - Chesse & Cheese",
                picture: "./img/menus/doubles/A1.png",  
                price: 12.50
            },
            {
                name: "A2 - Cheese & Double Cheese Bacon",
                picture: "./img/menus/doubles/A2.png",
                price: 13.80
            },
            {
                name: "A3 - Cheese & Big M",
                picture: "./img/menus/doubles/A3.png",
                price: 13.90
            },
            {
                name: "A4 - Cheese & Big Max",
                picture: "./img/menus/doubles/A4.png",
                price: 17.50
            },
            {
                name: "A5 - Cheese & Beef Chicken",
                picture: "./img/menus/doubles/A5.png",
                price: 15.80
            },
            {
                name: "A6 - Cheese & Chicken",
                picture: "./img/menus/doubles/A6.png",
                price: 13.80
            },
            {
                name: "A7 - Cheese & Croq Mr",
                picture: "./img/menus/doubles/A7.png",
                price: 12.80
            },
            {
                name: "A9 - Big M & Big M",
                picture: "./img/menus/doubles/A8.png",
                price: 16.70
            },
            {
                name: "A9 - Big M & Chicken",
                picture: "./img/menus/doubles/A9.png",
                composition: ["1 chicken burger", "1 cheese burger"], 
                price: 13.70
            },
            {
                name: "A10 - Big M & Beef Chicken", 
                composition: ["1 croq Monsieur", "1 cheese burger"],
                picture: "./img/menus/doubles/A10.png",
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
                picture: "./img/menus/tacos/simple.png",  
                price: 13.90
            },
            {
                name: "Tacos double",
                composition: "2 viandes au choix",
                picture: "./img/menus/tacos/double.png",  
                price: 14.90
            },
            {
                name: "Tacos triple",
                composition: "3 viandes au choix",
                picture: "./img/menus/tacos/triple.png", 
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
                picture: "./img/menus/sandwiches/grec.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_curry.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Steak", 
                composition: ["2 steaks 45 g", "cheddar"],
                picture: "./img/menus/sandwiches/steak.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_tandoori.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken olives", 
                composition: ["Escalope de poulet", "olive verte", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_olives.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Végétarien", 
                composition: ["Galette de pomme de terre", "oeuf", "cheddar"],
                picture: "./img/menus/sandwiches/vegetarien.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental"],
                picture: "./img/menus/sandwiches/suisse.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Roll chicken", 
                composition: ["3 pièces tenders", "2 chedar"],
                picture: "./img/menus/sandwiches/roll_chicken.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Mix boursin", 
                composition: ["Escalope de poulet", "1 steak 45 g", "boursin", "cheddar fondu"],
                picture: "./img/menus/xtrem/mix_boursin.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Triple X", 
                composition: ["3 steaks 45 g", "1 oeuf", "1 bacon", "2 cheddar"],
                picture: "./img/menus/xtrem/triple_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Ciabatta", 
                composition: ["Pain ciabatta", "4 steaks 45 g", "2 cheddar", "2 emmental"],
                picture: "./img/menus/xtrem/ciabatta.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "The best", 
                composition: ["100 g viande hachée maison", "1 galette de pomme de terre", "2 emmental"],
                picture: "./img/menus/xtrem/the_best.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Chormi X", 
                composition: ["3 steaks 45 g", "chorizo", "2 cheddar"],
                picture: "./img/menus/xtrem/chormi_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Salami X", 
                composition: ["3 steaks 45 g", "oeuf", "salami", "cheddar"],
                picture: "./img/menus/xtrem/salami_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Fermière", 
                composition: ["1 escalope de poulet", "lardons de dinde fumée", "crème de camembert"], 
                picture: "./img/menus/xtrem/fermiere.png",
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
                picture: "./img/menus/assiettes/grec.png", 
                price: 15.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_curry.png",
                price: 15.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_tandoori.png",
                price: 15.90
            },
            {
                name: "Steak", 
                composition: ["Viande hachée maison 150 g", "cheddar fondu"],
                picture: "./img/menus/assiettes/steak.png",
                price: 15.90
            },
            {
                name: "Chicken olive", 
                composition: ["Escalope de poulet", "olives vertes", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_olive.png",
                price: 15.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental fondu"],
                picture: "./img/menus/assiettes/suisse.png",
                price: 15.90
            },
        ]
    }, 
    {
        category: "Croqs & Paninis",
        sandwiches: [
            {
                name: "Croq Mr",
                picture: "./img/menus/croqs/croq_mr.png",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq Madame",
                picture: "./img/menus/croqs/croq_mme.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq chèvre",
                picture: "./img/menus/croqs/croq_chevre.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq boursin",
                picture: "./img/menus/croqs/croq_mr.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq viande hachée",
                picture: "./img/menus/croqs/croq_viande_hachee.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini viande hachée",
                picture: "./img/menus/paninis/viande_hachee.png",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini poulet",
                picture: "./img/menus/paninis/poulet.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini 3 fromages",
                picture: "./img/menus/paninis/3_fromages.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini thon",
                picture: "./img/menus/paninis/thon.png", 
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
                picture: "./img/menus/salades/cesar.png",
                price: 9.90
            },
            {
                name: "Salade niçoise", 
                composition: ["Salade", "tomates", "maïs", "olives", "thon"],
                picture: "./img/menus/salades/nicoise.png",
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
                picture: "./img/menus/accompagnement/frites.png", 
                price: 4.90
            },
            {
                name: "Potatoes", 
                composition: ["La barquette"],
                picture: "./img/accompagnements/potatoes.png", 
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
                picture: "./img/desserts/tarte_au_daim.png", 
                price: 4.90
            },
            {
                name: "Tiramisu", 
                composition: ["Dessert traditionnel de la cuisine italienne"],
                picture: "./img/desserts/tiramisu.png", 
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
                picture: "./img/boissons/7up.png",
                price: 2.50
            },
            {
                name: "Fanta exotic", 
                composition: ["33 cl"],
                picture: "./img/boissons/fanta_exotic.png",
                price: 2.50
            },
            {
                name: "Oasis tropical", 
                composition: ["33 cl"],
                picture: "./img/boissons/oasis_tropical.png", 
                price: 2.50
            },
            {
                name: "Coca-Cola", 
                composition: ["33 cl"], 
                picture: "./img/boissons/coca_cola.png",
                price: 2.50
            },
            {
                name: "Cristaline", 
                composition: ["33 cl"],
                picture: "./img/boissons/cristaline.png", 
                price: 2.50
            },
            {
                name: "Coca-Cola zéro sucres", 
                composition: ["33 cl"],
                picture: "./img/boissons/coca_cola_zero.png",
                price: 2.50
            },
            {
                name: "Coca-Cola cherry", 
                composition: ["33 cl"],
                picture: "./img/boissons/coca_cola_cherry.png", 
                price: 2.50
            },
            {
                name: "Ice tea", 
                composition: ["33 cl"],
                picture: "./img/boissons/ice_tea.png", 
                price: 2.50
            },
            {
                name: "Perrier", 
                composition: ["33 cl"],
                picture: "./img/boissons/perrier.png", 
                price: 2.50
            },
            {
                name: "Fanta orange", 
                composition: ["33 cl"],
                picture: "./img/boissons/fanta_orange.png",
                price: 2.50
            },
            {
                name: "Oasis pomme cassis", 
                composition: ["33 cl"],
                picture: "./img/boissons/oasis_pomme_cassis.png",
                price: 2.50
            },
            {
                name: "Tropico", 
                composition: ["33 cl"],
                picture: "./img/boissons/tropico.png",
                price: 2.50
            },
            {
                name: "Schweppes agrumes", 
                composition: ["33 cl"],
                picture: "./img/boissons/schweppes_agrume.png", 
                price: 2.50
            },
            {
                name: "Orangina", 
                composition: ["33 cl"],
                picture: "./img/boissons/orangina.png", 
                price: 2.50
            },
            {
                name: "Freez grenadine", 
                composition: ["275 ml"],
                picture: "./img/boissons/freez_grenadine.png", 
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
const card = document.querySelector(".body__main--ctn-cards");
const modal = document.querySelector("dialog");
// On cible le container de cartes
const ctnCardsElement = document.querySelector(".body__modal--ctn-cards");
// On cible le titre de la modale
const title = document.querySelector(".body__modal--title"); 
let found;
let contentModal = [];
let close = [];
//console.log(close);


function createContentModale(found) {
    const closeCrossElement = document.createElement("p");
    closeCrossElement.classList.add("closed");    
    closeCrossElement.textContent = "X";
    closeCrossElement.id = "close";
    close.push(closeCrossElement);
    const title = document.createElement("h2");
    title.classList.add("body__modal--title");
    title.textContent = found.category;
    const ctnCardsElement = document.createElement("section");
    ctnCardsElement.classList.add("body__modal--ctn-cards");
    const closeBtnElement = document.createElement("button");
    closeBtnElement.classList.add("closed");
    closeBtnElement.id = "closeBtn";
    closeBtnElement.textContent = "fermer";
    close.push(closeBtnElement);
    modal.appendChild(closeCrossElement);
    modal.appendChild(title); 
    modal.appendChild(ctnCardsElement); 
    modal.appendChild(closeBtnElement);
    contentModal.push(closeCrossElement, title, ctnCardsElement, closeBtnElement);
    //console.log(contentModal);
    
    displaySandwiches(found);     
};

// On écoute le click sur le container
card.addEventListener("click", (e) => {
    // On récupère la cible du click
    let targetElement = e.target;
    //console.log(targetElement);
    // On récupère la catégorie 
    getCategoryByClick(targetElement);
    modal.showModal();
    openDetailsSandwich();
    closeModalByClick()
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
    //console.log(found);
    // on construit la modale
    createContentModale(found) 
    // On affiche les sandwiches dans le ctn de la modale
    // 
    return found;      
};
   
// Pour chaque sandwich de la catégorie on rajoute une carte au ctn
function displaySandwiches(found) { 
    // Pour chaque sandwich de la catégorie, on créé une carte
    for(const sandwich of found.sandwiches) {
        addSandwich(sandwich);
    } 
};

function addSandwich(sandwich) {
    //console.log(sandwich);
    
    // on créé la carte
    const cardElement = document.createElement("div");
    cardElement.classList.add("body__modal--ctn-cards-card");
    cardElement.id = `${sandwich.name}`;
    // pour le reset à la fermeture de la modale
    cardElement.classList.add("variable");
    const imgElement = document.createElement("img");
    imgElement.classList.add("body__modal--img");
    // pour le reset à la fermeture de la modale
    imgElement.classList.add("variable");
    imgElement.setAttribute("src", `${sandwich.picture}`);
    imgElement.setAttribute("alt", `photo ${sandwich.name}`);
    
    // on crée le nom
    const nameElement = document.createElement("h3");
    nameElement.classList.add("body__modal--ctn-card-name");
    // pour le reset à la fermeture de la modale
    nameElement.classList.add("variable");
    nameElement.textContent = sandwich.name;
    
    // on insère les éléments dans la carte
    cardElement.appendChild(imgElement);
    cardElement.appendChild(nameElement);
    
    
    // on insère la carte dans le ctn
    document.querySelector(".body__modal--ctn-cards").appendChild(cardElement);
};

function closeModalByClick() {
    const closeElement = document.querySelectorAll(".closed");
    //console.log(closeElement);
    for(const el of closeElement) {
        console.log(el);
        el.addEventListener("click", () => {
            console.log("alors, on veut fermer la modale ? Rêve !");
            for(const element of contentModal) {
                element.remove()
                console.log("éléments supprimés");               
            }
            modal.close()            
        })        
    }    
}

function closeModalSandwichByClick() {
    const close = document.querySelector(".close");
    //console.log(closeElement);
    close.addEventListener("click", () => {
        console.log("alors, on veut fermer la modale ? Rêve !");
        for(const element of contentModal) {
            element.remove()
            console.log("éléments supprimés");               
        }
        modalSandwich.close()            
    })        
}

function openDetailsSandwich() {
    const cards = document.querySelectorAll(".body__modal--ctn-cards-card")
    console.log(cards);
    const modalSandwich = document.querySelector(".body__modal--sandwich")
    for(const card of cards) {
        card.addEventListener("click", (e) => {
            const target = e.target;
            //console.log(target); 
            getDetailsSandwich(target);
            modalSandwich.showModal()
            document.querySelector("#close").addEventListener("click", () => {
                console.log("click");
                
                modalSandwich.close()
            })           
        })
    }

}

function getDetailsSandwich(target) {
    const titleContent = document.querySelector(".body__modal--title").textContent;
    console.log(titleContent);

    let value = target.firstChild.nodeValue;
   // console.log(value);
    if(value == undefined || value == null) {
        value = target.attributes[1].textContent;
     //   console.log(value);       
    }
    console.log(value);
    
    const category = carte.find((el) => el.category.toUpperCase() == titleContent.toUpperCase());
    
    const found = category.sandwiches.find((el) => el.name.toUpperCase() == value.toUpperCase())
    console.log(found); 
    createContentModalSandwich(found)   
}

function createContentModalSandwich(found) {
    let line;
    const closeCrossElement = document.createElement("p");
    closeCrossElement.classList.add("close");    
    closeCrossElement.textContent = "X";
    closeCrossElement.id = "close";
    close.push(closeCrossElement);
    const imgElement = document.createElement("img");
    imgElement.classList.add("body__modal--sandwich-img");
    // pour le reset à la fermeture de la modale
    imgElement.classList.add("variable");
    imgElement.setAttribute("src", `${found.picture}`);
    imgElement.setAttribute("alt", `photo ${found.name}`);
    const ctnDetails = document.createElement("section");
    ctnDetails.classList.add("body__modal--sandwich-ctn")
    const title = document.createElement("h2");
    title.classList.add("body__modal--sandwich-title");
    title.textContent = found.name;
    const ctnComposition = document.createElement("ul");
    ctnComposition.classList.add("body__modal--sandwich-ctn-composition");
    const composition = found.composition;
    console.log(`composition: ${composition}`);
    
    let ingredients = ""
    const last = composition.length-1;
    const taille = found.composition.length;
    console.log(typeof(found.composition));
    
    if(typeof(found.composition) == 'string') {
        ingredients = found.composition;
    } else {
        for(const ingredient of composition) {
            ingredients += `${ingredient}, `;
            if(composition.indexOf(ingredient) == last) {
                ingredients += `${ingredient}`;
            }              
            console.log(ingredients);
            
        };
    }
    
    const compositionLine = document.createElement("li");
    compositionLine.classList.add("body__modal--sandwich-ctn-composition-elt");
    compositionLine.textContent = ingredients;
    ctnComposition.appendChild(compositionLine)
    const info = document.createElement("p");
    info.classList.add("body__modal--sandwich-ctn-info");
    info.textContent = "Nos sandwiches sont accompagnés d'une boisson et d'un accompagnement dans nos formules.";
    const buttonMenu = document.createElement("button");
    buttonMenu.classList.add("body__modal--sandwich-btn-menu");
    buttonMenu.textContent = `${found.price_menu} €`;
    const buttonSolo = document.createElement("button");
    buttonSolo.classList.add("body__modal--sandwich-btn-solo");
    buttonSolo.textContent = `${found.price} €`;
    console.log(`prix solo : ${found.price_menu}`);
    
    const modalSandwich = document.querySelector(".body__modal--sandwich");
    modalSandwich.appendChild(closeCrossElement);
    modalSandwich.appendChild(imgElement);
    ctnDetails.appendChild(title);
    ctnDetails.appendChild(ctnComposition);
    ctnDetails.appendChild(info);
    ctnDetails.appendChild(buttonMenu);
    ctnDetails.appendChild(buttonSolo);
    modalSandwich.appendChild(ctnDetails);
    if(found.price_menu == undefined || found.price_menu == null) {
        buttonMenu.style.display = "none"
    }
    
    
};