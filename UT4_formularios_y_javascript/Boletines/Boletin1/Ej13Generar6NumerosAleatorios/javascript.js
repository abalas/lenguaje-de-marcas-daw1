


for ( let i = 0; i<6; i++){
    let numero = document.createElement("p")
    numero.textContent = `${Math.floor(Math.random()*50)}`
    document.body.appendChild(numero)
}