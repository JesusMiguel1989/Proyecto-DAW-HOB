let btndiv = document.getElementById("btndiv");//boton que lanza el div

//evento personalizado
let clickEvent = new Event('click');

window.addEventListener("load", () => {
    
    let datos=new URLSearchParams(window.location.search);
    datos=decodeURIComponent(datos);
    console.log(datos);
    let cadena=datos.slice(datos.search("=")+1);
    if(cadena.includes("[")){
        cadena=JSON.parse(cadena);
        sessionStorage.setItem('alias', cadena[0].replace("+"," "));
        sessionStorage.setItem('fecha', cadena[1]);
        sessionStorage.setItem('localidad', cadena[2]);
        sessionStorage.setItem('mail', cadena[3]);
        sessionStorage.setItem('key', cadena[4]);
        sessionStorage.setItem('foto', cadena[5]);
        sessionStorage.setItem('estado', cadena[6]);
    }else{
        let array=cadena.split(",");
        sessionStorage.setItem('alias', array[0].replace("+"," "));
        sessionStorage.setItem('fecha', array[1]);
        sessionStorage.setItem('localidad', array[2]);
        sessionStorage.setItem('mail', array[3]);
        sessionStorage.setItem('key', array[4]);
        sessionStorage.setItem('foto', array[5]);
        sessionStorage.setItem('estado', array[6]);
    }
    
    let perfil = sessionStorage.getItem("alias");
    let estado = sessionStorage.getItem("estado");
        
    if (perfil != "") {
        btndiv.dispatchEvent(clickEvent);
        let alias = sessionStorage.getItem("alias");
        let ofcanvas = document.getElementById("ofcanvas");
        let h3 = document.getElementById("offcanvasTopLabel1");
        let divCanvas = document.getElementById("offcanvasTop");
        
        alias=sessionStorage.getItem('alias');
        
        if (alias != null) {
            
            //ofcanvas.style.paddingRight="5%"
            ofcanvas.style.color = "white";
            ofcanvas.style.zIndex = "14";
            divCanvas.style.height = "60px";
            switch (estado) {
                case "OK":
                    ofcanvas.style.backgroundColor = "#5564eb";
                    h3.textContent = "Bienvenido " + alias;
                    break;
                case "Pendiente":
                    ofcanvas.style.backgroundColor = "#d6985a";
                    h3.textContent = "Revisa tu correo para terminar el registro. El correo puede estar en no deseado o spam" ;
                    break;
                case "Banneado":
                    ofcanvas.style.backgroundColor = "#99284b";
                    h3.textContent = "Lo siento " + alias + " estas banneado";
                    break;
                default:
                    ofcanvas.style.backgroundColor = "rgb(149,215,180)";
                    h3.textContent = "Felicidades " + alias + " has roto la página";
                    break;
            }


        } else {
            divCanvas.style.display="none";
            /* ofcanvas.style.backgroundColor = "rgb(95,196,227)";
            ofcanvas.style.color = "white";
            ofcanvas.style.zIndex = "14";
            divCanvas.style.height = "60px";
            h3.textContent = "Identificate"; */
        }
    }
})