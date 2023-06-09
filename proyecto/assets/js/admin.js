let arrayTiendas = [];//array de las tiendas (codigo de tiendas)
let arrayrestore = [];//array para guardar los diferentes restores
let arrayAlias = [];//array para los alias

//div principales
let bbdd = document.getElementById("bbdd");//parte de la bases de datos
let gestion = document.getElementById("gestion");//gestion de tablas

//div de apoyo a las superiores
let restore = document.getElementById("restore");//peticion del fichero para el restore
let tiendas = document.getElementById("tiendas");//peticion de datos para las tiendas
let usuarios = document.getElementById("usuarios");//peticion del alias para bannear, perdonar, borrar usuarios
let seleccion = document.getElementById("seleccion");//div con las opciones de las tablas para insertar registros
let libros = document.getElementById("agregarlibros");//div con los campos para agregar libros
let addtiendas = document.getElementById("addTiendas");//div con los campos para agregar tiendas
let accion = document.getElementById("accion");//div con el mensaje de accion realizada
let accion2 = document.getElementById("accion2");//div con la accion de BBDD

//botoncitos
//let btnreiniciar = document.getElementById("reiniciar");//Administracion reiniciar bbdd
let btnCopia = document.getElementById("copiar");//Administracion copia de seguridad BBDD
let btnRestaurar = document.getElementById("restaurar");//Administracion restaurar bbdd desde fichero
let cerrarRestore = document.getElementById("cerrarRestore");//btn para ocultar div
let btnActualizar = document.getElementById("actualizar");//Administracion actualizar para eliminar datos de usuarios eliminados
let btnTiendas = document.getElementById("tiendas2");//Gestión remite al div tiendas
let btnBaneos = document.getElementById("banneos");//Gestión remite al div usuarios
let btnAñadir = document.getElementById("agregar");//Gestión remite al div delibros
let btnEnviar = document.getElementById("aenviarfic");//boton submit del div restore
let btnAgregarTienda = document.getElementById("agregarTienda");//boton para mostrar el div de agregar tiendas
let btnAddTienda = document.getElementById("agregarTienda2");//boton para agregar tienda
let btnModificarTienda = document.getElementById("modificartienda");//btn modificar del div tienda
let btnBorrarTienda = document.getElementById("borrartienda");//btn borrar dle div tienda
let btnBuscarTienda = document.getElementById("buscartienda");//btn buscar tienda del div tiendas
let btnBanear = document.getElementById("banear");//btn banear del div de usuarios
let btnPerdonar = document.getElementById("perdonar");//btn perdonar del div usuarios
let btnBorrarUsu = document.getElementById("borrarusuario");//btn borrar usuario del div usuarios
let btnBuscarUsu = document.getElementById("buscarusuario");//btn buscar usuario del div usuarios
let btnLibros = document.getElementById("libros");//btn libros del div seleccion de tabla, que remitira al div libros
let btnJuegos = document.getElementById("juegos");//btn juegos del div seleccion de tabla, que remitira al div juegos
let btnBuscarLibro = document.getElementById("buscarlibro");//btn buscar libro del div de libros
let btnModificarLibro = document.getElementById("modificarLibro");//btn modificar libro del div de libros
let btnAgregarLibro = document.getElementById("agregarlibro");//btn agregar libro del div libros
let btnBorrarLibro = document.getElementById("borrarlibro");//btn borrar libro del div libros

let inicioAgregarTienda = document.getElementById("inicioAgregarTienda");
let inicioModificarTienda = document.getElementById("inicioModificarTienda");
let inicioBorrarTienda = document.getElementById("inicioBorrarTienda");
let inicioBanearUsuario = document.getElementById("inicioBanearUsuario");
let inicioPerdonarUsuario = document.getElementById("inicioPerdonarUsuario");
let inicioEliminarUsuario = document.getElementById("inicioEliminarUsuario");
let inicioAgregarLibro = document.getElementById("inicioAgregarLibro");
let inicioModificarLibro = document.getElementById("inicioModificarLibro");
let inicioEliminarLibro = document.getElementById("inicioEliminarLibro");
let formularioTiendas = document.getElementById("formularioTiendas");
let formularioLibros = document.getElementById("tituloLibros");
let formularioUsuarios = document.getElementById("tituloUsuarios");

let cerrarDiv = document.getElementsByName("cerrarDiv");
let admin = document.getElementsByName("admin");

//centinela global
let id = false;//centinela para controlarque existe ese hobbie
let codinsertado = false;//centinela para control del codigo

//variables para recoger la informacion introducida por el usuario
let cod_libro = document.getElementById("alcodlibro");
let alias = document.getElementById("alalias");
let titulo = document.getElementById("altitulo");
let autor = document.getElementById("alautor");
let pag = document.getElementById("alpaginas");
let portada = document.getElementById("alportada");
let leido = document.getElementById("alleido");
let valoracion = document.getElementById("alvaloracion");
let editorial =document.getElementById("aleditorial");

//"capturo" los campos para la insercion o eliminacion de tiendas
let cod = document.getElementById("acodtienda");//input codigo tienda
let localidad = document.getElementById("alocalidad");//input localidad
let provincia = document.getElementById("aprovincia");//provincia
let nombre = document.getElementById("anombre");//input nombre
let direccion = document.getElementById("adireccion");//direccion
let telefono = document.getElementById("atelefono");//input teléfono
let cod_hob = document.getElementById("acodhobie");//input cod_Hobbie
let logo = document.getElementById("alogo");//input logo
let web = document.getElementById("aWeb");//input web
let cod2 = document.getElementById("acodtienda2");//campo donde puedes escribir el codigo

let clickEvent = new Event('click');//evento

//expresiones para tiendas
let expcod = /^[A-Z]{2}[0-9]{4}$/;//expresion regular para el codigo ej CU1989
let explocalidad = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;//expresionregular para la localidad
let exptelefono = /^[0-9 ]{9,12}$/i;//expresion regular para el telefono
let expdireccion = /^C\. [\w\sáéíóúÁÉÍÓÚ]+,\s?(?:\d{1,3}|S\/N|s\/n),\s?\d{5} [\w\sáéíóúÁÉÍÓÚ]+$/;//expresion regular para la direccion
let expcodhob = /^[0-9]{1,2}$/;//expresion regular para el hobbie
let explogo = /\w+.png$|\w+.jpg$|\w+.jpeg$/;//expresion regular para los logos (URL que sean png, jpg o jpeg)
let expWeb = /^www\.\w*\.[a-z]{2,3}$/;

//div con los errores
let validacion1 = document.getElementById("validacion1");//validacion codigo tienda
let validacion2 = document.getElementById("validacion2");//validacion nombre
let validacion3 = document.getElementById("validacion3");//validacion codigo hobbie
let validacion4 = document.getElementById("validacion4");//validacion telefono
let validacion5 = document.getElementById("validacion5");//validacion direccion
let validacion6 = document.getElementById("validacion6");//validacion Localidad
let validacion7 = document.getElementById("validacion7");//validacion logo
let validacion8 = document.getElementById("validacion8");//validacion web

let validaciont1 = document.getElementById("validaciont1");//validacion ISBN
let validaciont2 = document.getElementById("validaciont2");//validacion alias
let validaciont3 = document.getElementById("validaciont3");//validacion título
let validaciont4 = document.getElementById("validaciont4");//validacion autor
let validaciont5 = document.getElementById("validaciont5");//validacion páginas
let validaciont6 = document.getElementById("validaciont6");//validacion portada
let validaciont7 = document.getElementById("validaciont7");//validacion leido
let validaciont8 = document.getElementById("validaciont8");//validacion valoracion
let validaciont9 = document.getElementById("validaciont9");//validacion editorial

//evento propio
let eventoChange = new Event("click");

async function aliasarray() {
    let response = await fetch(root+"/php/comprobacionAlias.php", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();

    for (i = 0; i < response.length; i++) {
        arrayAlias[i]=response[i];
    }
    return Promise.resolve(response);
}

async function copia(opcion) {

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion));
}//funcion asincrona que devuelve datos del usuario con el datos y correo indicado

async function actualizar(opcion) {

    let response = await fetch( root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion));

}//funcion asincrona que devuelve datos del usuario con el datos y correo indicado

//agregar tienda
async function agregarTienda(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6,
    condicion7, condicion8, condicion9) {

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) +
        "&condicion2=" + encodeURIComponent(condicion2) + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4) + "&condicion5=" + encodeURIComponent(condicion5) +
        "&condicion6=" + encodeURIComponent(condicion6) + "&condicion7=" + encodeURIComponent(condicion7) + "&condicion8=" + encodeURIComponent(condicion8) + "&condicion9=" + encodeURIComponent(condicion9));

}

//modificar tienda indicada
async function modificarTienda(opcion, condicion1, condicion2, condicion3, condicion4,
    condicion5, condicion6, condicion7, condicion8, condicion9) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) +
        "&condicion2=" + encodeURIComponent(condicion2) + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4) + "&condicion5=" + encodeURIComponent(condicion5) +
        "&condicion6=" + encodeURIComponent(condicion6) + "&condicion7=" + encodeURIComponent(condicion7) + "&condicion8=" + encodeURIComponent(condicion8) + "&condicion9=" + encodeURIComponent(condicion9));

}

async function comprobarId(opcion, insertado) {
    id = false;//pongo el centinela a false siempre al inicio
    /* console.log("http://"+root+"/php/miniAPI.php?opcion=" + opcion); */
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    texto = await response.json();

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == insertado) {
            id = true;//si esta ese id de hobbie se pone a true
        }
    }//for
    //return Promise.resolve(response);
}//comprobacion de ID del hobbie

async function comprobarCod(opcion, insertado) {
    codinsertado = false;

    let response = await fetch( root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    texto = await response.json();

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == insertado) {
            codinsertado = true;//si esta ese id de hobbie se pone a true
        }
    }//for
}//comprobacion delcodigo

async function borrartTienda(opcion, condicion1) {
    /* console.log("http://"+root+"/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1); */
    let response = await fetch( root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1));
}//borrar tienda

async function buscartienda(opcion, condicion1) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//mostrar tienda

async function buscarUsuario(opcion, condicion1) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//funcion para buscar el usuario indicado

async function banear(opcion, condicion1, condicion2) {
    /* console.log("http://"+root+"/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 +
        "&condicion2=" + condicion2); */
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) +
        "&condicion2=" + encodeURIComponent(condicion2));
}//banear usuarios

async function perdon(opcion, condicion1) {
    /* console.log("http://"+root+"/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1); */
    let response = await fetch( root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1));
}//perdonar usuario

//eliminacion del usuario y posterior actualizacion de la BBDD
async function castigoFinal(opcion, condicion1) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1));
}//eliminacion del usuario y posterior actualizacion de la BBDD

//buscar un libro que ya este en la base de datos
async function buscarLibro(opcion, condicion1) {
    //console.log("http://"+root+"/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1);
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//buscar un libro

async function modificarLibros(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7, condicion8, condicion9) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) + "&condicion1=" + encodeURIComponent(condicion1) +
        "&condicion2=" + encodeURIComponent(condicion2) + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4) + "&condicion5=" + encodeURIComponent(condicion5) + "&condicion6=" + encodeURIComponent(condicion6) + "&condicion7=" + encodeURIComponent(condicion7) + "&condicion8=" + encodeURIComponent(condicion8) + "&condicion9=" + encodeURIComponent(condicion9));
}

//funcion para sacar los codigos de las tiendas
async function cod_tiendas(opcion) {
    let opciones = "";
    let cod = document.getElementById("acodtienda");

    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    let union = "";
    opciones = "<option>Tiendas</option>";
    //arrayTiendas
    for (let i = 0; i < response.length; i++) {
        arrayTiendas.push(response[i]);
        union = response[i][0] + " - " + response[i][1];
        opciones += "<option value='" + response[i][0] + "'>" + union + "</option>";
    }
    cod.innerHTML = opciones;

    return Promise.resolve(response);
}

async function backupRespore(opcion) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    //meto la informacion dentro del arrayRestore
    for (let i = 0; i < response.length; i++) {
        arrayrestore.push(response[i]);
    }
    /* return Promise.resolve(response); */
}//funcion para saber que copias de seguridad estan en el servidor

async function lanzarRestore(opcion, condicion1) {
    let response = await fetch(root + "/php/miniAPI.php?opcion=" + encodeURIComponent(opcion) +
        "&condicion1=" + encodeURIComponent(condicion1));
}

//funcion para agregar libros de forma manual (administrador)
function apiLibros(opcion) {
    let expcod = /^[0-9]{1,14}$/;
    let expautor =/[a-zñA-ZÑáéíóú]{2,}/;//expresion regular para el autor
    let exppagina = /[0-9]{1,3}/;//expresion regular para el numero de paginas
    let expportada = /^https:\/\/[\w.\/-]{1,}(?:jpg|png|jpeg)$/;//expresion regular para la portada
    let expvaloracion = /^[0-5]{1}$/;//expresion para las notas
    let centinela = true;//centinela para saber que se cumplen todas las condiciones

    if (expcod.test(cod_libro.value)) {
        cod_libro.style.border = "1px solid black";
        validaciont1.style.display="none";
    } else {
        centinela = false;
        cod_libro.style.border = "2px solid red";
        validaciont1.style.display="inline";
    }//else del cod_libro

    if (alias.value != "" && arrayAlias.includes(alias.value)) {
        alias.style.border = "1px solid black";
        validaciont2.style.display="none";
    } else {
        centinela = false;
        alias.style.border = "2px solid red";
        validaciont2.style.display="inline";
    }//else del alias
    
    if(titulo.value != ""){
        titulo.style.border="1px solid black";
        validaciont3.style.display="none";
    }else{
        centinela = false;
        titulo.style.border = "2px solid red";
        validaciont3.style.display="inline";
    }
    
    if(expautor.test(autor.value)){
        autor.style.border="1px solid black";
        validaciont4.style.display="none";
    }else{
        centinela = false;
        autor.style.border = "2px solid red";
        validaciont4.style.display="inline";
    }
    
    if(exppagina.test(pag.value)){
        pag.style.border="1px solid black";
        validaciont5.style.display="none";
    }else{
        centinela = false;
        pag.style.border = "2px solid red";
        validaciont5.style.display="inline";
    }
    
    if(expportada.test(portada.value)){
        portada.style.border="1px solid black";
        validaciont6.style.display="none";
    }else{
        centinela = false;
        portada.style.border = "2px solid red";
        validaciont6.style.display="inline";
    }
    
    if(leido.value=="SI" || leido.value=="NO"){
        leido.style.border="1px solid black";
        validaciont7.style.display="none";
    }else{
        centinela = false;
        leido.style.border = "2px solid red";
        validaciont7.style.display="inline";
    }
    
    if(expvaloracion.test(valoracion.value)){
        valoracion.style.boder ="1px solid black";
        validaciont8.style.display="none";
    }else{
        centinela = false;
        valoracion.style.border = "2px solid red";
        validaciont8.style.display="inline";
    }
    
    if(editorial.value!=""){
        editorial.style.border = "1px solid black";
        validaciont9.style.display="none";
    }else{
        centinela = false;
        editorial.style.border = "2px solid red";
        validaciont9.style.display="inline";
    }

    if (centinela) {
        modificarLibros(opcion, cod_libro.value, alias.value, titulo.value, autor.value, pag.value, portada.value, leido.value, valoracion.value, editorial.value).then(() => {
            libros.style.display = "none";//oculto los div
            bbdd.style.display="flex";
            gestion.style.display="flex";
        });
    }
}

//funcion para ocultar div
function cerrar() {
    restore.style.display = "none";//oculto los div
    tiendas.style.display = "none";//dejo visible el div
    usuarios.style.display = "none";//oculto los div
    seleccion.style.display = "none";//oculto los div
    libros.style.display = "none";//oculto los div
}

//funcion para poder pasar las cadenas a php
function cambio(cadena) {
    let cad = cadena;

    while (cad.includes(" ")) {
        cad = cad.replace(" ", "_");
    }
    return cad;
}

//funcion que limpia campos
function limpieza() {
    accion2.style.display="none";
    //tiendas
    cod2.value = "";
    nombre.value = "";
    localidad.value = "";
    direccion.value = "";
    telefono.value = "";
    cod_hob.value = "";
    logo.value = "";
    web.value = "";
    logo.style.border = "1px solid black";
    cod_hob.style.border = "1px solid black";
    telefono.style.border = "1px solid black";
    direccion.style.border = "1px solid black";
    nombre.style.border = "1px solid black";
    provincia.style.border = "1px solid black";
    localidad.style.border = "1px solid black";
    
    //usuarios
    let aliasUsu = document.getElementById("aalias");
    let emailUsu = document.getElementById("amail");
    let estadoUsu = document.getElementById("aestado");
    let motivoUsu = document.getElementById("amotivo");
    let nvecesUsu = document.getElementById("nveces");
    
    
    aliasUsu.value="";
    emailUsu.value="hob@hob.com";
    estadoUsu.value="Estado";
    motivoUsu.value="";
    motivoUsu.placeholder="";
    nvecesUsu.value="";
    aliasUsu.style.border = "1px solid black";
    motivoUsu.style.border = "1px solid black";
    
    //libros
    cod_libro.value="";
    alias.value="";
    titulo.value="";
    autor.value="";
    pag.value="";
    portada.value="";
    leido.value="";
    valoracion.value="";
    editorial.value="";
    cod_libro.style.border = "1px solid black";
    alias.style.border = "1px solid black";
    titulo.style.border = "1px solid black";
    autor.style.border = "1px solid black";
    pag.style.border = "1px solid black";
    portada.style.border = "1px solid black";
    leido.style.border = "1px solid black";
    valoracion.style.border = "1px solid black";
    
    
    validacion1.style.display = "none";
    validacion2.style.display = "none";
    validacion3.style.display = "none";
    validacion4.style.display = "none";
    validacion5.style.display = "none";
    validacion6.style.display = "none";
    validacion7.style.display = "none";
    validaciont1.style.display = "none";
    validaciont2.style.display = "none";
    validaciont3.style.display = "none";
    validaciont4.style.display = "none";
    validaciont5.style.display = "none";
    validaciont6.style.display = "none";
    validaciont7.style.display = "none";
    validaciont8.style.display = "none";
    validaciont9.style.display = "none";
    
    bbdd.style.display = "none";
    gestion.style.display = "none";

    restore.style.display = "none";//oculto los div
    tiendas.style.display = "none";//oculto los div
    usuarios.style.display = "none";//oculto los div
    seleccion.style.display = "none";//oculto los div
    libros.style.display = "none";//dejo visible el div
    cod2.style.display = "inline";
    cod.style.display = "none";
        
    //botones de tiendas    
    btnAgregarTienda.style.display = "none";
    btnBorrarTienda.style.display="none";
    btnModificarTienda.style.display="none";
    btnBuscarTienda.style.display="none";
    
    //botones de Libros
    btnBuscarLibro.style.display="none";
    btnModificarLibro.style.display="none";
    btnAgregarLibro.style.display="none";
    btnBorrarLibro.style.display="none";
    
    //botones de Usuarios
    btnBuscarUsu.style.display="none";
    btnPerdonar.style.display="none";
    btnBanear.style.display="none";
    btnBorrarUsu.style.display="none";
}

function limpiezaTienda(){
    cod2.value = "";
    nombre.value = "";
    localidad.value = "";
    direccion.value = "";
    telefono.value = "";
    cod_hob.value = "";
    logo.value = "";
    web.value = "";
}

window.addEventListener("load", () => {

//admin.style.display="block";
    aliasarray();//saco los alias de los usuarios en la bbdd
    accion2.style.display = "none";
    bbdd.style.display = "flex";//dejo visible el div
    gestion.style.display = "flex";//dejo visible el div

    restore.style.display = "none";//oculto los div
    tiendas.style.display = "none";//oculto div
    usuarios.style.display = "none";//oculto los div
    seleccion.style.display = "none";//oculto los div
    libros.style.display = "none";//oculto los div
    accion.style.display = "none";//oculto los div

    cod.style.display = "inline";//oculto los div
    cod2.style.display = "none";//oculto el campo de insercion de cod tienda

    let datos=new URLSearchParams(window.location.search);
    datos=decodeURIComponent(datos);
    if(datos!=""){
        let cadena=datos.slice(datos.search("=")+1);
        let array=cadena.split(",");
        sessionStorage.setItem('alias', array[0]);
        sessionStorage.setItem('fecha', array[1]);
        sessionStorage.setItem('localidad', array[2]);
        sessionStorage.setItem('mail', array[3]);
        sessionStorage.setItem('key', array[4]);
        sessionStorage.setItem('foto', array[5]);
        sessionStorage.setItem('estado', array[6]);
    }
    
    
    let perfil = sessionStorage.getItem("alias");

    //verificador de que SOLO pueda entrar en admin el Administrador
    if (perfil != "Administrador") {
        window.location.replace( root + "/index.html");
    }

    //ADMINISTRACION BBDD

    //btn copia de la base de datos
    btnCopia.addEventListener("click", () => {
        accion2.style.display = "none";
        accion.style.display = "none";
        copia("copiaSeguridad");
        accion2.style.display = "inline";
    });//btn copia de la base de datos

    //btn opcion restaurar, pone visible el div
    btnRestaurar.addEventListener("click", () => {
        accion2.style.display = "none";
        let restauracion = document.getElementById("Backup");
        let opciones = "<div class='row'>";
        bbdd.style.display = "none";
        gestion.style.display = "none";
        accion2.style.display = "none";
        accion.style.display = "none";
        restore.style.display = "flex";//dejo visible el div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "none";//oculto los div

        backupRespore("restauracion").then(() => {
            for (let i = 0; i < arrayrestore.length; i++) {
                    opciones += "<div class='col-5 text-end'><button type='button' id='restore" + i + "' value='" + arrayrestore[i] + "' class='restauracion'>" + arrayrestore[i].slice(0,arrayrestore[i].indexOf(".")).replace("copia","") + "</button></div>";
            }
            opciones += "</div>";
            restauracion.innerHTML += opciones;

            let btnrestauracion = document.getElementsByClassName("restauracion");

            for (let i = 0; i < btnrestauracion.length; i++) {
                btnrestauracion[i].addEventListener("click", () => {
                    lanzarRestore("restore", btnrestauracion[i].value);
                    cerrarRestore.dispatchEvent(clickEvent);
                    accion2.style.display = "inline";
                })
            }
        });

        restore.style.marginBottom = "100px";
    });//btn que muestra el div de la restauracion de la bbdd

    cerrarRestore.addEventListener("click", () => {
        let restauracion = document.getElementById("Backup");
        restauracion.innerHTML = "";
        arrayrestore = [];
        bbdd.style.display = "flex";
        gestion.style.display = "flex";
        accion2.style.display = "none";
        accion.style.display = "none";
        restore.style.display = "none";//dejo visible el div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "none";//oculto los div
    })//btn para cerrar el div con los restores

    //btn que actualiza las tablas para eliminar registros de usuarios eliminados
    btnActualizar.addEventListener("click", () => {
        accion2.style.display = "none";
        accion.style.display = "none";
        actualizar("actualizar");
        accion2.style.display = "inline";
    });//btn que actualiza las tablas para eliminar registros de usuarios eliminados

    //////////////////////////////GESTION DE DATOS

    //TIENDAS

    //agregar tiendas, cambio de div al de agregar tienda
    btnAgregarTienda.addEventListener("click", () => {
        //limpieza();
        accion2.style.display = "none";
        accion.style.display = "none";

        cod.style.display = "none";
        cod2.style.display = "flex";

        let centinela = true;//centinela para poder comprobar los campos

        //compruebo los datos
        //comprobacion del nombre insertado
        if (nombre.value == "") {
            nombre.style.border = "2px solid red";
            validacion2.style.display = "inline";
            centinela = false;
        } else {
            nombre.style.border = "1px solid black";
            validacion2.style.display = "none";
        }

        //comprobador telefono
        if (!exptelefono.test(telefono.value)) {
            telefono.style.border = "2px solid red";
            validacion4.style.display = "inline";
            centinela = false;
        } else {
            telefono.style.border = "1px solid black";
            validacion4.style.display = "none";
        }//comprobador del telefono

        //comprobacion de la direccion
        if (!expdireccion.test(direccion.value)) {
            direccion.style.border = "2px solid red";
            validacion5.style.display = "inline";
            centinela = false;
        } else {
            direccion.style.border = "1px solid black";
            validacion5.style.display = "none";
        }//comprobacion de la direccion

        //comprobacion de la localidad
        if (!explocalidad.test(localidad.value)) {
            localidad.style.border = "2px solid red";
            validacion6.style.display = "inline";
            centinela = false;
        } else {
            localidad.style.border = "1px solid black";
            validacion6.style.display = "none";
        }

        if (!explogo.test(logo.value)) {
            logo.style.border = "2px solid red";
            validacion7.style.display = "inline";
            centinela = false;
        } else {
            logo.style.border = "1px solid black";
            validacion7.style.display = "none";
        }//verificacion del logo

        if (expWeb.test(web.value) || web.value=="") {
            web.style.border = "1px solid black";
            validacion8.style.display = "none";
        } else {
            web.style.border = "2px solid red";
            validacion8.style.display = "inline";
            centinela = false;
        }//verificacion del web
        

        //recorro el arrayTiendas buscando el codigo nuevo, si esta el centinela cambia a false
        for (let j = 0; j < arrayTiendas.length; j++) {
            if (cod2.value == arrayTiendas[j][0] || !expcod.test(cod2.value)) {
                cod2.style.border = "2px solid RED";
                validacion1.style.display = "inline";
                centinela = false;
                break;
            } else {
                cod2.style.border = "1px solid black";
                validacion1.style.display = "none";
            }
        }

        //llamo a la funcion que comprueba la existencia del hobbie
        comprobarId("cod_hobbie", cod_hob.value).then(() => {
            //comprobacion del codigo del hobbie
            if (!expcodhob.test(cod_hob.value) || !id) {
                cod_hob.style.border = "2px solid red";
                validacion3.style.display = "inline";
                centinela = false;
            } else {
                cod_hob.style.border = "1px solid black";
                validacion3.style.display = "none";
                //si todo esta correcto lo mandamos al servidor para agregarlo
                if (centinela) {
                    console.log("Felicidades");
                    agregarTienda("agregartienda", cod2.value, cambio(nombre.value), cambio(telefono.value), cambio(direccion.value), cambio(localidad.value), provincia.value, cod_hob.value, logo.value, web.value);
                    //limpieza();
                    cod_tiendas("cod_tiendas");//funcion para sacar los codigos de las tiendas
                    accion.style.display = "inline";
                    limpiezaTienda();
                    
                } else {
                    console.log("Lastima, Continuar?");
                }//si todo esta correcto pasa al servidor
            }
        });
    });//cambio de div a agregar tienda

    //modificar tienda
    btnModificarTienda.addEventListener("click", () => {
        let id_tienda;
        accion2.style.display = "none";
        accion.style.display = "none";
        cod.style.display = "flex";
        cod2.style.display = "none";
        let correcto = true;//variable centinela agregar
        arrayTiendas = [];//la reinicializo
        cod_tiendas("cod_tiendas");//funcion para sacar los codigos de las tiendas

        id_tienda=cod.value;//guardo el codigo de la tienda par ala modificacion posterior
        comprobarCod("cod", cod.value).then(() => {
            if (nombre.value == "") {
                nombre.style.border = "2px solid red";
                validacion2.style.display = "inline";
                correcto = false;
            } else {
                nombre.style.border = "1px solid black";
                validacion2.style.display = "none";
            }//verificacion del nombre no sea vacio

            if (!exptelefono.test(telefono.value)) {
                telefono.style.border = "2px solid red";
                validacion4.style.display = "inline";
                correcto = false;
            } else {
                telefono.style.border = "1px solid black";
                validacion4.style.display = "none";
            }//comprobador del telefono

            if (!expdireccion.test(direccion.value)) {
                direccion.style.border = "2px solid red";
                validacion5.style.display = "inline";
                correcto = false;
            } else {
                direccion.style.border = "1px solid black";
                validacion5.style.display = "none";
            }//comprobacion de la direccion

            if (!explocalidad.test(localidad.value)) {
                localidad.style.border = "2px solid red";
                validacion6.style.display = "inline";
                correcto = false;
            } else {
                localidad.style.border = "1px solid black";
                validacion6.style.display = "none";
            }//verificacion de localidad

            if (!explogo.test(logo.value)) {
                logo.style.border = "2px solid red";
                validacion7.style.display = "inline";
                correcto = false;
            } else {
                logo.style.border = "1px solid black";
                validacion7.style.display = "none";
            }//verificacion del logo

            if (!expWeb.test(web.value) && web.value != "") {
                web.style.border = "2px solid red";
                validacion8.style.display = "inline";
                correcto = false;
            } else {
                web.style.border = "1px solid black";
                validacion8.style.display = "none";
            }//verificacion del web

            //llamo a la funcion que comprueba la existencia del hobbie
            comprobarId("cod_hobbie", cod_hob.value).then(() => {
                //comprobacion del codigo del hobbie
                if (!expcodhob.test(cod_hob.value) || !id) {
                    cod_hob.style.border = "2px solid red";
                    validacion3.style.display = "inline";
                    correcto = false;
                } else {
                    cod_hob.style.border = "1px solid black";
                    validacion3.style.display = "none";
                    //si todo esta correcto lo mandamos al servidor para agregarlo
                    if (correcto) {
                        console.log("Felicidades");
                        modificarTienda("modificartienda", id_tienda, cambio(nombre.value), cambio(telefono.value), cambio(direccion.value), localidad.value, provincia.value, cod_hob.value, logo.value, web.value);
                        accion.style.display = "inline";
                        limpiezaTienda();
                    } else {
                        console.log("Lastima, Continuar?");
                    }//si todo esta correcto pasa al servidor
                }
            });
            arrayTiendas = [];//la reinicializo
            cod_tiendas("cod_tiendas");//funcion para sacar los codigos de las tiendas
        })
    });//agregar tienda

    //btn borrar tienda
    btnBorrarTienda.addEventListener("click", async () => {

        accion2.style.display = "none";
        accion.style.display = "none";
        cod.style.display = "flex";
        cod2.style.display = "none";

        let expcod = /^[A-Z]{2}[0-9]{4}$/;//expresion regular para el codigo ej CU1989
        if (cod2.value == "") cod2.value = cod.value;
        //if (cod.value != cod2.value) cod.value = cod2.value;
        if (!expcod.test(cod.value) || !expcod.test(cod2.value)) {
            cod.style.border = "2px solid red";
            correcto = false;
        } else {
            cod.style.border = "1px solid black";

            await borrartTienda("borrartienda", cod2.value).then(() => {
                console.log("Completado");
                arrayTiendas = [];//la reinicializo
                cod_tiendas("cod_tiendas");//funcion para sacar los codigos de las tiendas
                accion.style.display = "inline";
                //limpieza();
                arrayTiendas = [];//la reinicializo
                cod_tiendas("cod_tiendas");//funcion para sacar los codigos de las tiendas
                limpiezaTienda();
                /*bbdd.style.display = "flex";
                gestion.style.display = "flex";

                tiendas.style.display = "none";//oculto los div*/
            });

        }//verificacion codigo

    });//btn borrar tienda

    //btn buscartienda , parte de que se le introduzca el codigo de la tienda
    btnBuscarTienda.addEventListener("click", (e) => {

        accion2.style.display = "none";
        accion.style.display = "none";
        cod.style.display = "flex";
        cod2.style.display = "none";


        if (cod2.value != "" && expcod.test(cod2.value)) {
            cod.value = cod2.value;
            cod2.style.display = "1px solid black";
            validacion1.style.display = "none";
        }
        if (cod2.value != "" && !expcod.test(cod2.value)) {
            cod2.style.display = "2px solid red";
            validacion1.style.display = "inline";
            e.preventDefault();
        }
        //limpieza();

        buscartienda("buscartienda", cod.value).then(data => {
            //muestro los resultados de la busqueda
            localidad.value = data[0][1];
            provincia.value = data[0][2];
            nombre.value = data[0][3];//4
            direccion.value = data[0][4];//5
            telefono.value = data[0][5];//6
            cod_hob.value = data[0][6];//7
            logo.value = data[0][7];//8
            web.value = data[0][8];//9
            //accion.style.display = "inline";
        });


    });//btn buscar tienda

    //USUARIOS

    btnBuscarUsu.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        let email = document.getElementById("amail");
        let estado = document.getElementById("aestado");
        let motivo = document.getElementById("amotivo");
        let nveces = document.getElementById("nveces");

        buscarUsuario("buscarusuario", alias.value).then(data => {
            if (data[0][0] == null) {
                motivo.placeholder = "Usuario no registrado";
                nveces.textContent = "-";
                estado.textContent = "Sin Registrar";
                //motivo.textContent="";
                btnBanear.style.display="none";
                btnPerdonar.style.display="none";
                btnBorrarUsu.style.display="none";
            } else {
                btnBanear.style.display="none";
                btnPerdonar.style.display="none";
                btnBorrarUsu.style.display="none";
                switch(formularioUsuarios.textContent){
                    case "Bannear Usuario":
                        let cadenaMotivo=data[0][3][0];
                        if(cadenaMotivo == undefined){
                            btnBanear.style.display="inline";
                            motivo.removeAttribute("readonly");
                        }
                        break;
                    case "Perdonar Usuario":
                        let cadenaEstado=data[0][1];
                        if(cadenaEstado=="Banneado"){
                            btnPerdonar.style.display="inline";
                            motivo.setAttribute("readonly",true);
                        }
                        
                        break;
                    case "Eliminar Usuario":
                        btnBorrarUsu.style.display="inline";
                        motivo.setAttribute("readonly",true);
                        break;
                }
                email.textContent = data[0][0];
                estado.textContent = data[0][1];
                nveces.textContent = data[0][2] + " veces";
                if (data[0][3] == "") {
                    motivo.placeholder = "No tiene castigo, !!TODAVIA¡¡";
                } else {
                    motivo.placeholder = data[0][3];
                }
            }
        });

    });//boton buscar dentro del div usuarios

    //btn para banear usuarios
    btnBanear.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        let motivo = document.getElementById("amotivo");
        let motivos = motivo.value;

        while (motivos.includes(" ")) {
            motivos = motivos.replace(" ", "_");
        }
        banear("banearusuario", alias.value, motivos);
        motivo.value = "";
    });//bannearusuarios

    //btn perdonar usuarios
    btnPerdonar.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        let motivo = document.getElementById("amotivo");
        perdon("perdonarusuario", alias.value);
        motivo.value="Este usuario a recibido tus bendiciones";
    })//btn del perdon

    btnBorrarUsu.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        let motivo = document.getElementById("amotivo");
        //ahora borramos y actualizamos tablas
        castigoFinal("eliminacion", alias.value);//eliminacion del usuario
        motivo.placeholder="Este usuario ha sido eliminado";
    })

    //btn que muestra el div para insertar registros en libros (opcion libros del div seleccion)
    btnLibros.addEventListener("click", () => {

        bbdd.style.display = "none";
        gestion.style.display = "none";

        restore.style.display = "none";//oculto los div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "flex";//dejo visible el div
    });//btn que muestra el div para insertar registros en libros

    //boton de busqueda de libros dentro de la bbdd
    btnBuscarLibro.addEventListener("click", () => {

        let label = document.getElementById("labelAlias");
        //div
        let divTitulo = document.getElementById("divTitulo");
        let divAutor = document.getElementById("divAutor");
        let divPag = document.getElementById("divPag");
        let divPortada = document.getElementById("divPortada");
        let divLeido = document.getElementById("divLeido");
        let divValoracion = document.getElementById("divValoracion");
        let divEditorial = document.getElementById("divEditorial");

        //expresion regular para admitir solo digitos
        let expcod = /^[0-9]{1,14}$/

        if (!expcod.test(cod_libro.value)) {
            cod_libro.style = "2px solid red";
        } else {
            cod_libro.style = "1px solid black";
            buscarLibro("buscarLibro", cod_libro.value).then(data => {
                //mostramos en los campos la informacion encontrada
                if (data != null) {
                    //primero lo pongo visible
                    label.value = "Alias";
                    divTitulo.style.display = "flex";
                    divAutor.style.display = "flex";
                    divPag.style.display = "flex";
                    divPortada.style.display = "flex";
                    divLeido.style.display = "flex";
                    divValoracion.style.display = "flex";
                    divEditorial.style.display = "flex";
                    //inserto los resultados
                    alias.value = data[1];
                    titulo.value = data[2];
                    autor.value = data[3];
                    pag.value = data[4];
                    portada.value = data[5];
                    leido.value = data[6];
                    valoracion.value = data[7];
                    editorial.value = data[8];
                } else {
                    //lo oculto
                    label.textContent = "Resultado";
                    divTitulo.style.display = "none";
                    divAutor.style.display = "none";
                    divPag.style.display = "none";
                    divPortada.style.display = "none";
                    divLeido.style.display = "none";
                    divValoracion.style.display = "none";
                    divEditorial.style.display = "none";
                    alias.value = "No existe ese Valor en la BBDD";
                }
            });//promesa
        }//else
    });//btn buscar libro

    //btn modificar libro
    btnModificarLibro.addEventListener("click", () => {
        apiLibros("modificarLibro");
    })//btn modificar libro

    //btn agregarlibro
    btnAgregarLibro.addEventListener("click", () => {
        apiLibros("agregarleido");
    });//btn agregarlibro

    btnBorrarLibro.addEventListener("click", () => {
        apiLibros("borrarLibro");
    })

    //los cerrarDiv
    for (let i = 0; i < cerrarDiv.length; i++) {
        cerrarDiv[i].addEventListener("click", () => {
            cerrar();
            bbdd.style.display = "flex";
            gestion.style.display = "flex";
        })
    }

    cod.addEventListener("change", () => {
        btnBuscarTienda.dispatchEvent(eventoChange);
    });//evento change que efectua lo mismo que el boton de buscar
    
    
    //boones EXTRAS de Tiendas
    inicioAgregarTienda.addEventListener("click", ()=> {
        limpieza();
        tiendas.style.display = "flex";//oculto los div
        
        cod2.style.display = "inline";
        cod.style.display = "none";
        
        btnAgregarTienda.style.display = "inline";
        formularioTiendas.textContent="Agregar Tienda";
    })
    
    inicioModificarTienda.addEventListener("click",()=>{
        limpieza();
        tiendas.style.display = "flex";//oculto los div
        //funcion para sacar los codigos de las tiendas
        cod_tiendas("cod_tiendas").then(()=>{
            cod.style.display = "inline";
            cod2.style.display = "none";
            btnModificarTienda.style.display="inline";  
            formularioTiendas.textContent="Modificar Tienda";
        })
    })
    
    inicioBorrarTienda.addEventListener("click",()=>{
        limpieza();
        tiendas.style.display = "flex";//oculto los div
        //funcion para sacar los codigos de las tiendas
        cod_tiendas("cod_tiendas").then(()=>{
            cod.style.display = "inline";
            cod2.style.display = "none";
            btnBorrarTienda.style.display="inline";  
            formularioTiendas.textContent="Borrar Tienda";
        })
    })
    
    //Botones EXTRAS de Libros
    inicioAgregarLibro.addEventListener("click",()=>{
        limpieza();
        libros.style.display = "flex";//dejo visible el div
        btnAgregarLibro.style.display="inline";
        btnBuscarLibro.style.display="inline";
        formularioLibros.textContent="Agregar Libro a un usuario";
    })
    
    inicioModificarLibro.addEventListener("click",()=>{
        limpieza();
        libros.style.display = "flex";//dejo visible el div
        btnModificarLibro.style.display="inline";
        btnBuscarLibro.style.display="inline";
        formularioLibros.textContent="Modificar Libro";
    })
    
    inicioEliminarLibro.addEventListener("click",()=>{
        limpieza();
        libros.style.display = "flex";//dejo visible el div
        btnBorrarLibro.style.display="inline";
        btnBuscarLibro.style.display="inline";
        formularioLibros.textContent="Eliminar Libro";
    })
    
    //botones EXTRA de Baneo
    inicioBanearUsuario.addEventListener("click",()=>{
        limpieza();
        formularioUsuarios.textContent="Bannear Usuario";
        usuarios.style.display = "flex";
        btnBuscarUsu.style.display="inline";
        //btnBanear.style.display="inline";
    })
    
    
    inicioPerdonarUsuario.addEventListener("click",()=>{
        limpieza();
        formularioUsuarios.textContent="Perdonar Usuario";
        usuarios.style.display = "flex";
        btnBuscarUsu.style.display="inline";
    })
    
    inicioEliminarUsuario.addEventListener("click",()=>{
        limpieza();
        formularioUsuarios.textContent="Eliminar Usuario";
        usuarios.style.display = "flex";
        btnBuscarUsu.style.display="inline";
        
    })
})





