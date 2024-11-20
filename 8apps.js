/*la de inner nos genera un html y lo inserta al DOM */

function creacion_Elemento(){
  var contentArea =document.getElementById("contentArea");
  contentArea.innerHTML="<P>HaShem gracias por este nuevo día, cada cosita que corre es mera alegría, gracias HaShem</p>" // Con este método me reemplaza el contenido de un elemento//
 
}

function creacion_Elemento_inner(){
  var listarea =document.getElementById("listArea");
  listarea.innerHTML ="<P> Quiero tener una Emunah a prueba de sustento y no fumar</P>"
}

/*la de insert adjacent esta es una función con dos parametros, la primera es el texto, la segunda la posición*/
function creacion_Elemento_insert(){
  var contentArea =document.getElementById("contentArea");
  contentArea.insertAdjacentHTML("afterend", "<p>esta es afterened</p>");
  contentArea.insertAdjacentHTML("afterbegin", "<p> esta es after begin</p>");
  contentArea.insertAdjacentHTML("beforebegin", "<p> esta es beforebegin</p>");
}

function ejercicio_Elemento_insert(){
  var listarea=document.getElementById("producto");
  listarea.insertAdjacentHTML("afterend", "<li>nuevo item after end</li>");

}

function creacion_parrafo() {
    var parrafo_nuevo=document.getElementById("parrafo_nuevo");
    parrafo_nuevo.innerHTML="<p> Creador esto me gusta hacerlo, me gusta programar </p>"
}

function creacion_parrafo_insert(){
    var parrafo_insert=document.getElementById("otro_parrafo");
    parrafo_insert.insertAdjacentHTML("afterbegin","<p> Esta es afterbegin</p>");
    parrafo_insert.insertAdjacentHTML("afterend", "<p>esta es afterened</p>")
}