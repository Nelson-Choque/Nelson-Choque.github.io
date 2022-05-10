

const $menuMobile=document.querySelector(".menu-mobile")
const $menu=document.querySelector(".menu")



$menuMobile.addEventListener("click",activeMenu)

function activeMenu(){
    console.log($menu.classList)
    $menu.classList.toggle("active-menu")

}

$menu.addEventListener("click",()=>activeMenu())

document.addEventListener("touch",()=>event.target.style.background="#Ccc")

