function clonacion_Elemento (){
 const contentArea= document.querySelector("#contentArea");
 const originalP  = contentArea.querySelector("p");
 const clonedP =originalP.cloneNode(true);
 contentArea.append(clonedP);
}


function Reemplazo_elemento(){
 const list = document.querySelector("#listArea");
 const itemToReplace =listArea.children[2];
 const contentArea= document.querySelector("#contentArea");
 const originalP  = contentArea.querySelector("p");
 const clonedP =originalP.cloneNode(true);
 contentArea.append(clonedP);
itemToReplace.replacewith(clonedP);
}