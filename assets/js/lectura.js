let array = [];
let nota;
let cad = "";//variable para recoger la sinopsis o indicar que no esta disponible
let cadena;//variable para reducir los titulos

let aux;//variable para saber que libro ha sido seleccionado
//variables para la paginacion
let page = 1;//variable para indicar la pagina en la api open library
let limite = 20;//variable para indicar la cantidad de elementos por pagina
let resultadosBusqueda = 0;//variable que tendra el numero de resultados de la busqueda
let paginasTotales = 0;//variable que guardara las paginas totales

//variabes paginacion de pendientes
let inicio = 0;//inicio de la pag (LIMIT 0)

//agregar
let btnLeyendo = document.getElementById("actual");
let btnLeido = document.getElementById("anterior");

//variables globales para libros
let btnBuscardor = document.getElementById("lblanzar");//btn buscar
let titulo = document.getElementById("lbtitulo");//campo titulo
let isbn = document.getElementById("lbISBN");//campo isbn
let autor = document.getElementById("lbautor");//campo autor

let tit = "";//variable para recoger el titulo sin espacios
let aut = "";//variable para recoger el autor sin espacios

async function agregar(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7, condicion8) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
        + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5 + "&condicion6=" + condicion6
        + "&condicion7=" + condicion7 + "&condicion8=" + condicion8, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}//funcion asincrona que devuelve los datos del usuario si es correcto

async function modificarLibro(opcion, condicion1, condicion2, condicion3) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
        + "&condicion3=" + condicion3, {
        //method: "PATCH",
        headers: { "Content-type": "application/json" }
    });

    /* response = await response.json();
    return Promise.resolve(response); */
}//funcion asincrona que llama a la API para modificar un libro

async function eliminarLibro(opcion, condicion1, condicion2, condicion3) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
        + "&condicion3=" + condicion3, {
        //method: "PATCH",
        headers: { "Content-type": "application/json" }
    });

}//funcion asincrona que llama a la API para eliminar un libro

//funcion asincrona para mostrar os libros que se estan leyendo ahora
async function mostrarLeyendo(opcion, condicion1) {

    let encontrados = [];
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1
        + "&condicion2=" + inicio,);

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    console.log(response);
    /* let response2 = await fetch("https://openlibrary.org/isbn/" + response[0][0] + ".json", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    let texto = await response2.json(); */

    for (let i = 0; i < response.length; i++) {

        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
        response[i][6], response[i][7]/* ,texto.descripcion.value */];
        array.push(encontrados);
        mostrar2(i);
    }
    //funcion que introduce el boton siguiente y anterior
    pagina2();
    //return Promise.resolve(response);
}

async function mostrarLeidos(opcion, condicion1) {

    let encontrados = [];

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    /* let response2 = await fetch("https://openlibrary.org/isbn/" + response[0][0] + ".json", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    let texto = await response2.json(); */

    for (let i = 0; i < response.length; i++) {

        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
        response[i][6], response[i][7]/* ,texto.descripcion.value */];
        array.push(encontrados);
        mostrar2(i);
    }

    return Promise.resolve(response);
}

async function sinopsisLibro(isbn) {

    let response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json", {
        method: "GET"
    });

    let texto = await response.json();

    try {
        if (texto.description.value == null) {
            cad = "Sinopsis no disponible";
        } else {
            cad = texto.description.value;
        }
    } catch {
        cad = "Sinopsis no disponible";
    }

}

async function rankingHOB(opcion) {
    let encontrados = [];
    let tope = 0;

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    for (let i = 0; i < response.length; i++) {

        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5]];
        array.push(encontrados);
        //error al mostrarlos
        mostrar3(i);

        //comprobador de que solo muestre los 10 primeros
        tope++;
        if (tope >= 10) {
            //si van 10 sale del for
            break;
        }
    }

    return Promise.resolve(response);
}

function cambio(cadena) {
    let cad = cadena;

    while (cad.includes(" ")) {
        cad = cad.replace(" ", "_");
    }
    return cad;
}

function mostrar(i) {

    let tit = document.createElement("h6");//elemento para indicar el titulo del libro
    let pos = array[i][1].search(/\(/);
    //poner por si es negativo
    if (pos < 0) {
        pos = array[i][1].length;
    }
    cadena = array[i][1].substring(0, pos);
    console.log(cadena);
    tit.textContent = cadena;
    tit.style.fontWeight = "bold";
    tit.style.marginTop = "5px";
    //tit.style.marginLeft = "50px";//%
    tit.style.margin = "0 auto";
    tit.style.size = "15px";
    tit.style.textAlign = "center";
    tit.style.width = "150px";

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    libro.style.height = "300px";

    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "180px";
    boton.style.marginTop = "20px";
    boton.style.margin = "0 auto";
    boton.id = "libro" + i;

    let foto = document.createElement("img");
    foto.style.width = "80px";
    foto.style.margin = "15px";
    let img = array[i][4].replace("S", "M");
    foto.setAttribute("src", img);
    foto.alt = "Portada";
    foto.title = array[i][1];

    //libro.appendChild(foto);
    boton.appendChild(foto);
    libro.appendChild(boton);
    libro.appendChild(tit);

    libro.classList.add("col-12");
    libro.classList.add("col-sm-3");
    libro.classList.add("col-lg-2");
    libro.classList.add("text-center");
    libro.classList.add("mt-4");
    libro.classList.add("ms-xs-3");
    libro.classList.add("ms-lg-4");
    //libro.style.height = "300px";

    libro.style.display = "inline-block";

    resultados.appendChild(libro);
    //resultados.style.display="flex";
    resultados.style = "display: flex ; flex-wrap:wrap";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");


    footer.style.bottom = "-200px";

    btn.addEventListener("click", (e) => {
        aux = i;
        //console.log("libro" + i);
        let portada = document.getElementById("lfoto2");
        let titulo = document.getElementById("ltitulo2");
        let autor = document.getElementById("lautor2");
        let paginas = document.getElementById("lpaginas2");
        let sinopsis = document.getElementById("lsinopsis2");
        let divBotones = document.getElementById("divBotones");

        actual.value = "Pendiente";
        anterior.value = "Leido";


        let padre = portada.parentNode.parentNode;
        padre.style.backgroundColor = "rgb(152, 226, 202)";
        padre.style.padding = "10px";
        padre.style.borderRadius = "10%";

        //muestro los datos del libro elegido
        let img = array[i][4].replace("S", "M");
        foto.setAttribute("src", img);
        portada.setAttribute("srcset", img);
        portada.style.width = "75%";
        portada.style.height = "auto";

        cadena = array[i][1];
        titulo.textContent = cadena;
        titulo.style.minWidth = "60%";

        if (typeof array[i][2] !== 'undefined') {
            autor.textContent = array[i][2];
            autor.style.minWidth = "60%";
        } else {
            autor.textContent = "Sin especificar";
            autor.style.minWidth = "60%";
        }


        if (array[i][3] >= 1) {
            paginas.textContent = array[i][3] + " páginas";
        } else {
            paginas.textContent = "Sin especificar";
        }

        paginas.style.minWidth = "60%";

        if (typeof array[i][5] !== 'undefined') {
            sinopsis.textContent = array[i][5];
            sinopsis.setAttribute("cols", 50);
        } else {
            sinopsis.textContent = "Sin especificar";
            sinopsis.setAttribute("cols", 50);
        }
        sinopsis.textContent = array[i][5];
        sinopsis.setAttribute("cols", 50);


        tarjeta.style.display = "block";
        //pongo al usuario al principio de la pagina
        window.scroll(0, 0);

        //let btnleido = document.getElementById("btnLeido");
        //let btnPendiente = document.getElementById("btnPendiente");

    })//tarjeta
}

//funcion mostrar leyendo y leidos
function mostrar2(i) {

    let tit = document.createElement("h6");//elemento para indicar el titulo del libro
    tit.textContent = array[i][2];
    tit.style.fontWeight = "bold";
    tit.style.marginTop = "5px";
    //tit.style.marginLeft = "50px";
    tit.style.size = "15px";
    tit.style.textAlign = "center";
    tit.style.margin = "0 auto";
    tit.style.width = "150px";

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    libro.classList.add("col-12");
    libro.classList.add("col-sm-4");
    libro.classList.add("col-lg-3");
    libro.classList.add("text-center");
    libro.classList.add("mt-4");
    //libro.style.height = "300px";

    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "180px";
    boton.style.marginTop = "20px";
    boton.style.margin = "0 auto";
    boton.id = "libro" + i;

    let foto = document.createElement("img");
    foto.style.width = "80px";
    foto.style.margin = "15px";
    let img = array[i][5].replace("S", "M");
    foto.setAttribute("src", img);
    foto.alt = "Portada";
    foto.title = array[i][2];
    ///

    boton.appendChild(foto);
    libro.appendChild(boton);
    libro.appendChild(tit);
    libro.style.display = "inline-block";

    resultados.appendChild(libro);
    resultados.style = "display: flex ; flex-wrap:wrap";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    btn.addEventListener("click", () => {

        console.log("libro" + i);
        let portada = document.getElementById("lfoto2");
        let titulo = document.getElementById("ltitulo2");
        let autor = document.getElementById("lautor2");
        let paginas = document.getElementById("lpaginas2");
        let sinopsis = document.getElementById("lsinopsis2");
        let sinopsis2 = document.getElementById("lsinopsis3");
        let estrellas = document.getElementsByName("estrellas");

        //botones
        let op = document.getElementById("op");//titulo botones
        let actual = document.getElementById("actual");//btn izquierda
        let anterior = document.getElementById("anterior");//btn derecha

        let padre = portada.parentNode.parentNode;
        padre.style.backgroundColor = "rgb(152, 226, 202)";
        padre.style.padding = "10px";
        padre.style.borderRadius = "10%";

        aux = i;
        sinopsisLibro(array[i][0]).then(() => {
            //muestro los datos del libro elegido
            let img = array[i][5].replace("S", "M");
            foto.setAttribute("src", img);
            portada.setAttribute("srcset", img);
            portada.style.width = "75%";
            portada.style.height = "auto";
            titulo.textContent = array[i][2];
            titulo.style.minWidth = "60%";
            autor.textContent = array[i][3];
            autor.style.minWidth = "60%";
            if (array[i][4] >= 1) {
                paginas.textContent = array[i][4] + " páginas";
            } else {
                paginas.textContent = "Sin especificar";
            }

            paginas.style.minWidth = "60%";
            //agregar.style.display="none";
            op.textContent = "Estado actual";
            op.style.fontWeight = "bold";
            actual.value = "Terminado";
            anterior.value = "Abandonado";
            sinopsis.textContent = cad;

            //sinopsis.style.display = "none";
            //sinopsis2.style.display = "none";

            //recorro los elementos estrellas para saber cual es la nota que le dio
            for (let j = 0; j < estrellas.length; j++) {
                if (estrellas[j].value == array[i][7]) {
                    estrellas[j].checked = true;
                }
            }//for que recorre las estrellas

            tarjeta.style.display = "block";
            //pongo al usuario al principio de la pagina
            window.scroll(0, 0);
        });//sinopsis
    })
}

//mostrar ranking
function mostrar3(i) {

    let tit = document.createElement("h6");//elemento para indicar el titulo del libro
    tit.textContent = array[i][1];
    tit.style.fontWeight = "bold";
    tit.style.marginTop = "5px";
    //tit.style.marginLeft = "45px";
    tit.style.margin = "0 auto";
    tit.style.size = "15px";
    tit.style.textAlign = "center";
    tit.style.width = "150px";

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    libro.style.height = "300px";
    libro.classList.add("col-12");
    libro.classList.add("col-sm-4");
    libro.classList.add("col-lg-3");
    libro.classList.add("text-center");
    libro.classList.add("mt-4");

    let posicion = document.createElement("h1");//elemento para indicar la posicion en el ranking
    posicion.textContent = (i + 1);
    posicion.style.fontWeight = "bold";
    posicion.style.display = "fixed";
    //posicion.style.left = "15px";
    posicion.style.top = "35px";
    //posicion.style.marginTop = "30px";

    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "180px";
    //boton.style.marginTop = "20px";
    //boton.style.marginLeft = "28px";
    boton.style.margin = "0 auto";
    boton.id = "libro" + i;

    let foto = document.createElement("img");
    foto.style.width = "80px";
    foto.style.margin = "15px";
    let img = array[i][4].replace("S", "M");
    foto.setAttribute("src", img);
    //foto.setAttribute("src", img);
    foto.alt = "Portada";
    foto.title = array[i][1];

    //libro.appendChild(foto);
    boton.appendChild(foto);
    libro.appendChild(posicion);
    libro.appendChild(boton);
    libro.appendChild(tit);
    //libro.style.marginTop="50px";
    libro.style.display = "inline-block";
    resultados.appendChild(libro);

    //resultados.style = "display: flex ; flex-wrap:wrap; margin-top: 20px";
    resultados.classList.add("mt-4");

    op.textContent = "Estado actual";
    op.style.fontWeight = "bold";
    actual.value = "Leer";
    anterior.value = "Leido";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    footer.style.bottom = "-200px";

    btn.addEventListener("click", () => {

        //console.log("libro" + i);
        let portada = document.getElementById("lfoto2");
        let titulo = document.getElementById("ltitulo2");
        let autor = document.getElementById("lautor2");
        let paginas = document.getElementById("lpaginas2");
        let sinopsis = document.getElementById("lsinopsis2");
        let sinopsis2 = document.getElementById("lsinopsis3");
        let btnlibro = document.getElementById("btnlibro");
        let estrellas = document.getElementsByName("estrellas");

        //recorro los elementos estrellas para saber cual es la nota que le dio
        for (let j = 0; j < estrellas.length; j++) {
            if (estrellas[j].value == array[i][5].charAt(0)) {
                estrellas[j].checked = true;
            }
        }//for que recorre las estrellas

        let padre = portada.parentNode.parentNode;
        padre.style.backgroundColor = "rgb(152, 226, 202)";
        padre.style.padding = "10px";
        padre.style.borderRadius = "10%";

        //muestro los datos del libro elegido
        let img = array[i][4].replace("S", "M");
        foto.setAttribute("src", img);
        portada.setAttribute("srcset", img);
        portada.style.width = "90%";
        portada.style.height = "auto";
        titulo.textContent = array[i][1];
        titulo.style.minWidth = "60%";

        autor.textContent = array[i][2];
        autor.style.minWidth = "60%";

        if (array[i][3] >= 1) {
            paginas.textContent = array[i][3] + " páginas";
        } else {
            paginas.textContent = "Sin especificar";
        }

        paginas.style.minWidth = "60%";

        sinopsisLibro(array[i][0]).then(() => {
            sinopsis.textContent = cad;
            sinopsis.setAttribute("cols", 50);
            sinopsis.style.display = "inline";
            sinopsis2.style.display = "inline";
            btnlibro.style.display = "flex";
            tarjeta.style.display = "block";
            //pongo al usuario al principio de la pagina
            window.scroll(0, 0);

            //hago visibles los botones
            let op = document.getElementById("op");
            op.textContent = "¿Lo quieres en tu perfil?";
            op.style.textDecoration = "underline";
            op.style.display = "inline";
            op.style.marginBottom = "10px";
            btnLeyendo.style.display = "inline";
            btnLeyendo.style.marginBottom = "10px";
            btnLeido.style.display = "inline";
            btnLeido.style.marginBottom = "10px";
        });

        aux = i;
    })
}

//funciones asincronas del buscador
async function buscarall(condicion, condicion2, condicion3) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + condicion + "&isbn=" + condicion2 + "&author=" + condicion3);

    let texto = await response.json();
    array = [];
    let encontrados = [];
    let descripcion = "";

    response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + condicion2 + "&format=json");

    let texto2 = await response.json();
    let cadena = "texto2.ISBN" + condicion2 + ".thumbnail_url"
    //console.log(eval(cadena));

    response = await fetch("https://openlibrary.org/isbn/" + condicion2 + ".json");
    let texto3 = await response.json();
    descripcion = "";
    if (typeof texto3.description === 'undefined') {
        descripcion = "Sinopsis no disponible";
    } else {
        descripcion += texto3.description.value;
    }

    for (let i = 0; i < texto.docs.length; i++) {
        encontrados = [texto.docs[i].isbn[0], texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
        eval(cadena), descripcion];
        array.push(encontrados);
        mostrar(i);
    }

    footer.style.display = "block";
    response = await response.array;
    return Promise.resolve(response);
}

//buscador de titulo y autor
async function buscar2(condicion, condicion2) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + condicion + "&author=" + condicion2
        + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";

    for (let i = 0; i < texto.docs.length; i++) {
        let encontrados = [];
        descripcion = "";
        portada = "";
        let isbn = 0;
        try {
            if (typeof texto.docs[i].isbn[0] === "undefined") {
                isbn = 0000000000000;
            } else {
                isbn = texto.docs[i].isbn[0]
            }
        } catch {
            isbn = 0000000000000;
        }
        response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + isbn + "&format=json");

        let texto2 = await response.json();
        //let cadena = "texto2.ISBN" + texto.docs[i].isbn[0] + ".thumbnail_url";

        let prueba2 = texto2["ISBN" + isbn];

        try {
            if (prueba2["thumbnail_url"] == null || typeof prueba2["thumbnail_url"] === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            } else {
                portada = texto2["ISBN" + texto.docs[i].isbn[0]]["thumbnail_url"];
                //portada += eval(cadena);
            }
            if (portada == "https://covers.openlibrary.org/b/id/-1-S.jpg") {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            }
        } catch {
            portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
        }

        try {
            response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
            let texto3 = await response.json();
            if (typeof texto3.description === 'undefined') {
                descripcion = "Sinopsis no disponible";
            } else {
                descripcion += texto3.description.value;
            }
        } catch {
            descripcion = "Sinopsis no disponible";
        }
        /* response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        } */

        //console.log(texto3.description.value);
        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }
    footer.style.display = "block";

    response = await response.array;
    return Promise.resolve(response);
}

//author
async function buscar3(condicion) {

    let response = await fetch("https://openlibrary.org/search.json?author=" + condicion + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";


    for (let i = 0; i < texto.docs.length; i++) {
        let encontrados = [];
        descripcion = "";
        portada = "";

        if (typeof texto.docs[i].isbn === 'undefined') {
            portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            isbn = "9788373196131";
        } else {
            isbn = texto.docs[i].isbn[0];
            response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + texto.docs[i].isbn[0] + "&format=json");

            let texto2 = await response.json();
            let cadena = "texto2.ISBN" + texto.docs[i].isbn[0] + ".thumbnail_url";
            //le quito los guiones
            cadena = cadena.replace("-", "");
            let prueba2 = texto2["ISBN" + texto.docs[i].isbn[0]];

            try {
                if (prueba2["thumbnail_url"] == null || typeof prueba2["thumbnail_url"] === 'undefined') {
                    portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                } else {
                    portada = texto2["ISBN" + texto.docs[i].isbn[0]]["thumbnail_url"];
                    //portada += eval(cadena);
                }
                if (portada == "https://covers.openlibrary.org/b/id/-1-S.jpg") {
                    portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                }
            } catch {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            }

            /* if (typeof prueba2 === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            } else {

                //let prueba2=texto2["ISBN"+texto.docs[i].isbn[0]]["thumbnail_url"];
                portada += prueba2;
                //portada += eval(cadena);
            } */
        }

        try {
            response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
            let texto3 = await response.json();
            if (typeof texto3.description === 'undefined') {
                descripcion = "Sinopsis no disponible";
            } else {
                descripcion += texto3.description.value;
            }
        } catch {
            descripcion = "Sinopsis no disponible";
        }


        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }
    //para mostrar paginacion
    /* for(i=51;i<100;i++){
        mostrar(i);
    } */

    footer.style.display = "block";
    response = await response.array;
    return Promise.resolve(response);
}

//titulo
async function buscar4(condicion) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + condicion + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";


    for (let i = 0; i < texto.docs.length; i++) {
        let encontrados = [];
        descripcion = "";
        portada = "";

        if (typeof texto.docs[i].isbn === 'undefined') {
            portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            isbn = "9788373196131";
        } else {
            isbn = texto.docs[i].isbn[0];

            response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + isbn + "&format=json");

            let texto2 = await response.json();
            let cadena = "texto2.ISBN" + isbn + ".thumbnail_url";
            let prueba2 = texto2["ISBN" + texto.docs[i].isbn[0]];

            try {
                if (prueba2["thumbnail_url"] == null || typeof prueba2["thumbnail_url"] === 'undefined') {
                    portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                } else {
                    portada = texto2["ISBN" + texto.docs[i].isbn[0]]["thumbnail_url"];
                    //portada += eval(cadena);
                }
                if (portada == "https://covers.openlibrary.org/b/id/-1-S.jpg") {
                    portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                }
            } catch {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            }

        }

        try {
            response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
            let texto3 = await response.json();
            if (typeof texto3.description === 'undefined') {
                descripcion = "Sinopsis no disponible";
            } else {
                descripcion += texto3.description.value;
            }
        } catch {
            descripcion = "Sinopsis no disponible";
        }

        /* response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        } */

        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    footer.style.display = "block";
    response = await response.array;
    return Promise.resolve(response);
}

//isbn
async function buscar5(condicion) {
    let response = await fetch("https://openlibrary.org/search.json?isbn=" + condicion + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";


    for (let i = 0; i < texto.docs.length; i++) {
        let encontrados = [];
        descripcion = "";
        portada = "";

        if (typeof texto.docs[i].isbn === 'undefined') {
            portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            isbn = 9788373196131;
        } else {
            isbn = texto.docs[i].isbn[0];
            response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + texto.docs[i].isbn[0] + "&format=json");

            let texto2 = await response.json();
            let cadena = "texto2.ISBN" + texto.docs[i].isbn[0] + ".thumbnail_url";

            if (typeof eval(cadena) === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            } else {
                portada += eval(cadena);
            }
            if (portada == "https://covers.openlibrary.org/b/id/-1-S.jpg") {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            }
        }

        try {
            response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
            let texto3 = await response.json();
            if (typeof texto3.description === 'undefined') {
                descripcion = "Sinopsis no disponible";
            } else {
                descripcion += texto3.description.value;
            }
        } catch {
            descripcion = "Sinopsis no disponible";
        }
        /* response = await fetch("https://openlibrary.org/isbn/" + condicion + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        } */

        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    footer.style.display = "block";
    response = await response.array;
    return Promise.resolve(response);
}

//funcion que comprueba los campos introducidos y envia la peticion a la correspondiente
function buscador() {

    resultados.innerHTML = "";
    array = [];
    tarjeta.style.display = "none";
    resultados.innerHTML = "";
    if (titulo.value != "" && isbn.value != "" && autor.value != "") {
        buscarall(titulo.value, isbn.value, autor.value);
    } else {
        if (titulo.value != "" && autor.value != "" && isbn.value == "") {
            //titulo y autor
            buscar2(titulo.value, autor.value).then(() => {
                pagina();
            });
        } else {
            if (autor.value != "") {
                //solo autor
                buscar3(autor.value).then(() => {
                    pagina();
                });

            } else {
                if (titulo.value != "") {
                    //solo titulo
                    buscar4(titulo.value).then(() => {
                        pagina();
                    });
                } else {
                    if (isbn.value != "") {
                        buscar5(isbn.value).then(() => {
                            pagina();
                        });
                    }
                }
            }
        }
    }
    //console.log(array);
}

//funcion que crea los btn para la paginacion del buscador
function pagina() {
    //creo el div para los botones de la paginacion
    let paginacion = document.createElement("div");
    paginacion.classList.add("row");

    //creo el div de previo
    let previo = document.createElement("div");
    previo.classList.add("col-4", "col-sm-5", "text-center");

    //creo el boton de previo
    let btnprevio = document.createElement("input");
    btnprevio.type = "button";
    btnprevio.id = "btnprevio";
    btnprevio.value = "Anterior";
    btnprevio.classList.add("btn-sugerencia");
    btnprevio.style.margin = "0 auto";
    previo.appendChild(btnprevio);

    //div pagina
    let numPag = document.createElement("div");
    numPag.classList.add("col-4", "col-sm-2", "text-center");

    //creo el h1
    let np = document.createElement("h3");
    np.textContent = page + " de " + paginasTotales;
    numPag.appendChild(np);

    //div para siguientes
    let siguientes = document.createElement("div");
    siguientes.classList.add("col-4", "col-sm-5", "text-center")

    //creo el boton de siguiente
    let btnsiguiente = document.createElement("input");
    btnsiguiente.type = "button";
    btnsiguiente.id = "btnprevio";
    btnsiguiente.value = "Siguiente";
    btnsiguiente.classList.add("btn-sugerencia");
    btnsiguiente.style.margin = "0 auto";
    siguientes.appendChild(btnsiguiente);

    //agrego los div con los botones
    paginacion.appendChild(previo);//btn anteriores
    paginacion.appendChild(numPag);//numero de la pagina
    paginacion.appendChild(siguientes);//btn siguientes

    //agrego el div de los botones a resultados
    resultados.appendChild(paginacion);

    btnprevio.addEventListener("click", (e) => {
        if (page > 1) {
            page--;
            buscador()
        } else {
            e.preventDefault();
        }
    });//btn anterior

    btnsiguiente.addEventListener("click", (e) => {
        if (page < paginasTotales) {
            page++;
            buscador()
        } else {
            e.preventDefault();
        }
    });//btn siguiente
}

function pagina2() {
    
    //creo el div para los botones de la paginacion
    let paginacion = document.createElement("div");
    paginacion.classList.add("row");

    //creo el div de previo
    let previo = document.createElement("div");
    previo.classList.add("col-4", "col-sm-5", "text-center");

    //creo el boton de previo
    let btnprevio = document.createElement("input");
    btnprevio.type = "button";
    btnprevio.id = "btnprevioleyendo";
    btnprevio.value = "Anterior";
    btnprevio.classList.add("btn-sugerencia");
    btnprevio.style.margin = "0 auto";
    previo.appendChild(btnprevio);

    //div pagina
    let numPag = document.createElement("div");
    numPag.classList.add("col-4", "col-sm-2", "text-center");

    //creo el h1
    /* let np = document.createElement("h3");
    np.textContent = page + " de " + paginasTotales;
    numPag.appendChild(np); */

    //div para siguientes
    let siguientes = document.createElement("div");
    siguientes.classList.add("col-4", "col-sm-5", "text-center")

    //creo el boton de siguiente
    let btnsiguiente = document.createElement("input");
    btnsiguiente.type = "button";
    btnsiguiente.id = "btnSiguienteLeyendo";
    btnsiguiente.value = "Siguiente";
    btnsiguiente.classList.add("btn-sugerencia");
    btnsiguiente.style.margin = "0 auto";
    siguientes.appendChild(btnsiguiente);

    //agrego los div con los botones
    paginacion.appendChild(previo);//btn anteriores
    paginacion.appendChild(numPag);//numero de la pagina
    paginacion.appendChild(siguientes);//btn siguientes

    //agrego el div de los botones a resultados
    resultados.appendChild(paginacion);

    btnprevio.addEventListener("click", (e) => {
        if (limite > 20) {
            resultados.innerHTML="";
            limite -= 20;
            let nombre = cambio(sessionStorage.getItem("alias"));

            mostrarLeyendo("mostrarLeyendo", nombre);
        } else {
            e.preventDefault();
        }
    });//btn anterior

    btnsiguiente.addEventListener("click", (e) => {
        resultados.innerHTML="";
        limite+=20;
        let nombre = cambio(sessionStorage.getItem("alias"));
        
        mostrarLeyendo("mostrarLeyendo", nombre);

    });//btn siguiente
}

//botones
let buscar = document.getElementById("lbuscar");
let leyendo = document.getElementById("lleyendo");
let leidos = document.getElementById("lleidos");
let ranking = document.getElementById("lranking");

//div
let tarjetabuscador = document.getElementById("tarjetabuscador");
let divbuscar = document.getElementById("divbuscar");
let divleyendo = document.getElementById("divleyendo");
let divleidos = document.getElementById("divleidos");
let tarjeta = document.getElementById("tarjeta");
let footer = document.getElementById("footer2");

window.addEventListener("load", () => {
    buscar.addEventListener("click", () => {
        //cojo el div donde se mostraran los resultados
        let resultados = document.getElementById("resultados");//div donde se guardaran todos los reultados

        resultados.innerHTML = "";
        array = [];

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    });

    //btn que inicia la busqueda
    btnBuscardor.addEventListener("click", () => {
        page = 1;
        buscador();
    })

    //boton leyendo
    leyendo.addEventListener("click", () => {

        resultados.innerHTML = "";
        array = [];
        let nombre = cambio(sessionStorage.getItem("alias"));

        mostrarLeyendo("mostrarLeyendo", nombre);

        for (let i = 0; i < array.length; i++) {
            mostrar(i);
        }

        op.style.display = "block";
        actual.style.display = "block";
        anterior.style.display = "block";
        actual.style.display = "inline";
        anterior.style.display = "inline";

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";

    });

    //boton leidos
    leidos.addEventListener("click", () => {
        let op = document.getElementById("op");//titulo botones
        let actual = document.getElementById("actual");//btn izquierda
        let anterior = document.getElementById("anterior");//btn derecha

        resultados.innerHTML = "";
        array = [];
        mostrarLeidos("mostrarLeidos", sessionStorage.getItem("alias"));
        for (let i = 0; i < array.length; i++) {
            mostrar(i);
        }

        op.style.display = "none";
        actual.style.display = "none";
        anterior.style.display = "none";
        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";

    });

    //boton ranking
    ranking.addEventListener("click", () => {
        resultados.innerHTML = "";
        array = [];

        rankingHOB("ranking");

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";

    });

    //boton de libro actual
    btnLeyendo.addEventListener("click", () => {
        if (btnLeyendo.value == "Terminado") {
            let validacion = document.getElementById("validacion");
            let alias = sessionStorage.getItem("alias");

            if (alias != null) {
                //saco la nota que el usuario le da
                let valoracion = document.getElementsByName("estrellas");
                nota = 0;
                for (let i = 0; i < valoracion.length; i++) {
                    if (valoracion[i].checked == true) {
                        nota = valoracion[i].value;
                    }
                }

                if (nota == 0) {
                    validacion.style.display = "block";
                    validacion.style.color = "red";
                    validacion.style.fontWeight = "bold";
                } else {
                    validacion.style.display = "none";
                    modificarLibro("modificarLibro", alias, array[aux][0], nota);
                    //////RELOAD
                }
            }
        } else {
            let alias = sessionStorage.getItem("alias");
            if (alias != null) {
                let tit = "";//variable para recoger el titulo sin espacios
                let aut = "";//variable para recoger el autor sin espacios
                alias = cambio(alias);
                tit = cambio(array[aux][1]);
                aut = cambio(array[aux][2]);
                /* for (let j = 0; j < array[aux][2].length; j++) {
                    aut = cambio(array[aux][2][j]);
                } */
                let pag = 0;
                if (typeof array[aux][3] === "undefined") {
                    pag = 0;
                } else {
                    pag = array[aux][3];
                }
                let img = array[aux][4].replace("S", "M");
                nota = 0;
                agregar("agregarleido", array[aux][0], alias, tit, aut, pag, img, "NO", nota);
            }
        }
    })//leyendo

    //boton para agregar a tu perfil
    btnLeido.addEventListener("click", () => {
        if (btnLeido.value == "Abandonado") {
            if (sessionStorage.getItem("alias") != null) {
                eliminarLibro("eliminarLibro", sessionStorage.getItem("alias"), array[aux][0]);
            }
        } else {
            let validacion = document.getElementById("validacion");
            let alias = sessionStorage.getItem("alias");
            if (alias != null) {
                /* let tit = "";//variable para recoger el titulo sin espacios
            let aut = "";//variable para recoger el autor sin espacios */
                tit = cambio(array[aux][1]);

                aut = cambio(array[aux][2]);


                //saco la nota que el usuario le da
                let valoracion = document.getElementsByName("estrellas");
                nota = 0;
                for (let i = 0; i < valoracion.length; i++) {
                    if (valoracion[i].checked == true) {
                        nota = valoracion[i].value;
                    }
                }
                let pag = 0;
                if (typeof array[aux][3] === "undefined") {
                    pag = 0;
                } else {
                    pag = array[aux][3];
                }
                let img = array[aux][4].replace("S", "M");

                if (nota == 0) {
                    validacion.style.display = "block";
                    validacion.style.color = "red";
                    validacion.style.fontWeight = "bold";
                } else {
                    validacion.style.display = "none";
                    if (tit == cambio(array[aux][1])) {
                        agregar("agregarleido", array[aux][0], alias, tit, aut, array[aux][3], img, "SI", nota);
                    }
                }
            }
        }
    })//leido
})