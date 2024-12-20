const modal = document.querySelector("dialog");

function createContentModale(found) {
    const closeCrossElement = document.createElement("p");
    closeCrossElement.classList.add("close");
    closeCrossElement.textContent = "X";
    closeCrossElement.id = "close";
    const title = document.createElement("h2");
    title.classList.add("body__modal--title");
    title.textContent = found.category;
    const ctnCardsElement = document.createElement("section");
    ctnCardsElement.classList.add("body__modal--ctn-cards");
    const closeBtnElement = document.createElement("button");
    closeBtnElement.classList.add("close");
    
    modal.appendChild(closeCrossElement);
    
    modal.appendChild(title); 
    modal.appendChild(ctnCardsElement); 
    modal.appendChild(closeBtnElement);     
}