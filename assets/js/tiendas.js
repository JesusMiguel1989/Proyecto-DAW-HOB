let hobie = document.getElementById("tHobie");//combo del hobbie
let localidad = document.getElementById("tLocalidad");//combo de la localidad
let buscar = document.getElementById("tbuscar");//btn lupa
let divtiendas = document.getElementById("divtiendas");//div donde se mostraran los resultados

//variables del script
let array=[];

//funciones asincronas
async function buscar(op,hobie,localidad){
    let encontrados = [];
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + op + "&condicion1=" + hobie + "&condicion2="+localidad);

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + op + "&condicion1=" + hobie 
        + "&condicion2="+localidad, {
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
function mostrar(condicion1, condicion2){
    
}

//eventos
window.addEventListener("load",()=>{
    buscar.addEventListener("click",()=>{
        buscar("buscadorTiendaLocalidad",hobie.value,localidad.value);
        mostrar(hobie.value,localidad.value);
    })
})