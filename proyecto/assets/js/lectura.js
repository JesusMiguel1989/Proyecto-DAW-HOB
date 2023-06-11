let array = [];
let arrayComentarios = []; //array para guardar los datos referentes a los comentarios ( Foto, alias, nota, comentario)
let nota;
let cad = "";//variable para recoger la sinopsis o indicar que no esta disponible
let cadena;//variable para reducir los titulos
let resultados = document.getElementById("resultados");//div donde se guardaran todos los resultados

let validacion99 = document.getElementById("validacion99");//mensaje de error cuando no se meten ningun valor en la busqueda
let validacion98 = document.getElementById("validacion98");//mensaje de que no se ha encontrado ningun libro con esos datos

//array con los datos curiosos
let curiosidades = [
    "El libro más largo del mundo es <b>‘En busca del tiempo perdido’</b>, de Marcel Proust, cuenta con <b>3.032</b>",
    "<b>Winnie The Pooh, Mrs Piggle-Wiggle</b> y <b>El Hobbit</b> fueron escritos por sus respectivos autores como cuentos infantiles para sus hijos.",
    "La <u>novela</u> más vendida del mundo es <b>El Quijote</b> , de Miguel de Cervantes, que ha vendido más de <b>500 millones</b> de copias.<br>El <u>libro</u> más vendido del mundo es <b>La Biblia</b>.",
    "<u>El libro más caro del mundo</u> es una copia del <b>Códice Leicester</b> , de Leonardo DaVinci.<br>Se pagó por él 30.8 millones de dólares (Bill Gates)",
    "Ernest Hemingway odiaba la portada de <b>El Gran Gatsby</b>, de F.Scott Fitzgerald,<br>y así lo dejó escrito en sus memorias, publicadas en 1964.<br>Para su sorpresa, Fitzgerald le dijo básicamente que<br><i>“no se puede juzgar un libro por su portada”</i>.",
    "¿Sabes el nombre de el monstruo de Frankenstein? No, <b>no es Frankenstein</b>, aunque muchos piensen que lo es.<br>Nunca se le da un nombre dentro de la novela, Mary Shelley (autora) se refirió a él como <b>“Adam”</b>.",
    "<u>El libro más codiciado de la saga <b>Harry Potter</b></u> es, curiosamente,<br><b>Los cuentos de Beedle</b>, el bardo .<br>Se buscan en concreto siete copias que la autora de la saga, J.K. Rowling, escribió a mano, y cuyas portadas tienen joyas incrustadas.<br>Seis de esas copias pertenecen a parte del equipo de Rowling y la séptima fue subastada (4 millones de dólares), destinados íntegramente a un orfanato de Rumanía.",
    "El libro <b>Farenheit 451</b>, de Ray Bradbury, debe su título a la temperatura en la que las páginas de un libro arde.",
    "<u>El personaje</u> que ha sido interpretado por más actores ha sido <b>Sherlock Holmes</b>.<br>Ian McKellen, Buster Keaton, Peter Cushing, Roger Moore,<br>Christopher Plummer, Michael Caine, Charlton Heston, Jeremy Irons, Rupert Everett,<br>Benedict Cumberbatch o Robert Downey Jr... (21 en total)",
    "<u>La primera novela escrita</u> fue <b>La Historia de Genji</b>, de la japonesa <u>Murasaki Shibiku</u>, en 1008.",
    "<b>C.S.Lewis</b> y <b>J.R.R. Tolkien</b> eran mejores amigos. Es más, el protagonista de Más Allá del Planeta Silencioso (1938) está inspirado en Tolkien.",
    "Hasta su fallecimiento en 2014, <b>Gabriel García Márquez</b> siempre se negó a que adaptaran <u>Cien años de soledad</u> al cine,<br>y desautorizó toda adaptación audiovisual de su obra maestra.",
    "<b>Como matar a un ruiseñor</b> es la primera y única novela de la escritora <b>Harper Lee</b>,<br>que ganó un premio Pulitzer y se pasó 88 semanas en el número uno en las listas de más vendidos.<br>Ve y pon un centinela, su supuesta y esperada secuela publicada tras el fallecimiento de la escritora es en realidad un borrador de la primera.",
    "La <b>bibliopegia antropodérmica</b> es la tecnica de encuadernar libros con piel humana,<br>en la biblioteca de la Universidad de Havard es posible encontrar un volumen encuadernado con piel humana,<br>se trata del libro titulado <b>“Des destinées de l’ame”</b> del poeta francés Arsène Houssaye.",
    "El libro más pequeño del mundo se imprimió en Padua en 1897 con un formato de 15 × 9 mm.<br>¿Qué contenía? Una carta escrita por Galileo Galilei dirigida a Cristina de Lorena para afirmar que la teoría copernicana no estaba en conflicto con la fe. Hoy este librito se conserva en la biblioteca Malatestiana de Cesena.",
    "Los <b>lipogramas</b> son auténticos ejercicios literarios en los que el autor disfruta voluntariamente excluyendo una determinada letra del texto.<br>¿Un ejemplo? El escritor francés Georges Perec logró escribir una novela de 300 páginas llamada La Disparition sin usar nunca la letra «e».",
    "En el pasado, el registro de la biblioteca más grande del mundo pertenecía a la de <b>Alejandría</b> en Egipto que albergaba alrededor de 490 mil manuscritos que luego se perdieron con la destrucción de los siglos I y VII d.C.<br>Hoy, sin embargo, la biblioteca más grande del mundo es la <b>Biblioteca Británica de Londres</b>, que tiene alrededor de 170 millones de libros.",
    "Después de 221 años de retraso en 2010, un libro prestado a <b>George Washington</b> en 1789 fue devuelto a la Biblioteca de la Sociedad de Nueva York .<br>A sus herederos se les ha perdonado la multa de 300.000 dólares.",
    "<b>El autor sólo cobra el 10% del coste del libro</b>. Un euro de cada diez es lo que rescata el autor del coste que se reparte con el distribuidor (50%) y el editor (40%). ",
    "<b>Louis Braille creó el sistema para leer a través del tacto en 1829.</b><br>Sin embargo, no fue hasta 1837 cuando el Institute for Blind Youth editó y publicó el primer libro en braille: 'A brief History of France'.<br>Actualmente, sólo restan tres copias en el mundo.",
    "El libro más prohibido del mundo es el <b>Necronomicón</b>, un libro de ocultismo escrito por el autor estadounidense H.P. Lovecraft.<br>El libro ficticio aparece en muchos de los cuentos de Lovecraft y se cree que contiene conocimientos oscuros y peligrosos.",
    "En 1898 (<b>14 años antes del hundimiento del Titanic</b>), <b>Morgan Robertson </b>publicó un libro llamado “Futilidad o El hundimiento del Titán”,<br>donde narraba el naufragio de un barco enorme que hacía la travesía de Londres a Nueva York y que se chocó con un iceberg a unos 700 kilómetros de Terranova…",
    "En ninguna de las novelas de Arthur Conan Doyle se pronuncia la frase: <b>“Elemental, querido Watson”</b>.",
    "Dan Brown mantuvo a los traductores de su obra “Inferno” <b>en un búnker</b> para evitar que se filtraran datos de su nueva novela.<br>Cuando llegó a las librerías nadie sabía nada de la trama."
];
let divCuriosidades = document.getElementById("curiosidadesLibros");//div que aparecera mientras se cargan los libros
let pCuriosidades = document.getElementById("pCuriosidades");//parrafo donde se mostraran las curiosidades
let progreso = document.getElementById("progreso");//barra progress de div

let aux;//variable para saber que libro ha sido seleccionado
//variables para la paginacion
let page = 1;//variable para indicar la pagina en la api open library
let limite = 20;//variable para indicar la cantidad de elementos por pagina

let resultadosBusqueda = 0;//variable que tendra el numero de resultados de la busqueda
let paginasTotales = 0;//variable que guardara las paginas totales

//variables para comentarios
let comentario = document.getElementById("comentario");//div de los comentarios dentro de la tarjeta
let verComentarios = document.getElementById("verComentarios");//btn vercomentarios
let agregarComentarios = document.getElementById("agregarComentarios");//btn agregarComentarios
let anteriorComentario = document.getElementById("anteriorComentario");//btn anterior comentario
let paginacionComentario = document.getElementById("paginacion");//etiqueta de la paginacion
let siguienteComentario = document.getElementById("siguienteComentario");//btn siguiente comentario
let fotoComentario = document.getElementById("fotoComentario");//foto del usuario que dejo ese comentario
let nombreComentario = document.getElementById("nombreComentario");//nombre del usuario que puso el comentario
let notaComentario = document.getElementById("notaComentario");//campo para la nota que le puso el usuario
let resultadosComentarios = document.getElementById("resultadosComentarios");//div inferior de comentarios, donde se muestran
let coment = document.getElementById("coment");//etiqueta que mostrara los comentarios
let inicioComentarios = 0;//inicio de la pag (LIMIT 0)
let registrosComentarios;//numero de registros que devuelve la consulta
let addComentarios = document.getElementById("addComentarios");//div que contiene el textarea para agregar comentarios
let comentUsuario = document.getElementById("comentUsuario");//textarea donde se escribe el comentario
let criticaPrevia = "";//var donde se guardara el comentario previo
let isbnLibros = 0;
let btnAddComentario = document.getElementById("btnAddComentario");//boton extra para agregar comentarios

let clickEvent = new Event('click');//evento

let camino;
//variabes paginacion de pendientes
let inicio = 0;//inicio de la pag (LIMIT 0)
let registros = 0;//numero de registros que tiene el usuario
let turno = 0;//variable que guardara el num de registros mostrados

//variables paginacion leidos
let inicio2 = 0;//inicio de la pag (LIMIT 0)
let registros2 = 0;//numero de registros que tiene el usuario
let turno2 = 0;//variable que guardara el num de registros mostrados

//agregar
let btnLeyendo = document.getElementById("actual");
let btnLeido = document.getElementById("anterior");
let editorial = document.getElementById("leditorial2");

//variables globales para libros
let btnBuscardor = document.getElementById("lblanzar");//btn buscar
let titulo = document.getElementById("lbtitulo");//campo titulo
let isbn = document.getElementById("lbISBN");//campo isbn
let autor = document.getElementById("lbautor");//campo autor

let tit = "";//variable para recoger el titulo sin espacios
let aut = "";//variable para recoger el autor sin espacios

//variables de la tarjeta
let portada = document.getElementById("lfoto2");
let titulo2 = document.getElementById("ltitulo2");
let autor2 = document.getElementById("lautor2");
let paginas = document.getElementById("lpaginas2");
let sinopsis = document.getElementById("lsinopsis2");
let estrellas = document.getElementsByName("estrellas");

//botones
let buscar = document.getElementById("lbuscar");
let leyendo = document.getElementById("lleyendo");
let leidos = document.getElementById("lleidos");
let ranking = document.getElementById("lranking");

//div
let tarjetaBuscador = document.getElementById("tarjetaBuscador");
let divbuscar = document.getElementById("divbuscar");
let divleyendo = document.getElementById("divleyendo");
let divleidos = document.getElementById("divleidos");
let tarjeta = document.getElementById("tarjeta");
let btnDivComentario = document.getElementById("btnDivComentario");//div donde esta el boton de agregar comentario extra
let libros = document.getElementById("libros");//div que indica que no tienes libros asignados a esa seccion

async function agregar(opcion, condicion1, condicion2, condicion3, condicion4,
    condicion5, condicion6, condicion7, condicion8, condicion9, condicion10) {

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) + "&condicion2=" + encodeURIComponent(condicion2) + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4) + "&condicion5=" + encodeURIComponent(condicion5) + "&condicion6=" + encodeURIComponent(condicion6)
        + "&condicion7=" + encodeURIComponent(condicion7) + "&condicion8=" + encodeURIComponent(condicion8) + "&condicion9=" + encodeURIComponent(condicion9) + "&condicion10=" + encodeURIComponent(condicion10)
        , {
            //method: "POST",
            headers: { "Content-type": "application/json" }
        });
}//funcion asincrona que devuelve los datos del usuario si es correcto

async function modificarLibro(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7, condicion8, condicion9) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1)
        + "&condicion2=" + encodeURIComponent(condicion2) + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4)
        + "&condicion5=" + encodeURIComponent(condicion5) + "&condicion6=" + encodeURIComponent(condicion6) + "&condicion7=" + encodeURIComponent(condicion7)
        + "&condicion8=" + encodeURIComponent(condicion8) + "&condicion9=" + encodeURIComponent(condicion9), {
        //method: "PATCH",
        headers: { "Content-type": "application/json" }
    });
}//funcion asincrona que llama a la API para modificar un libro

async function eliminarLibro(opcion, condicion1, condicion2, condicion3) {
        
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) + "&condicion2=" + encodeURIComponent(condicion2)
        + "&condicion3=" + encodeURIComponent(condicion3));
}//funcion asincrona que llama a la API para eliminar un libro

async function mostrarLeyendo(opcion, condicion1) {

    let encontrados = [];
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1)
        + "&condicion2=" + inicio, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    if (response.length > 0) {
        libros.style.display = "none";//oculto el div
        for (let i = 0; i < response.length; i++) {
            encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
            response[i][6], response[i][7], response[i][8], response[i][9]];
            array.push(encontrados);
            mostrar2(i);
        }
        if (response.length <= 0) {
            registros = 0;
        } else {
            registros = response[0][8];
        }
        //funcion que introduce el boton siguiente y anterior
        pagina2();
        //return Promise.resolve(response);
    } else {
        libros.style.display = "flex";//muestro el div
    }

}//funcion asincrona para mostrar os libros que se estan leyendo ahora

async function mostrarLeidos(opcion, condicion1) {

    let encontrados = [];
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1)
        + "&condicion2=" + inicio2, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    if (response.length > 0) {
        libros.style.display = "none";//oculto el div
        registros2 = response[0][8];

        for (let i = 0; i < response.length; i++) {
            encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5],
            response[i][6], response[i][7], response[i][8], response[i][9]];
            array.push(encontrados);
            mostrar2(i);
        }
        pagina2();
    } else {
        libros.style.display = "flex";//muestro el div
    }

}//funcion asincrona para mostrar los libros leidos

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

}//funcion asincrona que consigue la sinopsis del libro

async function rankingHOB(opcion) {
    let encontrados = [];
    let tope = 0;

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    for (let i = 0; i < response.length; i++) {
        encontrados = [response[i][0], response[i][1], response[i][2], response[i][3], response[i][4], response[i][5], response[i][6]];
        array.push(encontrados);
        //error al mostrarlos
        mostrar3(i);

        //comprobador de que solo muestre los 10 primeros
        tope++;
        if (tope >= 20) {
            //si van 10 sale del for
            break;
        }
    }

    return Promise.resolve(response);
}//funcion asincrona que devuelve el top 10 de las valoraciones de los usuarios

async function registro(opcion, condicion1) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
    response = await response.json();

    registrosComentarios = response[0];
}//funcion asincrona para saber cuantos registros a dado la consultar (Comentarios)

async function comentariosISBN(opcion, condicion1) {//condicion1 es el ISBN

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) + "&condicion2=" + inicioComentarios, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
    response = await response.json();

    for (let i = 0; i < response.length; i++) {
        arrayComentarios.push([response[i][0], response[i][1], response[i][2], response[i][3]], response[i][4]);
    }
    if (arrayComentarios.length > 0 && response[0][4] == 1) {
        registrosComentarios = response[0][4];
        nombreComentario.textContent = arrayComentarios[0][0];
        fotoComentario.setAttribute("src", arrayComentarios[0][3]);
        fotoComentario.style.marginTop = "15px";
        fotoComentario.style.borderRadius = "15%";
        fotoComentario.style.width = "50%";
        fotoComentario.style.margin = "0 auto";
        notaComentario.textContent = arrayComentarios[0][1] + " ★";
        coment.textContent = arrayComentarios[0][2];
        pagina2();//llamo a la funcion de paginaciçon para que muestre la cantidad de comentarios que se encontro y cuantos muestra
        resultadosComentarios.style.display = "flex";
    } else {
        registrosComentarios = 0;
        nombreComentario.textContent = "";
        fotoComentario.setAttribute("src", "");
        notaComentario.textContent = "-";
        coment.textContent = "Lo siento no disponemos de comentarios para este libro";
    }
}//funcion asincrona que busca los comentarios

function cambio(cadena) {
    if (cadena === 'undefined') return "Sin Especificar";

    if (typeof (cadena) == "string") {
        let cad = cadena;

        while (cad.includes(" ")) {
            cad = cad.replace(" ", "_");
        }
        return cad;
    }
    if (typeof (cadena) == "object") {
        let cad = "";
        for (let i = 0; i < cadena.length; i++) {
            cad += "," + cadena[i];
        }//for para recorre el array
        while (cad.includes(" ")) {
            cad = cad.replace(" ", "_");
        }
        return cad;
    }

}//funcion normal para cambiar los espacios por _

function iconitos() {
    //cambio el texto e icono de los botones
    op.textContent = "Estado actual";
    op.style.fontWeight = "bold";
    let icono = document.createElement("i");
    let p = document.createElement("p");
    p.textContent = " Pendiente";
    p.style.display = "inline-flex";
    p.style.paddingLeft = "5px";
    icono.classList.add("bi", "bi-book-half");
    icono.appendChild(p);
    actual.innerHTML = "";
    actual.appendChild(icono);
    actual.style.padding = "10px";
    actual.style.height = "50px";

    let iconoAbandono = document.createElement("i");
    let p2 = document.createElement("p");
    p2.textContent = " Terminado";
    p2.style.display = "inline-flex";
    p2.style.paddingLeft = "5px";
    iconoAbandono.classList.add("bi", "bi-journal-bookmark-fill");
    iconoAbandono.appendChild(p2);
    anterior.innerHTML = "";
    anterior.appendChild(iconoAbandono);
    anterior.style.padding = "10px";
    anterior.style.height = "50px";

    btnAddComentario.style.padding = "10px";
    btnAddComentario.style.height = "50px";
}//funcion para cambiar el texto e iconos de los botones de la tarjeta

function mostrar(i) {
    comentUsuario.style.display = "none";//oculto l textarea para insertar comentarios
    //oculto la parte de los comentarios
    let tit = document.createElement("h6");//elemento para indicar el titulo del libro

    let pos = array[i][1].search(/\(/);
    resultadosComentarios.style.display = "none";
    //poner por si es negativo
    if (pos < 0) {
        pos = array[i][1].length;
    }
    tit.classList.add("pe-3", "ps-2");

    cadena = array[i][1].substring(0, pos);
    tit.textContent = cadena;
    tit.style.fontWeight = "bold";
    tit.style.marginTop = "5px";
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

    boton.appendChild(foto);
    libro.appendChild(boton);
    libro.appendChild(tit);
    libro.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-3", "text-center", "mt-4");
    libro.style.display = "inline-block";

    resultados.appendChild(libro);
    resultados.style = "display: flex ; flex-wrap:wrap";
    resultados.style.marginBottom = "80px";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    btn.addEventListener("click", () => {
        addComentarios.style.display = "none";//oculto los comentarios
        aux = i;
        resultadosComentarios.style.display = "none";
        arrayComentarios = [];

        iconitos();

        //muestro los datos del libro elegido
        let img = array[i][4].replace("S", "M");
        foto.setAttribute("src", img);
        portada.setAttribute("srcset", img);
        portada.style.width = "75%";
        portada.style.height = "auto";
        portada.style.borderRadius = "15%";

        cadena = array[i][1];
        titulo2.textContent = cadena;
        titulo2.style.minWidth = "60%";

        if (typeof array[i][2] !== 'undefined') {
            autor2.textContent = array[i][2];
            autor2.style.minWidth = "60%";
        } else {
            autor2.textContent = "Sin especificar";
            autor2.style.minWidth = "60%";
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

        editorial.textContent = array[i][6];
        sinopsis.textContent = array[i][5];
        sinopsis.style.width = "90%";

        tarjeta.style.display = "block";//hago visible la tarjeta del libro
        //pongo al usuario al principio de la pagina
        window.scroll(0, 0);

    })//tarjeta
}//funcion para mostrar resultados (Busueda)

function mostrar2(i) {
    comentUsuario.style.display = "none";//oculto l textarea para insertar comentarios
    resultadosComentarios.style.display = "none";
    let tit = document.createElement("h6");//elemento para indicar el titulo del libro
    tit.textContent = array[i][2];
    tit.style.fontWeight = "bold";
    tit.style.marginTop = "5px";
    tit.style.size = "15px";
    tit.style.textAlign = "center";
    tit.style.margin = "0 auto";
    tit.style.width = "150px";

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    libro.classList.add("col-6", "col-sm-4", "col-lg-3", "text-center", "mt-4");

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

    boton.appendChild(foto);
    libro.appendChild(boton);
    libro.appendChild(tit);
    libro.style.display = "inline-block";

    resultados.appendChild(libro);
    resultados.style = "display: flex ; flex-wrap:wrap";
    resultados.style.marginBottom = "80px";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    btn.addEventListener("click", () => {
        //recorro los elementos estrellas para ponerlas en gris
        for (let j = 0; j < estrellas.length; j++) {
            if (estrellas[j].value == array[i][7]) {
                estrellas[j].checked = true;
            }
        }//for que recorre las estrellas


        addComentarios.style.display = "none";//oculto los comentarios
        resultadosComentarios.style.display = "none";
        arrayComentarios = [];

        editorial.textContent = array[i][9];

        //botones
        let op = document.getElementById("op");//titulo botones
        let actual = document.getElementById("actual");//btn izquierda
        let anterior = document.getElementById("anterior");//btn derecha


        aux = i;
        sinopsis.style.width = "90%";
        sinopsisLibro(array[i][0]).then(() => {
            //muestro los datos del libro elegido
            let img = array[i][5].replace("S", "M");
            foto.setAttribute("src", img);
            portada.setAttribute("srcset", img);
            portada.style.width = "75%";
            portada.style.height = "auto";
            portada.style.borderRadius = "15%";
            titulo2.textContent = array[i][2];
            titulo2.style.minWidth = "60%";
            autor2.textContent = array[i][3];
            autor2.style.minWidth = "60%";
            if (array[i][4] >= 1) {
                paginas.textContent = array[i][4] + " páginas";
            } else {
                paginas.textContent = "Sin especificar";
            }

            paginas.style.minWidth = "60%";

            //cambio el texto e icono de los botones
            op.textContent = "Estado actual";
            op.style.fontWeight = "bold";
            let icono = document.createElement("i");
            let p = document.createElement("p");
            p.textContent = "Terminado";
            p.style.display = "inline-flex";
            p.style.paddingLeft = "5px";
            icono.classList.add("bi", "bi-journal-bookmark-fill");
            icono.appendChild(p);

            actual.innerHTML = "";
            actual.value = "Terminado";
            actual.appendChild(icono);
            actual.style.padding = "10px";
            actual.style.height = "50px";

            let iconoAbandono = document.createElement("i");
            let p2 = document.createElement("p");
            p2.textContent = "Abandonado";
            p2.style.display = "inline-flex";
            p2.style.paddingLeft = "5px";
            iconoAbandono.classList.add("bi", "bi-x-octagon-fill");
            iconoAbandono.appendChild(p2);

            anterior.innerHTML = "";
            anterior.appendChild(iconoAbandono);
            anterior.value = "Abandonado";
            anterior.style.padding = "10px";
            anterior.style.height = "50px";

            sinopsis.textContent = cad;

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
}//funcion mostrar leyendo y leidos

function mostrar3(i) {

    comentUsuario.style.display = "none";//oculto l textarea para insertar comentarios
    resultadosComentarios.style.display = "none";
    let tit = document.createElement("h6");//elemento para indicar el titulo del libro
    tit.textContent = array[i][1];
    tit.style.fontWeight = "bold";
    tit.style.margin = "0 auto";
    tit.style.size = "15px";
    tit.style.textAlign = "center";
    tit.style.width = "120px";
    
    let estrellas =document.createElement("div");
    let valoracionMedia=document.createElement("p");
    //estrellas.textContent=array[i][6].slice(0,4)+"★";
    let stars="";
    let valor=1;
    
    let relleno=0;
    while(valor<=5){
        if(array[i][6]<valor){
          relleno=1;  
          /*let numeroAux=array[i][6]/10;
            if(numeroAux>0){
                relleno=3;
            }*/
        }else{
            relleno=2;
            
        }
        
        
        switch(relleno){
            case 1:
                stars+="✩";
                break;
            case 2:
                stars+="★";
                break;
            case 3:
                stars+="✬";
                break;
        }
        valor++;
    }
    
    valoracionMedia.textContent=stars;
    
    estrellas.classList.add("row");
    estrellas.style.margin = "0 auto";
    estrellas.style.size = "15px";
    estrellas.style.textAlign = "center";
    estrellas.appendChild(valoracionMedia);

    let libro = document.createElement("div");
    libro.id = "libro" + i;
    libro.style.height = "300px";
    libro.classList.add("col-6", "col-sm-4", "col-md-3", "col-lg-3", "text-center", "mt-4");

    let posicion = document.createElement("h1");//elemento para indicar la posicion en el ranking
    posicion.textContent = (i + 1);
    posicion.style.fontWeight = "bold";
    posicion.style.display = "fixed";
    posicion.style.left = "17px";
    posicion.style.top = "35px";

    let boton = document.createElement("button");
    boton.type = "button";
    boton.style.backgroundColor = "rgb(152, 226, 202)";
    boton.style.height = "160px";
    boton.style.margin = "0 auto";
    boton.id = "libro" + i;

    let foto = document.createElement("img");
    foto.style.width = "80px";
    foto.style.margin = "15px";
    let img = array[i][4].replace("S", "M");

    if (img != "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg") { //cuando no sea la portada
        foto.style.height = "122px";
    }//en algunos libros la portada es mas "alta" y asi me aseguro que se ajuste mejor al boton

    foto.setAttribute("src", img);
    foto.alt = "Portada";
    foto.title = array[i][1];

    //libro.appendChild(foto);
    boton.appendChild(foto);
    libro.appendChild(posicion);
    libro.appendChild(boton);
    libro.appendChild(tit);
    libro.appendChild(estrellas);
    //libro.style.marginTop="50px";
    libro.style.display = "inline-block";
    resultados.appendChild(libro);

    //resultados.style = "display: flex ; flex-wrap:wrap; margin-top: 20px";
    resultados.classList.add("mt-4");
    resultados.style.marginBottom = "120px";

    op.textContent = "Estado actual";
    op.style.fontWeight = "bold";
    actual.value = "Leer";
    anterior.value = "Leido";

    let btn = document.getElementById("libro" + i);
    let tarjeta = document.getElementById("tarjeta");

    btn.addEventListener("click", () => {
        addComentarios.style.display = "none";//oculto los comentarios
        iconitos();
        resultadosComentarios.style.display = "none";
        arrayComentarios = [];

        editorial.textContent = array[i][5];

        //recorro los elementos estrellas para saber cual es la nota que le dio
        for (let j = 0; j < estrellas.length; j++) {
            if (estrellas[j].value == array[i][5].charAt(0)) {
                estrellas[j].checked = true;
            }
        }//for que recorre las estrellas


        //muestro los datos del libro elegido
        let img = array[i][4].replace("S", "M");
        foto.setAttribute("src", img);
        portada.setAttribute("srcset", img);
        portada.style.width = "90%";
        portada.style.height = "auto";
        portada.style.borderRadius = "15%";
        titulo2.textContent = array[i][1];
        titulo2.style.minWidth = "60%";

        autor2.textContent = array[i][2];
        autor2.style.minWidth = "60%";

        if (array[i][3] >= 1) {
            paginas.textContent = array[i][3] + " páginas";
        } else {
            paginas.textContent = "Sin especificar";
        }

        paginas.style.minWidth = "60%";

        sinopsisLibro(array[i][0]).then(() => {
            sinopsis.textContent = cad;
            sinopsis.style.width = "90%";
            sinopsis.style.display = "inline";
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
}//mostrar ranking

function acortarTitulo(titulo) {
    let tituloAcortado = "";
    if (titulo.indexOf("[") > 0) {
        tituloAcortado = titulo.slice(0, titulo.indexOf("["));
    } else {
        if (titulo.indexOf("(") > 0) {
            tituloAcortado = titulo.slice(0, titulo.indexOf("("));
        } else {
            tituloAcortado = titulo;
        }
    }
    if (tituloAcortado.length > 50) {
        tituloAcortado = tituloAcortado.slice(0, 50) + "...";
    }
    return tituloAcortado;
}//funcion para reducir los titulos (busco [,( y sino lo dejo a 50 caracteres)

async function buscarall(condicion, condicion2, condicion3) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + encodeURIComponent(condicion) + "&isbn=" + encodeURIComponent(condicion2) + "&author=" + encodeURIComponent(condicion3));

    let texto = await response.json();
    array = [];
    let encontrados = [];
    let descripcion = "";

    response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + encodeURIComponent(condicion2) + "&format=json");
    let texto2 = await response.json();
    let cadena = "texto2.ISBN" + condicion2 + ".thumbnail_url";

    response = await fetch("https://openlibrary.org/isbn/" + encodeURIComponent(condicion2) + ".json");
    let texto3 = await response.json();
    descripcion = "";
    if (typeof texto3.description === 'undefined') {
        descripcion = "Sinopsis no disponible";
    } else {
        descripcion += texto3.description.value;
    }
    let editorial = texto3.publishers[0];

    if (texto.docs.length == 0) {
        validacion98.style.display = "flex";
        divCuriosidades.style.display = "none";
        resultados.style.display = "none";
    } else {
        for (let i = 0; i < texto.docs.length; i++) {
            let tituloAcortado = acortarTitulo(texto.docs[i].title);
            encontrados = [texto.docs[i].isbn[0], tituloAcortado, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
            eval(cadena), descripcion, editorial];
            array.push(encontrados);
            //mostrar(i);
            progreso.value += 5;
        }
    }

    carga();

    response = await response.array;
    return Promise.resolve(response);
}//funciones asincronas del buscador (TODOS LOS DATOS)

async function buscar2(condicion, condicion2) {
    let response = await fetch("https://openlibrary.org/search.json?title=" + encodeURIComponent(condicion) + "&author=" + encodeURIComponent(condicion2)
        + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";

    if (texto.docs.length == 0) {
        validacion98.style.display = "flex";
        divCuriosidades.style.display = "none";
        resultados.style.display = "none";
    } else {
        for (let i = 0; i < texto.docs.length; i++) {
            let encontrados = [];
            let editorial = "";
            descripcion = "";
            portada = "";
            let isbn = 0;
            try {
                if (typeof texto.docs[i].isbn[0] === "undefined") {
                    isbn = "0000000000000";
                } else {
                    isbn = texto.docs[i].isbn[0]
                }
            } catch {
                isbn = "0000000000000";
            }
            response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + isbn + "&format=json");

            let texto2 = await response.json();
            let prueba2 = texto2["ISBN" + isbn];

            try {
                if (prueba2["thumbnail_url"] == null || typeof prueba2["thumbnail_url"] === 'undefined') {
                    portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                } else {
                    portada = texto2["ISBN" + texto.docs[i].isbn[0]]["thumbnail_url"];
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

                editorial = texto3.publishers[0];
            } catch {
                descripcion = "Sinopsis no disponible";
            }

            let tituloAcortado = acortarTitulo(texto.docs[i].title);

            encontrados = [isbn, tituloAcortado, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
                portada, descripcion, editorial];
            array.push(encontrados);

            progreso.value += 5;
        }
    }

    carga();

    response = await response.array;
    return Promise.resolve(response);
}//buscador de titulo y autor

async function buscar3(condicion) {

    let response = await fetch("https://openlibrary.org/search.json?author=" + encodeURIComponent(condicion) + "&page=" + page + "&limit=" + limite);

    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";

    if (texto.docs.length == 0) {
        validacion98.style.display = "flex";
        divCuriosidades.style.display = "none";
        resultados.style.display = "none";
    } else {
        for (let i = 0; i < texto.docs.length; i++) {
            let encontrados = [];
            let editorial = "";
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
                editorial = texto3.publishers[0];
            } catch {
                descripcion = "Sinopsis no disponible";
            }

            let tituloAcortado = acortarTitulo(texto.docs[i].title);

            encontrados = [isbn, tituloAcortado, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
                portada, descripcion, editorial];
            array.push(encontrados);

            progreso.value += 5;
        }
    }
    carga();

    response = await response.array;
    return Promise.resolve(response);
}//Buscador con solo el author

async function buscar4(condicion) {

    let response = await fetch("https://openlibrary.org/search.json?title=" + encodeURIComponent(condicion) + "&page=" + page + "&limit=" + limite);
    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";

    if (texto.docs.length == 0) {
        validacion98.style.display = "flex";
        divCuriosidades.style.display = "none";
        resultados.style.display = "none";
    } else {
        for (let i = 0; i < texto.docs.length; i++) {
            let encontrados = [];
            let editorial = "";
            descripcion = "";
            portada = "";

            if (typeof texto.docs[i].isbn === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                isbn = "9788373196131";
            } else {
                isbn = texto.docs[i].isbn[0];
                response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + isbn + "&format=json");

                let texto2 = await response.json();
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
                editorial = texto3.publishers[0];
            } catch {
                descripcion = "Sinopsis no disponible";
            }

            let tituloAcortado = acortarTitulo(texto.docs[i].title);

            encontrados = [isbn, tituloAcortado, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
                portada, descripcion, editorial];
            array.push(encontrados);
            progreso.value += 5;
        }
    }
    carga();

    response = await response.array;
    return Promise.resolve(response);
}//buscador con solo el titulo

async function buscar5(condicion) {

    let response = await fetch("https://openlibrary.org/search.json?isbn=" + encodeURIComponent(condicion) + "&page=" + page + "&limit=" + limite);
    let texto = await response.json();

    //calculo el numero de paginas
    resultadosBusqueda = texto.numFound;
    paginasTotales = Math.ceil(resultadosBusqueda / limite);

    array = [];
    let descripcion = "";
    let portada = "";
    let isbn = "";

    if (texto.docs.length == 0) {
        validacion98.style.display = "flex";
        divCuriosidades.style.display = "none";
        resultados.style.display = "none";
    } else {
        for (let i = 0; i < texto.docs.length; i++) {
            let encontrados = [];
            let editorial = "";
            descripcion = "";
            portada = "";

            if (typeof texto.docs[i].isbn === 'undefined') {
                portada = "https://www.pronorte.es/_files/product/4994/image/imagen-no-disponible.jpg";
                isbn = 9788373196131;
            } else {
                isbn = texto.docs[i].isbn[0];
                response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN" + texto.docs[i].isbn[0] + "&format=json");

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
                editorial = texto3.publishers[0];
            } catch {
                descripcion = "Sinopsis no disponible";
            }

            let tituloAcortado = acortarTitulo(texto.docs[i].title);
            encontrados = [isbn, tituloAcortado, texto.docs[i].author_name, texto.docs[i].number_of_pages_median,
                portada, descripcion, editorial];
            array.push(encontrados);

            progreso.value += 5;
        }
    }
    carga();

    response = await response.array;
    return Promise.resolve(response);
}//buscador con solo el isbn

function carga() {

    for (let i = 0; i < array.length; i++) {
        mostrar(i);
        if (i == (array.length - 1)) {
            divCuriosidades.style.display = "none";
            //footer.style.display = "block";
        }
    }

}//funcion para ocultar el divCusiosidades al terminar la carga

function buscador() {
    validacion99.style.display = "none";
    validacion98.style.display = "none";

    resultados.innerHTML = "";
    array = [];
    tarjeta.style.display = "none";
    resultados.innerHTML = "";

    if (titulo.value != "" && isbn.value != "" && autor.value != "") {
        buscarall(titulo.value, isbn.value, autor.value);
    } else {
        if (titulo.value == "" && autor.value == "" && isbn.value == "") {
            validacion99.style.display = "flex";
            divCuriosidades.style.display = "none";
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

    }
}//funcion que comprueba los campos introducidos y envia la peticion a la correspondiente

function pagina() {
    //creo el div para los botones de la paginacion
    let paginacion = document.createElement("div");
    paginacion.classList.add("row");

    //creo el div de previo
    let previo = document.createElement("div");
    previo.classList.add("col-4", "text-center");

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
    numPag.classList.add("col-4", "text-center");

    //creo el h1
    let np = document.createElement("h3");
    np.textContent = page + " de " + paginasTotales;
    numPag.appendChild(np);

    //div para siguientes
    let siguientes = document.createElement("div");
    siguientes.classList.add("col-4", "text-center")

    //creo el boton de siguiente
    let btnsiguiente = document.createElement("input");
    btnsiguiente.type = "button";
    btnsiguiente.id = "btnsiguiente";
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
        progreso.value = 0;
        divCuriosidades.style.display = "inline-flex";
        divCuriosidades.style.marginBottom = "100px";
        divCuriosidades.style.width = "95%";

        curiosidad();
        if (page > 1) {
            page--;
            buscador()
        } else {
            e.preventDefault();
        }
    });//btn anterior

    btnsiguiente.addEventListener("click", (e) => {
        progreso.value = 0;
        divCuriosidades.style.display = "inline-flex";
        divCuriosidades.style.marginBottom = "100px";
        divCuriosidades.style.width = "95%";

        curiosidad();
        if (page < paginasTotales) {
            page++;
            buscador()
        } else {
            e.preventDefault();
        }
    });//btn siguiente
}//funcion que crea los btn para la paginacion del buscador

async function pagina2() {

    await registro("resultados", isbnLibros);
    let punto = inicioComentarios + 1;
    if (camino == "comentario") {
        paginacionComentario.textContent = punto + " de " + registrosComentarios;
    }
    else {
        //creo el div para los botones de la paginacion
        let paginacion = document.createElement("div");
        paginacion.classList.add("row");
        paginacion.style.margin = "20px";

        //creo el div de previo
        let previo = document.createElement("div");
        previo.classList.add("col-4", "text-center");

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
        numPag.classList.add("col-4", "text-center");

        let np = document.createElement("h4");
        if (camino == "leyendo") {

            if (registros - limite < 0) {
                np.textContent = "1 al " + registros;
            } else {
                if (!registros <= turno + 1) {
                    //comprobar que no puede haber una 2 o 3 hoja
                    if (registros > turno + 20) {
                        if (turno == 0) {
                            np.textContent = "Del 1 al " + (turno + 20);
                        } else {
                            np.textContent = "Del " + turno + " al " + (turno + 20);
                        }

                    } else {
                        np.textContent = "Del " + turno + " al " + registros;
                    }
                } else {
                    np.textContent = "Del " + turno + " al " + limite;
                }
            }
        }//camino leyendo

        if (camino == "leido") {
            if (registros2 - limite < 0) {
                np.textContent = inicio2 + " al " + registros2;
            } else {
                if (!registros2 <= turno2 + 1) {
                    //comprobar que no puede haber una 2 o 3 hoja
                    if (registros2 > turno2 + 20) {
                        if (turno2 == 0) {
                            np.textContent = "Del 1 al " + (turno + 20);
                        } else {
                            np.textContent = "Del " + turno2 + " al " + (turno + 20);
                        }
                    } else {
                        np.textContent = "Del " + turno2 + " al " + registros2;
                    }
                } else {
                    np.textContent = "Del " + turno2 + " al " + limite;
                }
            }
        }

        //agrego un nuevo div para que muestre cuantos libros tiene en total
        let npTotal = document.createElement("h4");
        npTotal.style.fontWeight = "bold";
        if (registros2 == 0) {
            npTotal.textContent = "Tienes un total de " + registros + " de Libros";
        } else {
            npTotal.textContent = "Tienes un total de " + registros2 + " de Libros";
        }


        numPag.appendChild(np);

        //div para siguientes
        let siguientes = document.createElement("div");
        siguientes.classList.add("col-4", "text-center")

        //creo el boton de siguiente
        let btnsiguiente = document.createElement("input");
        btnsiguiente.type = "button";
        btnsiguiente.id = "btnSiguienteLeyendo";
        btnsiguiente.value = "Siguiente";
        btnsiguiente.classList.add("btn-sugerencia");
        btnsiguiente.style.margin = "0 auto";
        siguientes.appendChild(btnsiguiente);

        let paginacion2 = document.createElement("div");
        paginacion2.classList.add("row");
        paginacion2.style.marginBottom = "20px";
        paginacion2.style.marginTop = "10px";
        paginacion2.style.height = "auto";
        let totales = document.createElement("div");
        totales.classList.add("col-12", "text-center");
        totales.appendChild(npTotal);

        paginacion2.appendChild(totales);

        //agrego los div con los botones
        paginacion.appendChild(previo);//btn anteriores
        paginacion.appendChild(numPag);//numero de la pagina
        paginacion.appendChild(siguientes);//btn siguientes

        //agrego el div de los botones a resultados
        resultados.appendChild(paginacion);
        resultados.appendChild(paginacion2);

        btnprevio.addEventListener("click", (e) => {
            if (camino == "leyendo") {
                if (inicio >= 20) {
                    tarjeta.style.display = "none";
                    resultados.innerHTML = "";
                    limite -= 20;
                    inicio -= 20;
                    turno -= 20;
                    let nombre = cambio(sessionStorage.getItem("alias"));
                    array = [];
                    mostrarLeyendo("mostrarLeyendo", nombre);
                } else {
                    e.preventDefault();
                }
            }//camino leyendo
            if (camino == "leido") {
                if (inicio2 >= 20) {
                    tarjeta.style.display = "none";
                    resultados.innerHTML = "";
                    /*                 limite2 -= 20; */
                    inicio2 -= 20;
                    turno2 -= 20;
                    let nombre = cambio(sessionStorage.getItem("alias"));
                    array = [];
                    mostrarLeidos("mostrarLeidos", nombre);
                } else {
                    e.preventDefault();
                }
            }//camino leido
        });//btn anterior

        btnsiguiente.addEventListener("click", (e) => {
            if (camino == "leyendo") {
                if (inicio < registros && (inicio + 20) < registros) {
                    tarjeta.style.display = "none";
                    resultados.innerHTML = "";
                    inicio += 20;
                    turno += 20;
                    let nombre = cambio(sessionStorage.getItem("alias"));
                    array = [];
                    mostrarLeyendo("mostrarLeyendo", nombre);
                } else {
                    e.preventDefault();
                }
            }//camino leyendo

            if (camino == "leido") {
                if (inicio2 < registros2 && (inicio2 + 20) < registros2) {
                    tarjeta.style.display = "none";
                    resultados.innerHTML = "";
                    inicio2 += 20;
                    turno2 += 20;
                    let nombre = cambio(sessionStorage.getItem("alias"));
                    array = [];
                    mostrarLeidos("mostrarLeidos", nombre);
                } else {
                    e.preventDefault();
                }
            }//camino leido
        });//btn siguiente
    }

}//pagina 2 para leyendo y leidos

function navegador() {
    buscar.style.backgroundColor = " rgba(33, 37, 41, 0.55)";
    leyendo.style.backgroundColor = " rgba(33, 37, 41, 0.55)";
    leidos.style.backgroundColor = " rgba(33, 37, 41, 0.55)";
    ranking.style.backgroundColor = " rgba(33, 37, 41, 0.55)";
}//pongo todos los botones del nav al mismo color

function curiosidad() {
    let num = Math.floor(Math.random() * curiosidades.length);
    pCuriosidades.innerHTML = curiosidades[num];
}//funcion para sacar una curiosidad de forma aleatoria y sacarlo por pantalla

async function comentarioPrevio(opcion, condicion1, condicion2) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) + "&condicion2=" + encodeURIComponent(condicion2)
        , {
            method: "GET",
            headers: { "Content-type": "application/json" }
        });
    response = await response.json();
    criticaPrevia = response[0];
}//funcion que busca si ese usuario y libro tiene un comentario anterior

window.addEventListener("load", () => {
    let ubicacion = document.getElementById("ubicacion");
    let nombre = sessionStorage.getItem("alias");

    iconitos();
    divCuriosidades.style.display = "none";
    addComentarios.style.display = "none";

    //agregarComentarios.style.padding = "10px";
    agregarComentarios.style.height = "50px";
    verComentarios.style.padding = "10px";
    verComentarios.style.height = "50px";

    if (nombre != null) {
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    }

    //////enter
    //clickEvent parra agilizar las busquedas (al apretar enter iniciara la busqueda)
    document.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            btnBuscardor.dispatchEvent(clickEvent);
        }
    })

    /* console.log(root); */

    buscar.addEventListener("click", () => {
        tarjetaBuscador.style.display = "inline";//muestro el div del buscador
        libros.style.display = "none";//oculto el div
        /////////////////////////////////////////////////////////////////////////
        btnAddComentario.style.display = "inline";//oculto el boton extra de agregar comentario
        ubicacion.textContent = "Buscador";
        ubicacion.style.fontWeight = "bold";

        //cojo el div donde se mostraran los resultados

        resultados.innerHTML = "";
        array = [];

        navegador();//pongo todos los botones del nav al mismo color
        buscar.style.backgroundColor = "#7a7a7a";//cambio solo el activo

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    });

    btnBuscardor.addEventListener("click", () => {
        tarjetaBuscador.style.display = "inline";//muestro el div
        libros.style.display = "none";//oculto el div
        progreso.value = 0;
        divCuriosidades.style.display = "inline-flex";
        divCuriosidades.style.marginBottom = "100px";
        divCuriosidades.style.width = "95%";

        curiosidad();

        let op = document.getElementById("op");//titulo botones
        let actual = document.getElementById("actual");//btn izquierda
        let anterior = document.getElementById("anterior");//btn derecha

        op.style.display = "inline";
        actual.style.display = "inline";
        anterior.style.display = "inline";
        page = 1;
        buscador();
    });//btn que inicia la busqueda

    leyendo.addEventListener("click", () => {
        tarjetaBuscador.style.display = "none";//oculto el div del buscador
        btnAddComentario.style.display = "none";//oculto el boton extra de agregar comentario
        ubicacion.textContent = "Pendientes";
        ubicacion.style.fontWeight = "bold";
        libros.style.display = "none";//oculto el div

        navegador();//cambio  el fondo de los botones dle nav
        leyendo.style.backgroundColor = "#7a7a7a";

        camino = "leyendo";
        registros2 = 0;
        turno2 = 0;
        inicio2 = 0;

        resultados.innerHTML = "";
        array = [];
        let nombre = cambio(sessionStorage.getItem("alias"));

        mostrarLeyendo("mostrarLeyendo", nombre);

        for (let i = 0; i < array.length; i++) {
            mostrar(i);
        }

        op.style.display = "block";
        anterior.style.display = "block";
        actual.style.display = "inline";
        anterior.style.display = "inline";

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";

    });//boton leyendo

    leidos.addEventListener("click", () => {
        tarjetaBuscador.style.display = "none";//oculto el div del buscador
        libros.style.display = "none";//oculto el div de no tienes libros en esta seccion
        btnAddComentario.style.display = "none";//oculto el boton extra de agregar comentario

        ubicacion.textContent = "Leidos";
        ubicacion.style.fontWeight = "bold";

        navegador();//cambio  el fondo de los botones dle nav
        leidos.style.backgroundColor = "#7a7a7a";

        camino = "leido";
        registros = 0;
        turno = 0;
        inicio = 0;

        let op = document.getElementById("op");//titulo botones
        let actual = document.getElementById("actual");//btn izquierda
        let anterior = document.getElementById("anterior");//btn derecha

        resultados.innerHTML = "";
        array = [];
        mostrarLeidos("mostrarLeidos", cambio(sessionStorage.getItem("alias")));

        op.style.display = "none";
        actual.style.display = "none";
        anterior.style.display = "none";
        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";
    });//boton leidos

    ranking.addEventListener("click", () => {
        tarjetaBuscador.style.display = "none";//oculto el div del buscador
        libros.style.display = "none";//oculto el div de no tienes libros en eesta sección
        btnAddComentario.style.display = "none";//oculto el boton extra de agregar comentario
        ubicacion.textContent = "Top Libros";
        ubicacion.style.fontWeight = "bold";

        navegador();//cambio  el fondo de los botones dle nav
        ranking.style.backgroundColor = "#7a7a7a";

        resultados.innerHTML = "";
        array = [];

        rankingHOB("ranking");

        //oculto los div que no han sido seleccionados
        divbuscar.style.display = "block";
        divleyendo.style.display = "none";
        divleidos.style.display = "none";
        tarjeta.style.display = "none";

    });//boton ranking

    btnLeyendo.addEventListener("click", async () => {
        let textoComentario = "";
        if (comentUsuario.value != "") {
            textoComentario = cambio(comentUsuario.value);
        }

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
                    //falta meter el comentario si existiera
                    modificarLibro("modificarLibro", cambio(alias), array[aux][0], nota, textoComentario, cambio(array[aux][2]), cambio(array[aux][3]), cambio(array[aux][9]), array[aux][5], array[aux][4]);
                    comentUsuario.value = "";
                    array = [];
                    resultados.innerHTML = "";
                    tarjeta.style.display = "none";
                    await mostrarLeyendo("mostrarLeyendo", cambio(nombre)).then(() => { });
                    tarjeta.style.display = "none";//una vez registrado el libro oculto la tarjeta
                }
            }
        } else {
            let alias = sessionStorage.getItem("alias");
            let editorial2 = editorial.textContent;
            let textoComentario = "";
            let autores = "";
            if (alias != null) {
                let tit = "";//variable para recoger el titulo sin espacios
                let aut = "";//variable para recoger el autor sin espacios
                alias = cambio(alias);
                editorial2 = cambio(editorial2);
                tit = cambio(array[aux][1]);
                autores = array[aux][2]
                aut = cambio(autores);

                let pag = 0;
                if (typeof array[aux][3] === "undefined") {
                    pag = 0;
                } else {
                    pag = array[aux][3];
                }
                let img = array[aux][4].replace("S", "M");
                nota = 0;
                if (comentUsuario.value != "") {
                    textoComentario = cambio(comentUsuario.value);
                }

                agregar("agregarleido", array[aux][0], alias, tit, aut, pag, img, "NO", nota, editorial2);
                tarjeta.style.display = "none";//una vez registro el cambio oculto la tarjeta
                comentUsuario.value = "";
            }

        }
    })//leyendo, boton de libro actual

    btnLeido.addEventListener("click", () => {
        let textoComentario = "";
        if (comentUsuario.value != "") {
            textoComentario = cambio(comentUsuario.value);
        }

        if (btnLeido.value == "Abandonado") {
            if (sessionStorage.getItem("alias") != null) {
                eliminarLibro("eliminarLibro", sessionStorage.getItem("alias"), array[aux][0]);
                array = [];
                resultados.innerHTML = "";
                tarjeta.style.display = "none";
                mostrarLeyendo("mostrarLeyendo", cambio(nombre));
                tarjeta.style.display = "none";//oculto la tarjeta tras el cambio de registro
            }
        } else {
            let validacion = document.getElementById("validacion");
            let alias = sessionStorage.getItem("alias");
            let editorial2 = editorial.textContent;
            if (alias != null) {
                tit = cambio(array[aux][1]);
                editorial2 = cambio(editorial2);
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
                        agregar("agregarleido", array[aux][0], cambio(alias), tit, aut, pag, img, "SI", nota, editorial2, textoComentario);
                        //mostrarLeyendo("mostrarLeyendo", cambio(nombre));
                        tarjeta.style.display = "none";//oculto la tarjeta tras el cambio de registro
                    }
                }
            }
        }
        comentUsuario.value = "";
    })//leido boton para agregar a tu perfil

    btnAddComentario.addEventListener("click", () => {

        btnLeido.value = "Terminado";
        let textoComentario = "";
        if (comentUsuario.value != "") {
            textoComentario = cambio(comentUsuario.value);
        }

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
                modificarLibro("modificarLibro", cambio(alias), array[aux][0], nota, textoComentario, cambio(array[aux][1]), cambio(array[aux][2]), cambio(array[aux][6]), array[aux][4], array[aux][3]);
            }
        }
        tarjeta.style.display = "none";//oculto la tarjeta tras el cambio de registro
    })//si seleccionas este camino hace lo mismo que en el camino del btnLeido

    verComentarios.addEventListener("click", () => {
        addComentarios.style.display = "none";
        arrayComentarios = [];
        nombreComentario.textContent = "";
        fotoComentario.setAttribute("src", "");
        fotoComentario.style.marginTop = "15px";
        fotoComentario.style.borderRadius = "15%";
        fotoComentario.style.width = "50%";
        fotoComentario.style.margin = "0 auto";
        notaComentario.textContent = "";
        coment.textContent = "";
        //muestro la parte del div de los comentarios donde aparecen estos
        resultadosComentarios.style.display = "flex";
        //aux es el elemento del array donde esta indicado el libro seleccionado
        camino = "comentario";//establezco la var a camino para poder diferenciarlo de lso btn anteriores

        isbnLibros = array[aux][0];
        //llamo a la funcion asincrona
        comentariosISBN("comentario", array[aux][0]);

        console.log(arrayComentarios);
    });// evento click del btn ver comentaios

    agregarComentarios.addEventListener("click", () => {
        btnAddComentario.style.display = "inline";//hago visible el boton extra de agregar comentario
        if (sessionStorage.getItem("alias") != null) {
            comentarioPrevio("comentarioPrevio", array[aux][0], cambio(sessionStorage.getItem("alias"))).then(() => {
                if (criticaPrevia == "No tienes comentario previo") {
                    comentUsuario.placeholder = criticaPrevia;
                } else {
                    comentUsuario.placeholder = "Tú comentario anterior fue: " + criticaPrevia;
                }

                comentUsuario.style.display = "inline";//hago visible el textarea para insertar comentarios
                addComentarios.style.display = "flex";
                resultadosComentarios.style.display = "none";
            });

        }
    })//btn agregar comentarios y a leidos

    anteriorComentario.addEventListener("click", async (ant) => {
        if (inicioComentarios > 0) {
            inicioComentarios--;
            arrayComentarios = [];
            comentariosISBN("comentario", isbnLibros).then(() => {
                console.log(inicioComentarios);
            });
        }//comprobacion de si existen comentarios previos
        else {
            ant.preventDefault();
        }
    });//btnanterior comentario (<=)

    siguienteComentario.addEventListener("click", async (sig) => {
        let topeRegistro = registrosComentarios - 1;
        if (inicioComentarios < topeRegistro) {
            inicioComentarios++;
            arrayComentarios = [];
            await comentariosISBN("comentario", isbnLibros).then(() => {
                console.log(inicioComentarios);
            });
        } //comprobacion de si existen comentarios previos
        else {
            sig.preventDefault();
        }
    }); //camino comentario btn siguiente (=>)

    if (ubicacion.textContent == "Buscador") {
        buscar.dispatchEvent(clickEvent);
    }
})