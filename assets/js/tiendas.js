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
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + op + "&condicion1=" + hobie + "&condicion2=" + localidad);

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + op + "&condicion1=" + hobie
        + "&condicion2=" + localidad, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    for (let i = 0; i < response.length; i++) {

        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
        response[i][6], response[i][7]/* ,texto.descripcion.value */];
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

    boton.appendChild(foto2);
    divTiendas.appendChild(boton);
    divTiendas.appendChild(tienda);
    //divTiendas.style.display = "inline-block";

    divTiendas.classList.add("col-6","col-sm-4","col-md-4", "col-lg-3");
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

        ficha.style.display="inline-flex";
        ficha.style.width="75%";
        foto.setAttribute("src",array[num][7]);//indico la foto
        foto.style.width="75%";
        //centrar imagen
        foto.style.margin="0 auto";

        nombre.textContent=array[num][3];//indico el nombre de la tienda
        localidad.textContent=array[num][1];//indico la localidad
        provincia.textContent=array[num][2];//indico la provincia
        direccion.textContent=array[num][4];//indico la direccion
        telefono.textContent=array[num][5];//indico el telefono
        window.scroll(0, 0);
    })
}

//eventos
window.addEventListener("load", () => {
    buscador.addEventListener("click", () => {
        resultadosTiendas.innerHTML="";
        ficha.style.display="none";
        array=[];
        //cambiar hobie.value por "Lectura" y se eliminaria la opcion de los otros hobbies
        buscar("buscadorTiendaLocalidad", "Lectura", localidad.value);
    })
})