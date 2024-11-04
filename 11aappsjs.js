function clonacion_Elemento (){
 const contentArea= document.querySelector("#contentArea");
 const originalP  =contentArea.querySelector("p");
 const clonedP =originalP.cloneNode(true);
 contentArea.append(clonedP);
};