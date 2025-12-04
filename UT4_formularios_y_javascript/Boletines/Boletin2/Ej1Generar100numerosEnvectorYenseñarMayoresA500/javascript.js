
let numeros = new Array(1000)
console.log(Math.floor(Math.random()*1000+1))

let lista = document.createElement("ol")


for (let i = 0; i <1000; i++){
    numeros[i] = Math.floor(Math.random()*1000+1)
}
let cont = 0
numeros.forEach(numero=> {
    if(numero>500 && cont <500){
        console.log(numero)
        let elementoLista = document.createElement("li")
        elementoLista.textContent= numero
        lista.append(elementoLista)
        cont +=1
    }
    
})
document.body.append(lista)