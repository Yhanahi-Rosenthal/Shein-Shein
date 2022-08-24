const form = document.querySelector(".formulario")
const buscar = document.querySelector(".input-buscar")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    formValido()
})

function formValido(){
    const buscador = buscar.value
    if(!buscador){
        console.log("No ingresaste nada")
        resultado.innerHTML=""
        return
    }

    buscarPrendas(buscador)
}

function buscarPrendas(buscador){

    fetch("/JS/json/buscadores.json")
        .then(res => res.json())
        .then(buscadores =>{

            const search = buscadores.filter((prenda) => prenda.name.includes(buscador))
            if(search){
                mostrarResultado(search)}     
        })
}

const resultado = document.querySelector(".resultado")

function mostrarResultado(search){

    resultado.innerHTML=""
    
    search.forEach(prenda =>{
        const div = document.createElement('div')
        div.className= "card-buscar"

        const img = document.createElement('img')
        img.src = prenda.img
        img.className = "busca-img"

        const name = document.createElement('p')
        name.textContent = prenda.name
        name.className= "name-buscar"

        const link = document.createElement('a')
        link.textContent = "Ver más"
        link.className="ancor-b"
        link.href = "#"

        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(link)
        resultado.appendChild(div)
    })

    if(cruz){
        cruz.style.opacity="1",
        cruz.style.visibility="visible"
    }
}

const cruz = document.querySelector(".close-buscar")

cruz.addEventListener("click", ()=>{
    cruz.style.opacity = "0"
    cruz.style.visibility = "hidden"
    resultado.innerHTML=""
})



