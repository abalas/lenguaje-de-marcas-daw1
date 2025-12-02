
let numero = parseInt(prompt("Introduzca un numero: "))
let parrafo = document.createElement("p")
if(numero%2==0)
{
    parrafo.textContent="Es par"
}else
{
    parrafo.textContent= "Es impar"
}
document.body.appendChild(parrafo)