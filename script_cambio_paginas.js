let NumPag=3
// ------------------------ Inicialización Botones (cada pagina tiene su boton)
let botonA0="";let botonA1="";let botonA2="";
let botonS0=""; let botonS1=""; let botonS2="";
let titulo0=""; let titulo1=""; let titulo2=""; 
for(let b =0;b<NumPag;b++){
    eval("botonA"+String(b)+" = document.getElementById('botonA"+String(b)+"');");
    eval("botonS"+String(b)+" = document.getElementById('botonS"+String(b)+"');");
    eval("titulo"+String(b)+" = document.getElementById('titulo"+String(b)+"');");
}
// ----------------------- Se Inicializa TODO
function initContenedor(){
    // ------------------------ Inicialización de Contenedor
    let contenedor = document.getElementById("contenedor");
    let rectcontenedor = contenedor.getBoundingClientRect();
    let contenedorW=0; let contenedorH=0;let minValue = 0;

    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;
    minValue = Math.min(anchoPantalla,altoPantalla);
    contenedor.style.width=String(minValue*.79)+"px";
    contenedor.style.height=String(minValue*.9)+"px";
    rectcontenedor = contenedor.getBoundingClientRect();
    contenedorW=rectcontenedor.width*.9; contenedorH=rectcontenedor.height*.9;
    // ----------------------- Posicion de boton y posición en Z
    let posBS=[50,70,50]; let indxBS=[11,11,10];
    let posBA=[50,30,50]; let indxBA=[10,10,11];
    // ------------------------ Inicialización de Posicion de Botones  
    for(let b=0;b<NumPag;b++){        
        eval("botonA"+String(b)+'.style.left = "'+String(posBA[b])+'%";')
        eval("botonA"+String(b)+'.style.width ="'+String(contenedorW*.3)+'px";')
        eval("botonA"+String(b)+'.style.height ="'+String(contenedorH*.1)+'px";')
        eval("botonA"+String(b)+'.style.fontSize ="'+String(Math.round(minValue*.03))+'px";')
        eval("botonA"+String(b)+".style.zIndex ="+String(indxBA[b]))

        eval("botonS"+String(b)+'.style.left = "'+String(posBS[b])+'%";')
        eval("botonS"+String(b)+'.style.width ="'+String(contenedorW*.3)+'px";')
        eval("botonS"+String(b)+'.style.height ="'+String(contenedorH*.1)+'px";')
        eval("botonS"+String(b)+'.style.fontSize ="'+String(Math.round(minValue*.03))+'px";')
        eval("botonS"+String(b)+".style.zIndex ="+String(indxBS[b]))

        eval("titulo"+String(b)+".style.opacity = 1")
    }    
}
// ----------------------- Bloqueo o desbloqueo de botones
function blockBotons(estado){
    for(let b =0;b<3;b++){
        // ------------------------ Se habilitan - deshabilitan botones
        eval("let botonA"+String(b)+" = document.getElementById('botonA"+String(b)+"');");
        eval("botonA"+String(b)+".disabled = "+estado)
        eval("let botonS"+String(b)+" = document.getElementById('botonS"+String(b)+"');");
        eval("botonS"+String(b)+".disabled = "+estado)
    }
}
// ----------------------- CAMBIO DE PAGINA
function nextPage(pageId) {
    blockBotons(true)
    let ht=0; let hs=0; let cb=0;
    const movimiento = () => {
        if(pageId=="pagina0"){
            // ------------------------------------------- Movimiento botones
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=10
            botonS1.style.zIndex=11
        }
        if(pageId=="pagina1"){
            // ------------------------------------------- Movimiento botones
            botonA0.style.left = String(50-cb/103*20)+"%";
            botonS0.style.left = String(50+cb/103*20)+"%";

            botonA2.style.left = String(50-cb/103*20)+"%";
            botonS2.style.left = String(50+cb/103*20)+"%";

            
        }
        if(pageId=="pagina2"){
            // ------------------------------------------- Movimiento botones
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=11
            botonS1.style.zIndex=10
        }
        for(let b=0;b<3;b++){eval("titulo"+String(b)+".style.opacity = "+String(1-cb/100))}

        if(cb>=100){
            const currentActivePage = document.querySelector(".pagina.active");
            currentActivePage.classList.remove("active");
            const nextPage = document.getElementById(pageId);
            nextPage.classList.add("active");
            initContenedor()
            blockBotons(false)
            return; // Salir del ciclo
        }
        cb++;        
        setTimeout(movimiento, 6);
    }
    movimiento(pageId);
}


// ----------------------- Mostrar la primera página por defecto
window.onload = function() {
    initContenedor();
    document.getElementById("pagina0").classList.add("active");
}

/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", initContenedor);
window.addEventListener("resize", initContenedor);