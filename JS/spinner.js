const carga = document.querySelector(".fondo-carga")

window.onload = () =>{
    setTimeout(() => {
        carga.style.opacity = "0",
        carga.style.visibility = "hidden"
    }, 3000);
}


