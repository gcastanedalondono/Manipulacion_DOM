function creacion_Elemento(){
    var listArea =document.getElementById("listArea");
    listArea.innerHTML += "<li>item5, Baruch HaShem</li>";
    // Esto hace que el performance baje porque se tiene que renderizar todo a la vez
    listArea.insertAdjacentHTML("beforeend","<li>item 6</li>")
    // Este es el ideal para asegurar un buen performance
}
