let hobie = document.getElementById("tHobie");//combo del hobbie
let localidad = document.getElementById("tLocalidad");//combo de la localidad
let buscador = document.getElementById("tbuscar");//btn lupa
let divtiendas = document.getElementById("divtiendas");//div donde se mostraran los resultados

let resultadosTiendas = document.getElementById("resultadosTiendas");//div donde se muestran los resultados de la busqueda
let ficha = document.getElementById("ficha");//div con la ficha de la libreria

//variables del script
let array = [];

//funciones asincronas
async function buscar(op, hobie, localidad) {
    let encontrados = [];
    /* console.log("http://"+root+"/proyecto/php/miniAPI.php?opcion=" + op + "&condicion1=" + hobie + "&condicion2=" + localidad); */

    let response = await fetch(root+"/php/miniAPI.php?opcion=" + encodeURIComponent(op) + "&condicion1=" + encodeURIComponent(hobie)
        + "&condicion2=" + encodeURIComponent(localidad), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    for (let i = 0; i < response.length; i++) {

        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
        response[i][6], response[i][7], response[i][8]/* ,texto.descripcion.value */];
        array.push(encontrados);
        mostrar(i);
    }

    return Promise.resolve(response);
}

//funciones normales
function mostrar(num) {

    let divTiendas = document.createElement("div");
    divTiendas.style.height = "300px";

    let btnTienda = document.createElement("div");
    btnTienda.id = "btnTienda" + num;

    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "180px";
    boton.style.width = "180px";
    boton.style.marginTop = "20px";
    boton.style.margin = "0 auto";
    boton.id = "tienda" + num;

    let foto2 = document.createElement("img");
    foto2.style.width = "50%";
    foto2.setAttribute("src", array[num][7]);
    foto2.alt = array[num][3];
    foto2.title = array[num][3];

    let tienda = document.createElement("h3");
    tienda.textContent = array[num][3];
    tienda.style.margin = "0 auto";
    tienda.style.size = "15px";
    tienda.style.textAlign = "center";
    tienda.style.width = "120px";

    boton.appendChild(foto2);
    divTiendas.appendChild(boton);
    divTiendas.appendChild(tienda);
    //divTiendas.style.display = "inline-block";

    divTiendas.classList.add("col-6", "col-sm-4", "col-md-4", "col-lg-3");
    divTiendas.classList.add("text-center");
    divTiendas.classList.add("mt-4", "mb-sm-5", "mb-2");
    divTiendas.classList.add("ms-xs-3", "ms-lg-4");

    resultadosTiendas.appendChild(divTiendas);
    resultadosTiendas.style = "display: flex ; flex-wrap:wrap";

    boton.addEventListener("click", () => {
        //variables del DOM
        let foto = document.getElementById("fotoTienda");
        let nombre = document.getElementById("tnombre");
        let localidad = document.getElementById("tlocalidad");
        let provincia = document.getElementById("tprovincia");
        let direccion = document.getElementById("tdireccion");
        let telefono = document.getElementById("ttelefono");
        let web = document.getElementById("tWeb");

        ficha.style.display = "inline-flex";
        ficha.style.width = "75%";
        foto.setAttribute("src", array[num][7]);//indico la foto
        foto.style.width = "75%";
        //centrar imagen
        foto.style.margin = "0 auto";

        /////COGER DIRECCION dividirla y crear cadena como la de abajo
        /* https://www.google.es/maps/place/C.+de+Col%C3%B3n,+32+16002+Cuenca */

        let dir = array[num][4].split(" ");
        let google = "https://www.google.es/maps/place/";
        for (let d = 0; d < dir.length; d++) {
            if(d==(dir.length-1)){
                google += dir[d]
            }else{
                google += dir[d] + "_";
            }
        }
        while (google.includes("_")) {
            google = google.replace("_", "+");
        }

        nombre.textContent = array[num][3];//indico el nombre de la tienda
        localidad.textContent = array[num][1];//indico la localidad
        provincia.textContent = array[num][2];//indico la provincia
        direccion.innerHTML = array[num][4] + "  <a href='"+google+"' target='_blank'><i class='bi bi-geo-alt-fill'></i></a>";
        ;//indico la direccion
        telefono.textContent = array[num][5];//indico el telefono
        if (array[num][8] != "") {
            web.innerHTML = "<a href='https://" + array[num][8] + "' alt='Web de" + array[num][3] + "' title='" + array[num][3] + "' target='_blank'>Acceder</a>";//indico la Web
        } else {
            web.textContent = "Web no disponible";//indico la Web
        }
        window.scroll(0, 0);
    })
}

//eventos
window.addEventListener("load", () => {
    buscador.addEventListener("click", () => {
        resultadosTiendas.innerHTML = "";
        ficha.style.display = "none";
        array = [];
        let localidadFinal=localidad.value;
        //cambiar hobie.value por "Lectura" y se eliminaria la opcion de los otros hobbies
        if(localidadFinal=="Ciudad Real"){
            localidadFinal="C.Real";
        }
        buscar("buscadorTiendaLocalidad", "Lectura", localidadFinal);
    })
})