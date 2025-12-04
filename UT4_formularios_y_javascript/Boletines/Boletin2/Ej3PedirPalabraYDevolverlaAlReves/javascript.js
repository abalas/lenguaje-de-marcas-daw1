let palabra = prompt("Introduzca una palabra o una frase:")

palabraAlReves=""
for (let i = palabra.length-1; i>=0; i--){
    palabraAlReves=palabra[i]
}