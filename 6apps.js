/*function alternancia () {
var button = querySelector("button");
button.addEventListener("click",()=> {

    menubar.classList.toggle("invisible");

    
}); } */

function cambiarEstilo() {
    var title =document.getElementById("app-title");
    title.style.color="red";  
    title.style.backgroundColor="blue";

    var parrafito =document.getElementById("parrafo");
    parrafito.style.textAlign = 'center'
    parrafito.style.fontSize = '36px';

    var menu = document.querySelector("menu");
    menu.style.backgroundColor = "red";}