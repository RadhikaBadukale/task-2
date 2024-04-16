let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');

inputBx.addEventListener("keyup", function(event){
if (event.key == "Enter") {
addItem(this.value);
this.value = "";
 }
});
let addItem = (InputText) => {
    let listItem = document.createElement("li");
    listItem.textContent = InputText;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    });
    let deleteButton = document.createElement("i");
    deleteButton.classList.add('fas','fa-trash-alt');
    deleteButton.addEventListener("click", finction(){
        listitem.remove();
    });
    
    list.appendChild(deleteButton);
    list.appendChild(listItem);
};