let min = parseInt(prompt("Introduzca el primer numero: "))
let max = parseInt(prompt("Introduzca el segundo numero: "))

let parrafo = document.createElement("p")
parrafo.textContent = `${Math.floor(Math.random()*(max-min))+min}`

document.body.appendChild(parrafo)