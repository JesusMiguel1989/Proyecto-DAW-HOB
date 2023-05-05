let btndiv = document.getElementById("btndiv");//boton que lanza el div

//evento personalizado
let clickEvent = new Event('click');

window.addEventListener("load", () => {
    let perfil = sessionStorage.getItem("alias");
    let estado = sessionStorage.getItem("estado");
    if (perfil != "") {
        btndiv.dispatchEvent(clickEvent);
        let alias = sessionStorage.getItem("alias");
        let ofcanvas = document.getElementById("ofcanvas");
        let h3 = document.getElementById("offcanvasTopLabel1");
        let divCanvas = document.getElementById("offcanvasTop");
        if (alias != null) {
            ofcanvas.style.backgroundColor = "#5564eb";
            //ofcanvas.style.paddingRight="5%"
            ofcanvas.style.color = "white";
            ofcanvas.style.zIndex = "14";
            divCanvas.style.height = "60px";
            switch (estado) {
                case "OK":
                    h3.textContent = "Bienvenido " + alias;
                    break;
                case "Pendiente":
                    h3.textContent = "Revisa tu correo para terminar el registro" ;
                    break;
                case "Banneado":
                    h3.textContent = "Lo siento " + alias + " estas banneado";
                    break;
                default:
                    h3.textContent = "Felicidades " + alias + " has roto la página";
                    break;
            }


        } else {
            ofcanvas.style.backgroundColor = "#bc8e47";
            ofcanvas.style.color = "white";
            ofcanvas.style.zIndex = "14";
            divCanvas.style.height = "60px";
            h3.textContent = "Identificate";
        }
    }
})