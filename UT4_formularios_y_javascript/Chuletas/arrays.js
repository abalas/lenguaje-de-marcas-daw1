/*****************************************************
 * 📌 CHULETA DE ARRAYS EN JAVASCRIPT 🧠⚡ (LISTA PARA .JS)
 *****************************************************/

/*********** 1. CREACIÓN DE ARRAYS ***********/
let arr = [1, 2, 3];
let arrVacio = [];
let arrMix = [1, "hola", true];
let arr2 = new Array(3);         // 3 huecos vacíos
let arr3 = Array.of(1,2,3);      // Crear desde valores

/*********** 2. ACCESO Y MODIFICACIÓN ***********/
arr[0];                          // Primer elemento
arr[arr.length-1];               // Último elemento
arr[1] = 99;                     // Modificar valor

/*********** 3. AÑADIR / ELIMINAR ELEMENTOS ***********/
// al final
arr.push(4);
arr.pop();                       // elimina último
// al inicio
arr.unshift(0);
arr.shift();                     // elimina primero

// insertar/delete en índice: splice(indice, cantidad, elementos?)
arr.splice(2,1);                 // borra 1 en pos 2
arr.splice(1,0,"nuevo");         // inserta sin borrar

arr.slice(1,3);                  // copia fragmento sin modificar original

/*********** 4. RECORRER ARRAYS ***********/
for(let i=0;i<arr.length;i++){ console.log(arr[i]); }
arr.forEach(e=>console.log(e));
for(let e of arr){ console.log(e); }

/*********** 5. BÚSQUEDA ***********/
arr.includes(3);                 // true/false
arr.indexOf(3);                  // devuelve índice o -1
arr.find(n=>n>10);               // primer elemento mayor a 10
arr.findIndex(n=>n>10);          // índice del primero que cumple

/*********** 6. TRANSFORMAR ARRAYS ***********/
arr.map(x=>x*2);                 // transforma y devuelve nuevo array
arr.filter(x=>x>5);              // filtra elementos
arr.reduce((a,b)=>a+b,0);        // acumula (suma total)
arr.sort((a,b)=>a-b);            // orden ascendente numérico
arr.reverse();                   // invertir array

/*********** 7. UNIR Y CLONAR ***********/
[...arr];                        // copia rápida
let copia = arr.slice();         // copia alternativa

arr.concat([4,5]);               // unir arrays
[...arr,...arr2];                // unir con spread
arr.join("-");                   // convierte a string: "1-2-3"

/*********** 8. UTILIDADES VARIAS ***********/
Array.isArray(arr);              // comprobar si es array
arr.length;                      // tamaño
new Set(arr);                    // quitar duplicados
arr.fill(0);                     // rellenar con 0
arr.every(x=>x>0);               // todos cumplen?
arr.some(x=>x>10);               // alguno cumple?

/*********** 9. ARRAYS DE OBJETOS ***********/
let personas = [
  {nombre:"Ana", edad:20},
  {nombre:"Luis", edad:30}
];

personas.map(p=>p.nombre);        // ["Ana","Luis"]
personas.filter(p=>p.edad>25);    // [{Luis,30}]
personas.find(p=>p.nombre==="Ana");

/*********** 10. TRUCOS RÁPIDOS ***********/
Math.max(...arr);                // número mayor
Math.min(...arr);                // número menor
arr.sort(()=>Math.random()-0.5); // desordenar rápido

// FIN DE LA CHULETA 🚀