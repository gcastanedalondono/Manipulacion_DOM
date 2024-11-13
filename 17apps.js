//Hayn un patrón que se llama delegation pattern
//utiliza dentro de la parte de bobin, cuando le das click a un elemento éste sube

//queremos que cuando se le de click a un elemento éste cambie de color, se puede hacer de dos maneras

//1) un evento a cada elemento, esto a medida que escala puede hacer que se pierda performance

//const listItems = document.querySelectorAll("li");
 //listItems.forEach((item) =>{
  //item.addEventListener("click", 
   // (event)=>{
     // event.target.classList.toggle
      //("highlight");
    //});
 //});
 

//2) un evento al contenedor padre: agregar un solo evento al padre y que el sepa a cual de sus hijos lo están activando

const list= document.querySelector("ul");// este es el padre
list.addEventListener("click",
  (event) =>{
    event.target.closest("li").
    classList.toggle("highlight");
  });