 /*const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
   item.addEventListener("click", (event) => {
     event.target.classList.toggle("highlight");
   });
 });
*/
// Queremos que al agregar código y al señalar un elemento se active una clase que permita cambiarle  el color a un elemento.
// Hay dos formas una es agregar un evento por cada option y la otra es el delegatio patern la responsabilidad queda sobre la etiqueta padre, que es la ul 

// Si  cada elemento tiene un evento asociado el performance puede ser un poco más bajo.

const list = document.querySelector("ul");
list.addEventListener("click",
    (event) =>{
        event.target.closest("li").
        classList.toggle("highlight")
    });
