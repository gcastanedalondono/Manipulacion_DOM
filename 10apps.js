// Los eventos son objetos
// El evento son objetos, nos regresa un objeto en Js el cual tiene propiedades y métodos
//
const button = document.querySelector("button");

const buttonClicked = (event) => {
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.textContent);
};

button.addEventListener("click", buttonClicked); 

// cuando le doy click a lo que muestra en console.log puedo tener acceso a todo
// lo del botón