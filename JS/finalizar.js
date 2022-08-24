const siguiente = document.querySelector("#siguiente")
const contenedor = document.querySelector(".contenedor-f")
const volver = document.querySelector(".volver")
const requerido = document.querySelector(".misdatos")
const volverComprar = document.querySelector(".volver-compra")



siguiente.addEventListener("click", (e) =>{
    e.preventDefault()
    if(requerido.value !== ''){
        contenedor.style.opacity="1"
        contenedor.style.visibility="visible"
        }
})


volver.addEventListener("click", ()=>{
    contenedor.style.opacity="0"
    contenedor.style.visibility="hidden"
})

volverComprar.addEventListener("click", ()=>{
    
    swal({
        title: "Estas segur@!?",
        text: "Si volves ahora vas a perder todas tus prendas!",
        icon: "warning",
      })
      .then((willDelete) => {
          
        if (willDelete) {
            volverComprar.setAttribute("href", "/index.html")
            localStorage.clear()
        }
      });
})



// -----------------------------------
    function PonerEnCarrito(prenda){
            
        const input = document.getElementsByClassName("divCantidad")
        for(i = 0; i < productos.length ; i++){
            if(productos[i].id === prenda.id){
                productos[i].cantidad++
                const total = input[i]
                total.value++
                ponerenResumen()
                return null;
                // return null sirve para que no se ejecute carrito.push ni caritodecompras cuando se repita.
                
            }
            
        }
        productos.push(prenda)
        ponerenResumen()
        total()
        
    }

    const compra = document.querySelector(".carrito2")
    let productos=[]

    function Resumen(){
            const prenda = JSON.parse(localStorage.getItem("1")) 
            for(ropa of prenda){
                productos.push(ropa) 
            }
         
        ponerenResumen()
        
    }
    
    Resumen()
    
    function ponerenResumen(){
        compra.innerHTML = ""
        
        productos.forEach(prenda =>{        
            
    
            const divPrendas = document.createElement("div")
            divPrendas.className = "divPrenda"
            
    
            const imgPrenda = document.createElement("img")
            imgPrenda.src = prenda.img
            imgPrenda.className = "imgCarrito"
    
            const namePrenda = document.createElement("h4")
            namePrenda.textContent = prenda.name
            namePrenda.className = "nameCarrito1"
    
            const pricePrenda = document.createElement("b")
            pricePrenda.textContent = "$" + prenda.price
            pricePrenda.className = "precioCarrito"
            
            const borrarPrenda = document.createElement("img")
            borrarPrenda.className = "botonborrar"
            borrarPrenda.src = "./img/borrar.png"
    
            borrarPrenda.onclick = ()=>{
                let id = document.querySelector(".divPrenda")  
                productos.splice(id, 1)
                divPrendas.remove()
                total()
            }
    
            const equis = document.createElement("p")
            equis.textContent = "x"
            equis.className = "equis"
    
            equis.onclick = () =>{
                PonerEnCarrito(prenda)
            }
    
            const divCantidad = document.createElement("input")
            divCantidad.type = "number"
            divCantidad.disabled = "disabled"
            divCantidad.value = prenda.cantidad
            divCantidad.className = "divCantidad1"
            
    
            
            divPrendas.appendChild(borrarPrenda)
            divPrendas.appendChild(divCantidad)
            divPrendas.appendChild(equis)
            divPrendas.appendChild(imgPrenda)
            divPrendas.appendChild(namePrenda)
            divPrendas.appendChild(pricePrenda)
            
    
            compra.appendChild(divPrendas)
    
        })
        total()
        
    }


function sacarDelCarrito(prenda){

    const input = document.getElementsByClassName("divCantidad")
    for(i = 0; i < productos.length ; i++){
        if(productos[i].id === prenda.id){
            productos[i].cantidad--
            const total = input[i]
            total.value--
            ponerenResumen()
            return null;
        }
        
    }
    productos.push(prenda)
    
    ponerenResumen()
    
}

function vaciarCarrito(){
    productos = []
    total()
    ponerenResumen(productos)
}

function total(){
    let total = 0
    const totalPrendas = document.querySelector(".total2")
    productos.forEach((prenda) =>{
        const price = prenda?.price
        total = total + price*prenda?.cantidad
    })

    totalPrendas.innerHTML = "Total: $" + total
}
// -------------------------------

const inputTarjeta = document.querySelector(".efectivo")
const tarjetas = document.querySelector(".tarjetas")
const datoTarjeta = document.querySelector(".dato-tarjeta")

inputTarjeta.onclick= ()=>{
    datoTarjeta.style.display="none"
}

tarjetas.onclick= ()=>{
   datoTarjeta.style.removeProperty("display")
}


// ---------------------------------------

const finalizar = document.querySelector("#finalizar")

finalizar.onclick= ()=>{
    swal("Tu compra ha sido realizada!", "Nos comunicaremos contigo en breves! y en los proximos dias te llegará tu ropa para verte mas facherit@!", "success"); 

}