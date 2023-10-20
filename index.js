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
        <button class="remove"   >REMOVE</button> 
     </div>`
    );
}
function removecard(){
    DOMSelectors.imagelink.remove();
    DOMSelectors.h2s.remove();
    DOMSelectors.remove.remove();
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
}); 
DOMSelectors.remove.addEventListener(".remove", function(){
    removecard();
})
/* function getrid() {
   DOMSelectors.h2s.forEach((h2) => (h2.textContent = null) ); }
 */
/* DOMSelectors.remove.addEventListener("click", function(){
    DOMSelectors.h2s.forEach((h2) => (h2.textContent = null))
}) */