

let parrafo = document.createElement("p")
let parrafo2 = document.createElement("p")

parrafo.textContent=`Dado1: ${Math.ceil(Math.random()*6)}`
parrafo2.textContent=`Dado2: ${Math.ceil(Math.random()*6)}`

document.body.appendChild(parrafo)
document.body.appendChild(parrafo2)