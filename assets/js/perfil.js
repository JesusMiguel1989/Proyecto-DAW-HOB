//funcion asincrona para la modificacion de datos
async function modificacion(opcion, condicion1, condicion2, condicion3, condicion4, condicion5, condicion6) {

    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 +
        "&condicion2=" + condicion2 + "&condicion3=" + condicion3 + "&condicion4=" + condicion4 + "&condicion5=" + condicion5+"&condicion6="+condicion6, {
        method: "PUT",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}

//funcion asincrona para la eliminacion de datos
async function borrar(opcion, condicion1, condicion2) {
    console.log("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 +
    "&condicion2=" + condicion2);
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 +
        "&condicion2=" + condicion2 , {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}

//campos
let alias = document.getElementById("palias");//campo alias
let fecha = document.getElementById("pnacimiento");//campo Fecha nacimiento
let mail = document.getElementById("pemail");//campo email
let localidad = document.getElementById("plocalidad");//campo localidad
let key = document.getElementById("pkey");//campo contraseña
//let check=document.getElementsByName("RS");//checbox Redes sociales

alias.value = sessionStorage.getItem('alias');
fecha.value = sessionStorage.getItem('fecha');
mail.value = sessionStorage.getItem('mail');
localidad.value = sessionStorage.getItem('localidad');

window.addEventListener("load", () => {
    let botones = document.getElementsByName("cambiar");

    botones[0].addEventListener("click", () => {
        //Cambiar
        let fecha1 = new Date();
        //console.log("opcion Cambiar");
        let expresionmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let expresion_key = /^\w{8,}$/;
        let expresion_nom = /[a-zA-ZñÑáéíóú0-9]{2,}$/;

        let milisegundos = 1000 * 60 * 60 * 24 * 365 * 18;
        let mili_fecha = fecha.value;
        let fecha_dada = new Date(mili_fecha);
        let mili = fecha1.getTime() - fecha_dada.getTime();

        let antiguo=sessionStorage.getItem('alias');

        if (expresion_key.test(key.value) && expresionmail.test(mail.value) && expresion_nom.test(alias.value) && mili > milisegundos) {
            console.log("cambiar_usuario",alias.value,fecha.value,localidad.value,mail.value,key.value,antiguo);
            
            modificacion("cambiar_usuario",alias.value,fecha.value,localidad.value,mail.value,key.value,antiguo).then(data => {

                console.log(data);

                sessionStorage.setItem('alias', data[0][0]);
                sessionStorage.setItem('mail', data[0][3]);
                sessionStorage.setItem('key', data[0][4]);
                sessionStorage.setItem('fecha', data[0][1]);
                sessionStorage.setItem('localidad', data[0][2]);
            });
        } else {
            //no cumple las condiciones
        }
    })

    botones[1].addEventListener("click", () => {
        //Cambiar Imagen
        console.log("opcion Cambiar Imagen");
    })

    botones[2].addEventListener("click", () => {
        //borrar
        console.log("opcion Borrar");
        borrar("borrar",alias.value,key.value);
        sessionStorage.removeItem('alias');
        sessionStorage.removeItem('fecha');
        sessionStorage.removeItem('mail');
        sessionStorage.removeItem('localidad');
        sessionStorage.removeItem('key');
        location.replace("http://localhost/proyecto/index.html");
    })

    botones[3].addEventListener("click", () => {
        //Cerrar Session
        //console.log("opcion Cerrar Session");
        sessionStorage.removeItem('alias');
        sessionStorage.removeItem('fecha');
        sessionStorage.removeItem('mail');
        sessionStorage.removeItem('localidad');
        sessionStorage.removeItem('key');
        location.replace("http://localhost/proyecto/index.html");
    })
})