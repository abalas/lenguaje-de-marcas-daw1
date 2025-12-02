const lista = document.getElementById("lista-multiplos")

for ( let i = 7; i<1000 ; i+=7){
    let multiplo = document.createElement("li")
    multiplo.textContent = `${i}`
    lista.append(multiplo)
}

