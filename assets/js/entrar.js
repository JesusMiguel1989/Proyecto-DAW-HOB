async function alias(opcion, condicion1, condicion2) {
    let response = await fetch("http://localhost/proyecto/php/miniAPI.php?opcion=" + opcion + "&condicion=" + condicion1 + "&condicion2=" + condicion2, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
}

window.addEventListener("load", () => {
    let nombre = document.getElementById("nombre");//campo nombre
    let contraseña = document.getElementById("contraseña");//campo contraseña
    let enviar = document.getElementById("enviar");//boton enviar submit
    let fondo = document.getElementById("rfondoi");//fondo del formulario
    let olvido = document.getElementById("olvido");//btn olvido
    let entrada = document.getElementById("entrada");//formulario

    let validacion = document.getElementById("validacion");//div con el error 1
    let validacion2 = document.getElementById("validacion2");//div con el error 2

    entrada.addEventListener("submit", (e) => {
        let validador = true;

        if (nombre.value == "") {
            validador = false;
            nombre.style.border = "2px solid red";
            validacion.style.display = "block";
            validacion.style.fontWeight = "bold";
            e.preventDefault();
        } else {
            nombre.style.border = "1px solid black";
            validacion.style.display = "none";
        }

        if (contraseña.value == "") {
            validador = false;
            contraseña.style.border = "2px solid red";
            fondo.style.height = "500px";
            validacion2.style.display = "block";
            validacion2.style.fontWeight = "bold";
            e.preventDefault();
        } else {
            fondo.style.height = "425px";
            contraseña.style.border = "1px solid black";
            validacion2.style.display = "none";
        }

        if (validador) {
            alias("usuario", nombre.value, contraseña.value).then(data => {
                console.log(data);
                sessionStorage.setItem('alias', data[0][0]);
                sessionStorage.setItem('mail', data[0][3]);
                sessionStorage.setItem('key', data[0][4]);
                sessionStorage.setItem('fecha', data[0][1]);
                sessionStorage.setItem('localidad', data[0][2]);
            });
        }
    })//click de enviar

    olvido.addEventListener("click", () => {

    })
})