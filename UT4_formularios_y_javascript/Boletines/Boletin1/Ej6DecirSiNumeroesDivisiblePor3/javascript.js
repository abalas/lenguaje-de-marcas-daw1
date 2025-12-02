let numero = parseInt(prompt("Introduczca un numero: "))
let parrafo = document.createElement("p")
if (esDivisiblePor3(numero)){
    parrafo.textContent="Es divisible por 3"
}else{
    parrafo.textContent="No es divisible por 3"
}
document.body.appendChild(parrafo)

function esDivisiblePor3(numero){
    let buleano = false
    if (numero%3==0){
        buleano= true
    }else{
        buleano = false
    }
    return buleano

}