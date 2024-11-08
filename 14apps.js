const container = document.querySelector(".container");
const button = document.querySelector("button");
const aparece = document.querySelector(".Najman");



container.addEventListener("mouseover", () =>{
    container.style.backgroundColor="blue";
   
});



container.addEventListener("mouseout", () =>{
    container.style.backgroundColor="red";
});



button.addEventListener("mouseover", () =>{
    aparece.style.display="block";
});

button.addEventListener("mouseout", () =>{
    aparece.style.display="none";
});

//queremos empezar a retirar eventos, vamos a meter una parte de código en una función

const buttonClickCallback = () =>{
    alert("Baruch HaShem");
};

button.addEventListener("click",buttonClickCallback );

//los navegadores vienen con un setime

setTimeout(() =>{
    button.removeEventListener("click",buttonClickCallback);}, 2000 );