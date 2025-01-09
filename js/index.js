import carte from '../datas/carte.js';
console.log("script chargé");
console.log(carte);

/*********** PAGE CARTE ***********/

// Affichage des catégories
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

function closeModalSandwichByClick(sandwichContent) {
    console.log(sandwichContent);
    const close = document.querySelector("#closeSandwich");
    close.addEventListener("click", () => {
        console.log("alors, on veut fermer la modale ? Rêve !");
        for(const element of sandwichContent) {

            element.remove()
            console.log("éléments supprimés");               
        }
        document.querySelector(".body__modal--sandwich").close()            
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
            closeModalSandwichByClick(sandwichContent)
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
let sandwichContent = [];
function createContentModalSandwich(found) {
    let line;
    const closeCrossElement = document.createElement("p");
    closeCrossElement.classList.add("close");    
    closeCrossElement.textContent = "X";
    closeCrossElement.id = "closeSandwich";
    close.push(closeCrossElement);
    sandwichContent.push(closeCrossElement);
    const imgElement = document.createElement("img");
    imgElement.classList.add("body__modal--sandwich-img");
    // pour le reset à la fermeture de la modale
    imgElement.classList.add("variable");
    imgElement.setAttribute("src", `${found.picture}`);
    imgElement.setAttribute("alt", `photo ${found.name}`);
    sandwichContent.push(imgElement);
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
    sandwichContent.push(ctnDetails)
    if(found.price_menu == undefined || found.price_menu == null) {
        buttonMenu.style.display = "none"
    }
    
    
};