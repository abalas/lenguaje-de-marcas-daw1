let parrafo = document.createElement("p")

let generarNumAleatorio = () => Math.floor(Math.random()*1000+1) 

let numero = generarNumAleatorio()
parrafo.textContent = numero

document.body.append(parrafo)
while(numero  !== (1000)){
    numero = generarNumAleatorio()
    let parrafo = document.createElement("p")
    parrafo.textContent = numero
    document.body.append(parrafo)
}

