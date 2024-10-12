function creacion_Elemento_insert_innerHTML(){
    var listArea =document.getElementById("listArea");
    listArea.innerHTML += "<li>item5, Baruch HaShem</li>";
    // Esto hace que el performance baje porque se tiene que renderizar todo a la vez
    listArea.innerHTML += "<li>item6, día a día la creación se renueva</li>";
}

function creacion_insert_adjacent(){
    var listArea2 =document.getElementById("listArea");
    listArea2.insertAdjacentHTML("beforeend", "<li>elemento 6</li>");


}