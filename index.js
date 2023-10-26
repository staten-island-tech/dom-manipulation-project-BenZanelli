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
    document.querySelector(".parent").insertAdjacentHTML(
        "beforeend",
        `<div class="item">
         <h2 id="name">${DOMSelectors.itemname.value}</h2>
         <img src="${DOMSelectors.imagelink.value}" >
         <form action="">
                <button id="but">REMOVE</button> 
        </form>
     </div>`
    );
    console.log(DOMSelectors.itemname.value, DOMSelectors.imagelink.value);
}
function clearfield(){
    DOMSelectors.itemname.value= "";
    DOMSelectors.imagelink.value= "";
}
/* function remove(){

} */
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    addcard();
    clearfield();
});
document.getElementById("but").addEventListener("click", function(event){
    event.preventDefault();
});