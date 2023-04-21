
window.addEventListener("load", () => {
    let menu = document.getElementById("menus");
    let header = document.getElementById("header");

    let perfil = sessionStorage.getItem("alias");
    if (perfil == "Administrador") {
        let admin=document.getElementById("admin");
        admin.style.display="block";
    }else{
        admin.style.display="none";
    }
    let visible = false;

    menu.addEventListener("click", () => {
        if (visible) {
            header.style.left = "-300px";
            visible = false
        } else {
            header.style.left = "0px";
            visible = true;
        }
    })
})