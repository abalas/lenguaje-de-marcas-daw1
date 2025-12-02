let numero = parseInt(prompt("Introduce un numero: "))
let parrafo = document.createElement("p")

if( esPrimo(numero)){
    parrafo.textContent= "Es primo"
}else{
    parrafo.textContent="No es primo"
}
document.body.appendChild(parrafo)

function esPrimo(numero){
    for (i=2; i<Math.sqrt(numero); i++){
        if (numero%i==0)
        {
            return false;
        }
    }
    return true;
}