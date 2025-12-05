/* ========================================================
   CHULETA: Agregar y manipular elementos dinámicamente
   ======================================================== */

/* --------------------------------------------------------
   1️⃣ Crear un elemento nuevo
-------------------------------------------------------- */
let parrafo = document.createElement("p");  // Crea un <p>
parrafo.textContent = "Hola mundo";         // Agrega texto
parrafo.id = "miParrafo";                   // Opcional: asignar id
parrafo.className = "claseParrafo";        // Opcional: asignar clase

/* --------------------------------------------------------
   2️⃣ Agregar elementos al DOM
-------------------------------------------------------- */

// a) appendChild() -> al final del contenedor
let contenedor = document.getElementById("contenedor");
contenedor.appendChild(parrafo);

// b) insertBefore() -> antes de un hijo existente
let referencia = contenedor.children[0];  // primer hijo
contenedor.insertBefore(parrafo, referencia);

// c) insertAdjacentElement() -> en relación a otro elemento
let titulo = document.getElementById("titulo");
titulo.insertAdjacentElement("beforebegin", parrafo); // antes del titulo
titulo.insertAdjacentElement("afterbegin", parrafo);  // dentro al inicio
titulo.insertAdjacentElement("beforeend", parrafo);   // dentro al final
titulo.insertAdjacentElement("afterend", parrafo);    // después del titulo

// d) innerHTML -> insertar HTML directo dentro de un contenedor
contenedor.innerHTML += "<p>Hola con innerHTML</p>";

// e) insertAdjacentHTML() -> insertar HTML relativo a un elemento
titulo.insertAdjacentHTML("afterend", "<p>Hola con insertAdjacentHTML</p>");

// f) replaceChild() -> reemplazar un hijo existente
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Reemplazando hijo";
let viejoParrafo = contenedor.children[0];
contenedor.replaceChild(nuevoParrafo, viejoParrafo);

/* --------------------------------------------------------
   3️⃣ Eliminar elementos
-------------------------------------------------------- */
parrafo.remove();                       // Elimina el propio elemento
contenedor.removeChild(viejoParrafo);   // Elimina un hijo específico

/* --------------------------------------------------------
   4️⃣ Generar números aleatorios (útil para sorteos)
-------------------------------------------------------- */

// Número entre 1 y 100
let numero1a100 = Math.floor(Math.random() * 100 + 1);

// Número entre 1 y 9999
let numero1a9999 = Math.floor(Math.random() * 9999 + 1);

/* --------------------------------------------------------
   5️⃣ Eventos comunes para interactuar con elementos
-------------------------------------------------------- */

titulo.addEventListener("click", () => {
    alert("Hiciste clic en el título");
});

titulo.addEventListener("dblclick", () => {
    let num = Math.floor(Math.random() * 100 + 1);
    let p = document.createElement("p");
    p.textContent = "Número generado: " + num;
    titulo.insertAdjacentElement("afterend", p);
});

// Ejecutar función al cargar la página
window.onload = () => {
    console.log("La página se cargó");
};

/* --------------------------------------------------------
   6️⃣ Consejos rápidos
-------------------------------------------------------- */
// - appendChild() y insertAdjacentElement() son los más usados para agregar elementos dinámicamente
// - innerHTML y insertAdjacentHTML() sirven para HTML rápido, pero pueden borrar eventos existentes
// - Siempre que generes números aleatorios, Math.floor(Math.random() * max + 1) garantiza el rango deseado
// - insertAdjacentElement() te permite colocar elementos antes, después o dentro de otro elemento con precisión
