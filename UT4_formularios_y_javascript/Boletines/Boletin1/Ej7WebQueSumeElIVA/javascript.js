let precio = parseFloat(prompt("Introdzca el precio sin IVA del producto: "))
let parrafo = document.createElement("p")

parrafo.textContent = `Precio con IVA: ${(precio*1.21).toFixed(2)}`

document.body.appendChild(parrafo)