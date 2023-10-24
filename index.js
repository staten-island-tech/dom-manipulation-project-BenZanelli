DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    imagelink: document.querySelector("#image-link"),
    h2s: document.querySelectorAll("h2"),
    remove: document.querySelector(".remove"),
    item: document.querySelector(".item"),
};
function addcard() {
    document.querySelector(".item").insertAdjacentHTML(
        "beforeend",
        `<div class="item">
         <h2 id="name">${DOMSelectors.itemname.value}</h2>
         <img src="${DOMSelectors.imagelink.value}" alt="user entered image">
         <form action="">
        <button class="remove">REMOVE</button> 
        </form>
     </div>`
    );
}
function clearfield(){
    DOMSelectors.itemname.value= "";
    DOMSelectors.imagelink.value= "";
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
    clearfield();
    element.remove(); // Removes the div with the 'div-02' id

    
}); 
DOMSelectors.remove.addEventListener(".remove", function(event){
    const element = document.getElementsByClassName(".");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
}
})



/* function getrid() {
   DOMSelectors.h2s.forEach((h2) => (h2.textContent = null) ); }
 */
/* DOMSelectors.remove.addEventListener("click", function(){
    DOMSelectors.h2s.forEach((h2) => (h2.textContent = null))
}) */