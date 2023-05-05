
window.addEventListener("load", () => {


    let menu = document.getElementById("menus");
    let ancho = window.innerWidth;
    let header = document.getElementById("header");

    let perfil = sessionStorage.getItem("alias");
    
    if (perfil == "Administrador") {
        let admin = document.getElementById("admin");
        admin.style.display = "block";
    } else {
        admin.style.display = "none";
    }
    let visible = false;

    if (ancho >= 1200) {
        header.style.left = "0px";
    } else {
        header.style.left = "-300px";
    }

    menu.addEventListener("click", () => {
        if (visible) {
            header.style.left = "-300px";
            visible = false
        } else {
            header.style.left = "0px";
            visible = true;
        }
    })//btn toggle

    window.addEventListener("resize", () => {
        let ancho = window.innerWidth;

        if (ancho >= 1200) {
            header.style.left = "0px";
        } else {
            header.style.left = "-300px";
        }
    })//evento que calcula el ancho de la ventana
})