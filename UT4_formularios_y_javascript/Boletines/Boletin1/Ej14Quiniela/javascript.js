


for ( let i = 0; i<15; i++){
    let numero = document.createElement("p")
    let rand = `${Math.floor(Math.random()*3)+1}`
    if (rand==3){
        numero.textContent = "X"
    }else{
        numero.textContent = rand
    }
    
    document.body.appendChild(numero)
}