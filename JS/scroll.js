const menu = document.querySelector(".header-menu")

window.addEventListener("scroll", () =>{
    if(window.pageYOffset < 60){
        menu.style.position = "absolute"
        menu.style.cssText = null
        
    }else if(window.pageYOffset > 130){
        menu.style.position = "fixed"
        menu.style.top = "0"
    }
})
