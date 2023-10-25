DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    imagelink: document.querySelector("#image-link"),
    h2s: document.querySelectorAll("h2"),
    remove: document.querySelector(".remove"),
    item: document.querySelector(".item"),
    parent: document.querySelector(".parent")
};
function addcard() {
    document.querySelector(".parent").insertAdjacentHTML(
        "beforeend",
        `<div class="item">
         <h2 id="name">${DOMSelectors.itemname.value}</h2>
         <img src="${DOMSelectors.imagelink.value}" >
         <form action="">
            <button class="remove">REMOVE</button> 
        </form>
     </div>`
    );
    console.log(DOMSelectors.itemname.value, DOMSelectors.imagelink.value);
}
function clearfield(){
    DOMSelectors.itemname.value= "";
    DOMSelectors.imagelink.value= "";
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
    clearfield();
    DOMSelectors.remove.addEventListener(".remove", function(){
    const element = document.getElementsByClassName(".item");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
}
})
}); 




/* function getrid() {
   DOMSelectors.h2s.forEach((h2) => (h2.textContent = null) ); }
 */
/* DOMSelectors.remove.addEventListener("click", function(){
    DOMSelectors.h2s.forEach((h2) => (h2.textContent = null))
}) */