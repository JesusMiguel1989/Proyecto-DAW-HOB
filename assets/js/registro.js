let arrayAlias = [];

let nuevoClick = new Event("click");
let nuevoSubmit = new Event("submit");
//let evento = document.createEvent("submit");
let eventoClick = new Event("click");
async function alias() {
    let response = await fetch(root+"/php/comprobacionAlias.php", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });

    response = await response.json();
    return Promise.resolve(response);
    //let texto = await response.json();

    //arrayAlias=texto;
    /* for (i = 0; i < texto.length; i++) {
        arrayAlias[i]=texto[i];
    } */
}

window.addEventListener("load", () => {
    let remail = document.getElementById("remail");
    let contraseña = document.getElementById("key");
    let contraseña2 = document.getElementById("key2");
    let nombre = document.getElementById("rnombre");
    let fecha_nac = document.getElementById("rfecha");
    let localidad = document.getElementById("rlocalidad");
    let condiciones = document.getElementById("condiciones");
    let rRobot = document.getElementById("rRobot");

    let ojo1 = document.getElementById("verclave1");//boton ojo 1
    let ojo2 = document.getElementById("verclave2");//boton ojo 1

    let enviar = document.getElementById("enviar");//submit
    //let registro = document.getElementById("inicio");//form
    let formulario = document.getElementById("inicio");//div con el formulario
    //let seccion = document.getElementById("seccion");//seccion
    let validado = false;

    ojo1.addEventListener("click", () => {
        let contiene = ojo1.classList.contains("bi-eye-slash");
        let doble = ojo2.classList.contains("bi-eye-slash");

        if (contiene && doble) {
            contraseña.type = "text";
            ojo1.classList.remove("bi-eye-slash");
            ojo1.classList.add("bi-eye");
        } else {
            contraseña.type = "password";
            ojo1.classList.remove("bi-eye");
            ojo1.classList.add("bi-eye-slash");
        }
    });//hacer visible la contraseña 1

    ojo2.addEventListener("click", () => {
        let contiene = ojo2.classList.contains("bi-eye-slash");
        let doble = ojo1.classList.contains("bi-eye-slash");

        if (contiene && doble) {
            contraseña2.type = "text";
            ojo2.classList.remove("bi-eye-slash");
            ojo2.classList.add("bi-eye");
        } else {
            contraseña2.type = "password";
            ojo2.classList.remove("bi-eye");
            ojo2.classList.add("bi-eye-slash");
        }
    })

    enviar.addEventListener("click", (e) => {
        let expresionmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let expresion_key = /^\w{8,}$/;
        let expresion_nom = /[a-zA-ZñÑáéíóú0-9]{2,}$/;
        let fecha = new Date();
        let registro = document.getElementById("inicio");//form

        let validacion1 = document.getElementById("validacion1");
        let validacion2 = document.getElementById("validacion2");
        let validacion3 = document.getElementById("validacion3");
        let validacion4 = document.getElementById("validacion4");
        let validacion34 = document.getElementById("validacion34");

        if (!validado) {
            //e.preventDefault();

            let validacion = true;
            //comprobacion email
            if (!expresionmail.test(remail.value)) {
                validacion = false;
                validacion1.style.display = "block";
                remail.style.border = "2px solid red";
            } else {
                validacion1.style.display = "none";
                remail.style.border = "1px solid black";
            }

            //comprobacion
            if (!expresion_key.test(contraseña.value)) {
                validacion = false;
                contraseña.style.border = "2px solid red";
                validacion2.style.display = "block";
            } else {
                contraseña.style.border = "1px solid black";
                validacion2.style.display = "none";
            }

            //comprobacion de que la clave es la misma
            if (contraseña.value != contraseña2.value) {
                validacion = false;
                contraseña2.style.border = "2px solid red";
                validacion3.style.display = "block";
            } else {
                contraseña2.style.border = "1px solid black";
                validacion3.style.display = "none";
            }


            //comprobacion de mayor de edad
            let milisegundos = fecha.getTime() - 1000 * 60 * 60 * 24 * 365 * 18;
            let mili_fecha = fecha_nac.value;
            let fecha_dada = new Date(mili_fecha);
            let mili = fecha_dada.getTime();
            if (mili > milisegundos) {
                validacion = false;
                fecha_nac.style.border = "2px solid red";
                validacion4.style.display = "block";
            } else {
                fecha_nac.style.border = "1px solid black";
                validacion4.style.display = "none";
            }

            //condiciones
            if (condiciones.checked == false) {
                validacion = false;
                let validacion5 = document.getElementById("validacion5");
                validacion5.style.display = "block";
            }

            //robot
            if (rRobot.checked == false) {
                validacion = false;
                let validacion6 = document.getElementById("validacion6");
                validacion6.style.display = "block";
            }

            //comprobacion de que el nombre no esta vacio O no este ya en la BBDD
            if (!expresion_nom.test(nombre.value)) {
                validacion = false;
                validacion34.style.display = "block";
            } else {
                alias().then(data => {
                    console.log(data);
                    if (data.includes(nombre.value)) {
                        console.log(nombre.value);
                        validacion = false;
                        validacion34.style.display = "block";
                    }

                    //comprobacion de si esta todo correcto
                    if (validacion) {
                        validado = true;
                        console.log("llega");
                        enviar.dispatchEvent(nuevoClick);
                    }
                });
            }
        } else {
            formulario.dispatchEvent(nuevoSubmit);
            sessionStorage.setItem('alias', nombre.value);
            sessionStorage.setItem('mail', remail.value);
            sessionStorage.setItem('key', contraseña.value);
            sessionStorage.setItem('fecha', fecha_nac.value);
            sessionStorage.setItem('localidad', localidad.value);
            sessionStorage.setItem('estado', "Pendiente");
        }


    });

    formulario.addEventListener("submit", () => {
        console.log("Se nabda");
    })
})