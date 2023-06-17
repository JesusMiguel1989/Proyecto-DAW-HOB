let nombre=document.getElementById("snombre");//nombre del usuario a enviar
let email=document.getElementById("semail");//mail del usuario
let asunto=document.getElementById("spag");//pagina sobre la que documenta
let sugerencia=document.getElementById("ssugerencia");//texto de la sugerencia
let accion=document.getElementById("accion");//div que contiene el texto de si se envia el mensaje o no

let btnEnviar=document.getElementById("btnenviar");//btn de enviar

let verificador=false;

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
    console.log("http://"+root+"/proyecto/php/miniAPI.php?opcion=" + 
    opcion + "&condicion1=" + condicion1 + "&condicion2=" + condicion2
    + "&condicion3=" + condicion3 + "&condicion4=" + condicion4);
    let response = await fetch(root+"/php/miniAPI.php?opcion=" + 
        opcion + "&condicion1=" + encodeURIComponent(condicion1) + "&condicion2=" + encodeURIComponent(condicion2)
        + "&condicion3=" + encodeURIComponent(condicion3) + "&condicion4=" + encodeURIComponent(condicion4), {
        method: "GET",
        headers: { "Content-type": "application/json" }
    });
    
    response = await response.json();
    if(response==1){
        verificador=true;
    }
}

window.addEventListener("load",()=>{
    accion.style.display="none";
    nombre.textContent=sessionStorage.getItem("alias");//pongo por defecto el valor de la session
    if(sessionStorage.getItem("alias")==""){
        nombre.textContent="HOB";
    }
    email.textContent=sessionStorage.getItem("mail");//pongo por defecto el valor de la session
    if(sessionStorage.getItem("mail")=="undefined"){
        email.textContent="Ejemplo";
    }

    btnEnviar.addEventListener("click",(e)=>{
        let texto=cambio(sugerencia.value);
        console.log(texto);
        
        if(sessionStorage.getItem("mail")=="undefined"){
            e.preventDefault();
        }else{
            enviar("sugerencia",nombre.textContent,email.textContent,cambio(asunto.value),texto).then(() => {
            
                if(verificador){
                    sugerencia.value="";
                    asunto.value="";
                    accion.style.display="inline";
                }else{
                    accion.style.display="none";
                }
            });
        }
        
        
    })
    

    
})