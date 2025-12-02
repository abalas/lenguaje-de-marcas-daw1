const titulo = document.createElement("h1")
titulo.textContent="Primeros 50 numeros pares"

const lista = document.createElement("ol")

let cont = 0
for (let i = 0; i<50; i++){
    const numero = document.createElement("li")
    numero.textContent = cont
    lista.appendChild(numero)
    cont += 2
    
}
document.body.appendChild(titulo)
document.body.appendChild(lista)