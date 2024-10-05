function cambiarEstilo() {
    var title =document.getElementById("app-title");
    title.style.color="red";  
    title.style.backgroundColor="blue";

    var title2 =document.getElementById("second_title");
    title2.innerText="bendice los de Uman e Israel";

    var parrafito =document.getElementById("parrafo");
    parrafito.style.textAlign = 'center'
    parrafito.style.fontSize = '36px';

    var menu = document.querySelector(menu);
    menu.style.backgroundColor = "red";
}

function volver() {
    var title =document.getElementById("app-title");
    title.style.color="black";
    title.style.backgroundColor="white";

    var title2=document.getElementById("second_title");
    title2.innerText="con alegría saldreis";

    var parrafito =document.getElementById("parrafo");
    parrafito.style.textAlign = 'left';
    parrafito.style.fontSize = '20px';



}