
let numero= parseInt(prompt("Introduzca un numero: "))

dibuja5multiplos(numero)
function dibuja5multiplos(num){
    for (let i = 0; i<5; i++){
        let multiplo = document.createElement("p")
        multiplo.textContent=`${num*i}`
        document.body.appendChild(multiplo)
    }


}