

const $menu = document.getElementById("menu");
const $containerMenuMobile = document.querySelector(".container-menu-mobile");
const $menuMobileSalir = document.querySelector(".menu-mobile__salir");
const $menuMobile = document.querySelector(".menu-mobile");


$menu.addEventListener("click",activarMenuMobile);

$containerMenuMobile.addEventListener("dragleave",()=>{alert("hola")});

$menuMobileSalir.addEventListener("click",desactivarMenuMobile);



function activarMenuMobile(){
    $containerMenuMobile.classList.add("container-menu-mobile--active")

    document.body.style.overflowY = "hidden";

}



function desactivarMenuMobile(){
    $containerMenuMobile.classList.remove("container-menu-mobile--active")
    document.body.style.overflowY = "visible";

}

$menuMobile.addEventListener("click",desactivarMenuMobile);






