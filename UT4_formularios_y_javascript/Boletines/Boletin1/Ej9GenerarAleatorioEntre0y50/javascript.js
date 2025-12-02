let numero = Math.floor(Math.random()*51)

let parrafo = document.createElement("p")
parrafo.textContent=`${numero}`

document.body.appendChild(parrafo)