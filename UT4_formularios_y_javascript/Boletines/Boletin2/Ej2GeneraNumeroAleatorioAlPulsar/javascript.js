let titulo = document.getElementById("titulo")
titulo.addEventListener("dblclick", function(){
    let parrafo = document.createElement("p")
    parrafo.textContent = Math.floor(Math.random()*100+1)
    document.body.append(parrafo)
})
