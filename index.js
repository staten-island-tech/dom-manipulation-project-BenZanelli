DOMSelectors = {
    form: document.querySelector("#form"),
    itemname: document.querySelector(".item"),
    h2s: document.querySelectorAll("h2"),
    remove: document.querySelector(".remove"),

};
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (item) => (item.textContent = DOMSelectors.itemname.value)
    );
}); 
function getrid() {
    DOMSelectors.h2s.textContent.remove();
}