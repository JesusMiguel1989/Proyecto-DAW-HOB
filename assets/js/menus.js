window.addEventListener("load",()=>{
    let menu = document.getElementById("menus");
    let header = document.getElementById("header");

    let visible=false;

    menu.addEventListener("click",()=>{
        if(visible){
            header.style.left="-300px";
            visible=false
        }else{
            header.style.left="0px";
            visible=true;
        }
    })
})