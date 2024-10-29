function borrando_remove(){
    const primerItem = document.querySelector("li");
    primerItem.remove();
};

function borrando_remove_child(){
const list =document.querySelector("ul");
list.removeChild(list.firstElementChild);
};