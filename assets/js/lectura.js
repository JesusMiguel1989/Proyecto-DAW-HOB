let array = [];
let nota;
//agregar
let btnleyendo = document.getElementById("actual");
let btnleido = document.getElementById("anterior");

async function agregar(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7, condicion8) {

    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
        + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5 + "&condicion6=" + condicion6
        + "&condicion7=" + condicion7 + "&condicion8=" + condicion8);

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
    + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5 + "&condicion6=" + condicion6
    + "&condicion7=" + condicion7 + "&condicion8=" + condicion8, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//funcion asincrona que devuelve los datos del usuario si es correcto

function cambio(cadena) {
    let cad = cadena;

    while (cad.includes(" ")) {
        cad = cad.replace(" ", "_");
    }
    return cad;
}

function mostrar(i) {

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "180px";
    boton.style.margin = "20px";
    boton.id = "libro" + i;
    let foto = document.createElement("img");
    foto.style.width = "80px";
    foto.style.margin = "15px";
    foto.setAttribute("src", array[i][4]);
    foto.alt = "Portada";
    foto.title = array[i][1];
    //libro.appendChild(foto);
    boton.appendChild(foto);
    libro.appendChild(boton);
    libro.style.display = "inline-block";
    resultados.appendChild(libro);
    resultados.style.display = "block";
    //resultados.style.marginLeft = "25%";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    btn.addEventListener("click", () => {

        console.log("libro" + i);
        let portada = document.getElementById("lfoto2");
        let titulo = document.getElementById("ltitulo2");
        let autor = document.getElementById("lautor2");
        let paginas = document.getElementById("lpaginas2");
        let sinopsis = document.getElementById("lsinopsis2");

        let padre = portada.parentNode.parentNode;
        padre.style.backgroundColor = "rgb(152, 226, 202)";
        padre.style.padding = "10px";
        padre.style.borderRadius = "10%";

        //muestro los datos del libro elegido
        portada.setAttribute("srcset", array[i][4]);
        portada.style.width = "75%";
        portada.style.height = "auto";
        titulo.value = array[i][1];
        autor.value = array[i][2];
        paginas.value = array[i][3];
        sinopsis.textContent = array[i][5];
        sinopsis.setAttribute("cols", 50);
        tarjeta.style.display = "block";
        //pongo al usuario al principio de la pagina
        window.scroll(0, 0);

        //boton de libro actual
        btnleyendo.addEventListener("click", () => {
            let alias = sessionStorage.getItem("alias");
            let tit = "";//variable para recoger el titulo sin espacios
            let aut = "";//variable para recoger el autor sin espacios
            tit = cambio(array[i][1]);
            for (let j = 0; j < array[i][2].length; j++) {
                aut = cambio(array[i][2][j]);
            }

            nota = 0;
            agregar("agregarleido", array[i][0], alias, tit, aut, array[i][3], array[i][4], "NO", nota).then(data => {
                console.log(data);
            });
            
        })

        //boton para agregar a tu perfil
        btnleido.addEventListener("click", () => {
            let alias = sessionStorage.getItem("alias");

            //saco la nota que el usuario le da
            let valoracion = document.getElementsByName("estrellas");
            nota = 0;
            for (let i = 0; i < valoracion.length; i++) {
                if (valoracion[i].checked == true) {
                    nota = valoracion[i].value;
                }
            }

            agregar("agregarleido", array[i][0], alias, array[i][1], array[i][2], array[i][3], array[i][4], "SI", nota).then (data =>{
                console.log(data);
            });
        })
    })
}

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

    response = await response.array;
    return Promise.resolve(response);
}

async function buscar2(condicion, condicion2) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + condicion + "&author=" + condicion2);

    let texto = await response.json();

    array = [];
    let descripcion = "";
    let portada = "";

    for (let i = 0; i < texto.docs.length; i++) {
        let encontrados = [];
        descripcion = "";
        portada = "";
        response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + texto.docs[i].isbn[0] + "&format=json");

        let texto2 = await response.json();
        let cadena = "texto2.ISBN" + texto.docs[i].isbn[0] + ".thumbnail_url";

        if (typeof eval(cadena) === 'undefined') {
            portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
        } else {
            portada += eval(cadena);
        }

        response = await fetch("https://openlibrary.org/isbn/" + texto.docs[i].isbn[0] + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        }

        //console.log(texto3.description.value);
        encontrados = [texto.docs[i].isbn[0], texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    response = await response.array;
    return Promise.resolve(response);
}

async function buscar3(condicion) {
    let response = await fetch("https://openlibrary.org/search.json?author=" + condicion);

    let texto = await response.json();

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

            if (typeof eval(cadena) === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            } else {
                portada += eval(cadena);
            }
        }

        response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        }

        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    response = await response.array;
    return Promise.resolve(response);
}

async function buscar4(condicion) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + condicion);

    let texto = await response.json();

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

            if (typeof eval(cadena) === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
            } else {
                portada += eval(cadena);
            }
        }

        response = await fetch("https://openlibrary.org/isbn/" + isbn + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        }

        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    response = await response.array;
    return Promise.resolve(response);
}

async function buscar5(condicion) {
    let response = await fetch("https://openlibrary.org/search.json?isbn=" + condicion);

    let texto = await response.json();

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
        }

        response = await fetch("https://openlibrary.org/isbn/" + condicion + ".json");
        let texto3 = await response.json();
        if (typeof texto3.description === 'undefined') {
            descripcion = "Sinopsis no disponible";
        } else {
            descripcion += texto3.description.value;
        }

        encontrados = [isbn, texto.docs[i].title, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            portada, descripcion];
        array.push(encontrados);

        mostrar(i);
    }

    response = await response.array;
    return Promise.resolve(response);
}

//botones
let buscar = document.getElementById("lbuscar");
let leyendo = document.getElementById("lleyendo");
let leidos = document.getElementById("lleidos");

//div
let divbuscar = document.getElementById("divbuscar");
let divleyendo = document.getElementById("divleyendo");
let divleidos = document.getElementById("divleidos");
let tarjeta = document.getElementById("tarjeta");

window.addEventListener("load", () => {
    buscar.addEventListener("click", () => {
        //cojo el div donde se mostraran los resultados
        let resultados = document.getElementById("resultados");//div donde se guardaran todos los reultados

        let buscardor = document.getElementById("lblanzar");//btn buscar
        let titulo = document.getElementById("lbtitulo");//campo titulo
        let isbn = document.getElementById("lbISBN");//campo isbn
        let autor = document.getElementById("lbautor");//campo autor

        buscardor.addEventListener("click", () => {
            tarjeta.style.display = "none";
            resultados.innerHTML = "";
            if (titulo.value != "" && isbn.value != "" && autor.value != "") {
                buscarall(titulo.value, isbn.value, autor.value);
            } else {
                if (titulo.value != "" && autor.value != "" && isbn.value == "") {
                    //titulo y autor
                    buscar2(titulo.value, autor.value).then(data => {
                    });
                } else {
                    if (autor.value != "") {
                        //solo autor
                        buscar3(autor.value).then(data => {
                        });
                    } else {
                        if (titulo.value != "") {
                            //solo titulo
                            buscar4(titulo.value).then(data => {
                            });
                        } else {
                            if (isbn.value != "") {
                                buscar5(isbn.value).then(data => {
                                });
                            }
                        }
                    }
                }
            }
            console.log(array);
        })


        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    });

    leyendo.addEventListener("click", () => {
        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "none";
        divleyendo.style.display = "block";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    });

    leidos.addEventListener("click", () => {
        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "none";
        divleyendo.style.display = "none";
        divleidos.style.display = "block";
        tarjeta.style.display = "none";
    });
})