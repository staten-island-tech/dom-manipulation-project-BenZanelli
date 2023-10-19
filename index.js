DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    imagelink: document.querySelector("#image-link"),
    h2s: document.querySelectorAll("h2"),
    remove: document.querySelector(".remove"),
    imtem: document.querySelector(".item"),
};
function addthing() {
    document.querySelector(".item").insertAdjacentHTML(
        "beforeend",
        `<div class="item">
         <h2 id="name"></h2>
        <img src="" alt="user entered image">
        <button class="remove" >REMOVE</button> ]
     </div>`
    );
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
}); 

/* function getrid() {
   DOMSelectors.h2s.forEach((h2) => (h2.textContent = null) ); }
 */
/* DOMSelectors.remove.addEventListener("click", function(){
    DOMSelectors.h2s.forEach((h2) => (h2.textContent = null))
}) */