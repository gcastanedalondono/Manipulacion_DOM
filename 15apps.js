//Los eventos al fin y al cabo son un objeto

const button =document.querySelector("button");

const buttonClicked =(event) =>{
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

button.addEventListener("click",buttonClicked);

// al hacerle click, puedo tener acceso a todo lo que tiene que ver con el botón perse
// estilos, clases y demás.

// con eso puedo empezar a manipular
