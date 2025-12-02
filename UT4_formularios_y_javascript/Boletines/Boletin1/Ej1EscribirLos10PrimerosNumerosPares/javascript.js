

const lista = document.getElementById("lista-numeros")

for (let i=0; i<10; i++){
    console.log(i)
    let numero = document.createElement("li")
    numero.textContent = i
    lista.appendChild(numero)
}