//div principales
let bbdd = document.getElementById("bbdd");//parte de la bases de datos
let gestion = document.getElementById("gestion");//gestion de tablas

//div de apoyo a las superiores
let restore = document.getElementById("restore");//peticion del fichero para el restore
let tiendas = document.getElementById("tiendas");//peticion de datos para las tiendas
let usuarios = document.getElementById("usuarios");//peticion del alias para bannear, perdonar, borrar usuarios
let seleccion = document.getElementById("seleccion");//div con las opciones de las tablas para insertar registros
let libros = document.getElementById("agregarlibros");//div con los campos para agregar libros

//botoncitos
//let btnreiniciar = document.getElementById("reiniciar");//Administracion reiniciar bbdd
let btnCopia = document.getElementById("copiar");//Administracion copia de seguridad BBDD
let btnRestaurar = document.getElementById("restaurar");//Administracion restaurar bbdd desde fichero
let btnActualizar = document.getElementById("actualizar");//Administracion actualizar para eliminar datos de usuarios eliminados
let btnTiendas = document.getElementById("tiendas2");//Gestión remite al div tiendas
let btnBaneos = document.getElementById("banneos");//Gestión remite al div usuarios
let btnAñadir = document.getElementById("agregar");//Gestión remite al div seleccion
let btnEnviar = document.getElementById("aenviarfic");//boton submit del div restore
let btnAgregarTienda = document.getElementById("agregartienda");//btn agregar del div tienda
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

async function copia(opcion) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    /* response = await response.json();
    return Promise.resolve(response); */
}//funcion asincrona que devuelve datos del usuario con el datos y correo indicado

async function actualizar(opcion) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

}//funcion asincrona que devuelve datos del usuario con el datos y correo indicado

async function agregarTienda(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 +
        "&condicion2=" + condicion2 + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5 +
        "&condicion6=" + condicion6 + "&condicion7=" + condicion7, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

}

async function comprobarId(opcion, insertado) {
    id = false;//pongo el centinela a false siempre al inicio
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion, {
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

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion, {
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
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}//borrar tienda

async function buscartienda(opcion, condicion1) {
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//mostrar tienda

async function buscarUsuario(opcion, condicion1) {
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}

async function banear(opcion, condicion1, condicion2) {
    /* console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion+"&condicion1="+condicion1 +
    "&condicion2="+condicion2); */
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 +
        "&condicion2=" + condicion2, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}//banear usuarios

async function perdon(opcion, condicion1) {
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}//perdonar tienda

//eliminacion del usuario y posterior actualizacion de la BBDD
async function castigoFinal(opcion, condicion1) {
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}//eliminacion del usuario y posterior actualizacion de la BBDD

//buscar un libro que ya este en la base de datos
async function buscarLibro(opcion, condicion1) {
    //console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}//buscar un libro

async function modificarLibros(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6, condicion7, condicion8) {
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion1=" + condicion1 +
        "&condicion2=" + condicion2 + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5
        + "&condicion6=" + condicion6 + "&condicion7=" + condicion7 + "&condicion8=" + condicion8, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}

function apiLibros(opcion) {
    let expcod = /^[0-9]{1,14}$/;
    let centinela = true;//centinela para saber que se cumplen todas las condiciones

    if (expcod.test(cod_libro.value)) {
        cod_libro.style.border = "1px solid black";
    } else {
        centinela = false;
        cod_libro.style.border = "2px solid red";
    }//else del cod_libro

    if (alias != "") {
        alias.style.border = "1px solid black";
    } else {
        centinela = false;
        alias.style.border = "2px solid red";
    }//else del alias

    if (centinela) {
        modificarLibros(opcion, cod_libro.value, alias.value, titulo.value, autor.value, pag.value, portada.value, leido.value, valoracion.value).then(() => {
            libros.style.display = "none";//oculto los div
        });
    }
}

window.addEventListener("load", () => {



    let perfil = sessionStorage.getItem("alias");

    //verificador de que SOLO pueda entrar en admin el Administrador
    if (perfil != "Administrador") {
        window.location.replace("http://localhost/proyecto/index.html");
    }

    //ADMINISTRACION BBDD

    //btn copia de la base de datos
    btnCopia.addEventListener("click", () => {
        copia("copiaSeguridad");
    });//btn copia de la base de datos

    //btn opcion restaurar, pone visible el div
    btnRestaurar.addEventListener("click", () => {
        restore.style.display = "flex";//dejo visible el div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "none";//oculto los div
    });//btn que muestra el div de la restauracion de la bbdd

    //btn que comprueba que se le puso un fichero, sino se bloquea el evento
    btnEnviar.addEventListener("click", (e) => {
        let restaurar = document.getElementById("restaurar2");
        if (restaurar.value == "") {
            e.preventDefault();
        }
    });//btn que comprueba que se le puso un fichero, sino se bloquea el evento

    //btn que actualiza las tablas para eliminar registros de usuarios eliminados
    btnActualizar.addEventListener("click", () => {
        actualizar("actualizar");
    });//btn que actualiza las tablas para eliminar registros de usuarios eliminados

    //GESTION DE DATOS

    //TIENDAS

    //btn que muestra el div de tiendas para agregar registros o borrarlos
    btnTiendas.addEventListener("click", () => {
        restore.style.display = "none";//oculto los div
        tiendas.style.display = "flex";//dejo visible el div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "none";//oculto los div
    });//btn que muestra el div de tiendas para agregar registros o borrarlos

    //agregar tienda
    btnAgregarTienda.addEventListener("click", () => {
        //"capturo" los campos para la insercion o eliminacion
        let cod = document.getElementById("acodtienda");
        let localidad = document.getElementById("alocalidad");
        let provincia = document.getElementById("aprovincia");
        let nombre = document.getElementById("anombre");
        let direccion = document.getElementById("adireccion");
        let telefono = document.getElementById("atelefono");
        let cod_hob = document.getElementById("acodhobie");

        //variables del evento
        let expcod = /^[A-Z]{2}[0-9]{4}$/;//expresion regular para el codigo ej CU1989
        let explocalidad = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;//expresionregular para la localidad
        let exptelefono = /^[0-9 ]{9,12}$/i;//expresion regular para el telefono
        let expdireccion = /^[a-zñáéíóúA-ZÑÁÉÍÓÚ \/\\\.]+[\º\ \][0-9]{1,3}/;//expresion regular para la direccion
        let expcodhob = /^[0-9]{1,2}$/;//expresion regular para el hobbie
        let correcto = true;//variable centinela agregar

        //div con los errores
        let validacion1 = document.getElementById("validacion1");
        let validacion2 = document.getElementById("validacion2");
        let validacion3 = document.getElementById("validacion3");
        let validacion4 = document.getElementById("validacion4");
        let validacion5 = document.getElementById("validacion5");
        let validacion6 = document.getElementById("validacion6");

        comprobarCod("cod", cod.value).then(() => {
            if (!expcod.test(cod.value) || codinsertado) {
                cod.style.border = "2px solid red";
                validacion1.style.display = "inline";
                correcto = false;
            } else {
                cod.style.border = "1px solid black";
                validacion1.style.display = "none";
            }//verificacion codigo

            if (!explocalidad.test(localidad.value)) {
                localidad.style.border = "2px solid red";
                validacion6.style.display = "inline";
                correcto = false;
            } else {
                localidad.style.border = "1px solid black";
                validacion6.style.display = "none";
            }//verificacion de localidad

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
                        agregarTienda("agregartienda", cod.value, nombre.value, telefono.value, direccion.value, localidad.value, provincia.value, cod_hob.value);
                    } else {
                        console.log("Lastima, Continuar?");
                    }//si todo esta correcto pasa al servidor
                }
            });
        })
    });//agregar tienda

    //btn borrar tienda
    btnBorrarTienda.addEventListener("click", () => {
        let cod = document.getElementById("acodtienda");
        console.log("pasa");
        let expcod = /^[A-Z]{2}[0-9]{4}$/;//expresion regular para el codigo ej CU1989
        if (!expcod.test(cod.value)) {
            cod.style.border = "2px solid red";
            correcto = false;
        } else {
            cod.style.border = "1px solid black";
            borrartTienda("borrartienda", cod.value).then(() => {
                console.log("Completado");
            });
        }//verificacion codigo

    });//btn borrar tienda

    //btn buscartienda , parte de que se le introduzca el codigo de la tienda
    btnBuscarTienda.addEventListener("click", () => {
        //"capturo" los campos para la insercion o eliminacion
        let cod = document.getElementById("acodtienda");
        let localidad = document.getElementById("alocalidad");
        let provincia = document.getElementById("aprovincia");
        let nombre = document.getElementById("anombre");
        let direccion = document.getElementById("adireccion");
        let telefono = document.getElementById("atelefono");
        let cod_hob = document.getElementById("acodhobie");

        console.log(cod.value)
        buscartienda("buscartienda", cod.value).then(data => {
            //muestro los resultados de la busqueda
            localidad.value = data[0][1];
            provincia.value = data[0][2];
            nombre.value = data[0][3];//4
            direccion.value = data[0][4];//5
            telefono.value = data[0][5];//6
            cod_hob.value = data[0][6];
        });
    });//btn buscar tienda

    //USUARIOS

    //btn que muestra el div de usuarios para banear o borrar usuarios, y recibir la gracia del señor por buena conducta
    btnBaneos.addEventListener("click", () => {
        restore.style.display = "none";//oculto los div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "flex";//dejo visible el div
        seleccion.style.display = "none";//oculto los div
        libros.style.display = "none";//oculto los div
    });//btn que muestra el div de usuarios para banear o borrar usuarios, y recibir la gracia del señor por buena conducta

    btnBuscarUsu.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        let motivo = document.getElementById("amotivo");

        buscarUsuario("buscarusuario", alias.value).then(data => {
            if (data[0][0] == null) {
                motivo.textContent = "Usuario no registrado";
            } else {
                if (data[0][0].includes("@")) {
                    motivo.textContent = "Correo Electronico\n" + data[0][0];
                } else {
                    motivo.textContent = data[0][0];
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
    });//bannearusuarios

    //btn perdonar usuarios
    btnPerdonar.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        perdon("perdonarusuario", alias.value);
    })//btn del perdon

    btnBorrarUsu.addEventListener("click", () => {
        let alias = document.getElementById("aalias");
        //ahora borramos y actualizamos tablas
        castigoFinal("eliminacion", alias.value);//eliminacion del usuario
    })

    //añadir regstros en tablas

    //btn que muestra la opcion para agregar registros a las diferentes tablas
    btnAñadir.addEventListener("click", () => {
        restore.style.display = "none";//oculto los div
        tiendas.style.display = "none";//oculto los div
        usuarios.style.display = "none";//oculto los div
        seleccion.style.display = "flex";//dejo visible el div
        libros.style.display = "none";//oculto los div
    });//btn que muestra la opcion para agregar registros a las diferentes tablas

    //btn que muestra el div para insertar registros en libros (opcion libros del div seleccion)
    btnLibros.addEventListener("click", () => {
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
                    //inserto los resultados
                    alias.value = data[1];
                    titulo.value = data[2];
                    autor.value = data[3];
                    pag.value = data[4];
                    portada.value = data[5];
                    leido.value = data[6];
                    valoracion.value = data[7];
                } else {
                    //lo oculto
                    label.textContent = "Resultado";
                    divTitulo.style.display = "none";
                    divAutor.style.display = "none";
                    divPag.style.display = "none";
                    divPortada.style.display = "none";
                    divLeido.style.display = "none";
                    divValoracion.style.display = "none";
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
        apiLibros("agregarLibro");
    });//btn agregarlibro

    btnBorrarLibro.addEventListener("click", () => {
        apiLibros("borrarLibro");
    })
})
