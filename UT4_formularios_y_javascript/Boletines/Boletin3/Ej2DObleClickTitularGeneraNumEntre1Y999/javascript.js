let titulo = document.getElementById("titulo")

titulo.addEventListener("dblclick", generarNumeroAleatorio )
function generarNumeroAleatorio(){
    let parrafo= document.createElement("p")
    parrafo.textContent= `${Math.floor(Math.random()*99+1)}`
    // c) insertAdjacentElement() -> en relación a otro elemento
    let titulo = document.getElementById("titulo");
    //titulo.insertAdjacentElement("beforebegin", parrafo); // antes del titulo
    //titulo.insertAdjacentElement("afterbegin", parrafo);  // dentro al inicio
    //titulo.insertAdjacentElement("beforeend", parrafo);   // dentro al final
    titulo.insertAdjacentElement("afterend", parrafo);    // después del titulo
}