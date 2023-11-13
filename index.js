DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector("#item-name"),
    imagelink: document.querySelector("#image-link"),
    h2s: document.querySelectorAll("h2"),
    remove: document.querySelector(".but"),
    item: document.querySelector(".item"),
    parent: document.querySelector(".parent")
};
function addcard() {
   DOMSelectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="item">
         <h2 id="name">${DOMSelectors.itemname.value}</h2>
         <img src="${DOMSelectors.imagelink.value}" class="image">
                <button class="but">REMOVE</button> 
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
    getrid();
});
function getrid(){
    let buttons = document.querySelectorAll(".but")
    buttons.forEach((btn)=> btn.addEventListener('click', function(event){
        btn.parentElement.remove();
    }))
} 
