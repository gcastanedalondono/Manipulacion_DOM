// DE PADRES A HIJOS

const parent =document.getElementById("parent");//Queremos navegar entre nodos que tienen diferente jerarquia\\
console.log(parent);// me muestra el padre con sus hijos

const children =parent.children;
console.log(children);//Me muestra la lista del padre con sus hijos\\

const firstChild = parent.firstElementChild;
console.log(firstChild) //Para traer el primer hijo\\

const lastChild = parent.lastElementChild;
console.log(lastChild);//Para acceder al último elemento\\

const previousSibling = parent.previousElementSibling;
console.log(previousSibling);//Para sacar el ancestro del padre\\

const nextSibling = parent.nextElementSibling;
console.log(nextSibling); //Para sacar el siguiente elemento al padre\\

// DE HIJOS A PADRES
const children2 =document.querySelector("li");
console.log(children2); // Nos trae el primero que es el elemento sin clases

parent2 = children2.parentNode;// Nos trae su elemento padre, en  este casos sería una lista de ese elemento
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent);