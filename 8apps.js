function creacion_Elemento(){
  var contentArea =document.getElementById("contentArea");
  contentArea.innerHTML="<P>HaShem gracias por este nuevo día, cada cosita que corre es mera alegría, gracias HaShem</p>" // Con este método me reemplaza el contenido de un elemento//
  contentArea.insertAdjacentHTML("beforeend", "<p>un nuevo parrafo y agradeciendo</p>");// este metodo tiene tres posiciones://
  /* beforeend*/
  //beforebegin//
  //afterbegin//
  //afeterend//

  contentArea.insertAdjacentHTML("afterend", "<p>esta es afterened</p>");
  contentArea.insertAdjacentHTML("afterbegin", "<p>esta es aftebegin</p>");
  contentArea.insertAdjacentHTML("beforebegin", "<p>esta es beforebegin</p>");


}