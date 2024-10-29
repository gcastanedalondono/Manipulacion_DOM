function creacion_Elemento_element(){
    const newPelement =document.createElement("p");
    newPelement.textContent = "Ayudame HaShem a no fumar y estar contento hoy";
    const contentArea = document.getElementById("contentArea");
    contentArea.append(newPelement);
}

function ejemplo(){
    const newejemplo = document.createElement("p");
    newejemplo.textContent ="Quiero ser mejor, dar lo mejor de mi, luchas con mis vicios, servir a HaShem con alegría"
    const ejemploarea =document.getElementById("ejemplo");
    ejemploarea.append(newejemplo);
}

function Elemento_element(){
    const newlistelement =document.createElement("li");
    newlistelement.textContent = "ayudame a quebrar mis malos rasgos y guiame en qué debo hacer para el sustento";
    const listarea =document.getElementById("listArea");
    listarea.append(newlistelement);

    const newlistprepend =document.createElement("li");
    newlistprepend.textContent = "ayudame a servirte";
    const listarea2 =document.getElementById("listArea");
    listarea2.prepend(newlistprepend);



}