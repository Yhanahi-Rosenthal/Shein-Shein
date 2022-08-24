let abrir = document.querySelector(".user")
let cerrar = document.querySelector(".close")
let modalUser = document.querySelector(".modalContenedor")

abrir.addEventListener("click", (e)=>{
    e.preventDefault()
    modalUser.style.opacity = "1"
    modalUser.style.visibility = "visible"
})

cerrar.addEventListener("click", () =>{
    modalUser.style.opacity = "0"
    modalUser.style.visibility = "hidden"
})

window.addEventListener("click", (e)=>{
    if(e.target == modalUser){
        modalUser.style.opacity = "0"
        modalUser.style.visibility = "hidden"
    }
})

// --------------------------modal Carrito----------------------------

let abrirC = document.querySelector(".carrito")
let modalCarrito = document.querySelector(".modalCarrito")

abrirC.addEventListener("click", (e)=>{
    e.preventDefault()
    modalCarrito.style.opacity = "1"
    modalCarrito.style.visibility = "visible"
})

window.addEventListener("click", (e)=>{
    if(e.target === modalCarrito){
        modalCarrito.style.opacity = "0"
        modalCarrito.style.visibility = "hidden"
    }
})

// -----------------------------------------






