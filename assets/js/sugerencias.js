let nombre=document.getElementById("snombre");//nombre del usuario a enviar
let email=document.getElementById("semail");//mail del usuario
let asunto=document.getElementById("spag");//pagina sobre la que documenta
let sugerencia=document.getElementById("ssugerencia");//texto de la sugerencia

let btnEnviar=document.getElementById("btnenviar");//btn de enviar

//función para cambiar espacios por _
function cambio(texto){
    let cadena=texto;
    while(cadena.includes(" ")){
        cadena=cadena.replace(" ", "_");
    }
    return cadena;
}

//funcion asincrona para hacer la llamada a la miniAPI
async function enviar(opcion, condicion1, condicion2, condicion3, condicion4) {
    /* console.log("http://"+root+"/proyecto/php/miniAPI.php?opcion=" + 
    opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
    + "&condicion3=" + condicion3 + "&condicion4=" + condicion4); */
    let response = await fetch(root+"/php/miniAPI.php?opcion=" + 
        opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
        + "&condicion3=" + condicion3 + "&condicion4=" + condicion4, {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
}

window.addEventListener("load",()=>{
    nombre.value=sessionStorage.getItem("alias");//pongo por defecto el valor de la session
    email.value=sessionStorage.getItem("mail");//pongo por defecto el valor de la session

    btnEnviar.addEventListener("click",()=>{
        let texto=cambio(sugerencia.value);
        console.log(texto);
        enviar("sugerencia",nombre.value,email.value,cambio(asunto.value),texto);
    })
    

    
})