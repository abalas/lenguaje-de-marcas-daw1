let parrafo = document.createElement("p")
parrafo.textContent = "Hola"

document.body.append(parrafo)

parrafo.addEventListener("click", () => cambiarCOntenido(parrafo))

function cambiarCOntenido(){
    parrafo.textContent=== "Hola" ? parrafo.textContent="Adios" : parrafo.textContent="Hola"
    document.body.append(parrafo)
}