let NumPag=4
// ------------------------ Inicialización Botones (cada pagina tiene su boton)
let botonA0="";let botonA1="";let botonA2=""; let botonA3="";
let botonS0=""; let botonS1=""; let botonS2="";  let botonS3=""; 
let titulo0=""; let titulo1=""; let titulo2="";  let titulo3=""; 
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
    let posBS=[50,70,70,50]; let indxBS=[11,11,11,10];
    let posBA=[50,30,30,50]; let indxBA=[10,10,10,11];
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
            // ------------------------------------------- Movimiento botones primer pagina
            botonA1.style.left = String(30+cb/103*20)+"%"; 
            botonS1.style.left = String(70-cb/103*20)+"%";
            botonA1.style.zIndex=10
            botonS1.style.zIndex=11
        }
        if(pageId=="pagina1"){
            // ------------------------------------------- Movimiento botones segunda pagina
            botonA0.style.left = String(50-cb/103*20)+"%";
            botonS0.style.left = String(50+cb/103*20)+"%";
        }
        if(pageId=="pagina2"){
            // ------------------------------------------- Movimiento botones penultima pagina
            botonA3.style.left = String(50-cb/103*20)+"%";
            botonS3.style.left = String(50+cb/103*20)+"%";
        }
        if(pageId=="pagina3"){
            // ------------------------------------------- Movimiento botones ultima pagina
            botonA2.style.left = String(30+cb/103*20)+"%"; 
            botonS2.style.left = String(70-cb/103*20)+"%";
            botonA2.style.zIndex=11
            botonS2.style.zIndex=10
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

// <<<<<<<<<<<<<<<<<<<
// ------------------- Funcion ciclica de muchos eventos c/10ms
// <<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento PARPADEO
let parpadosD_0 = document.getElementById('div_ParD_0');
let parpadosI_0 = document.getElementById('div_ParI_0');
let parpadosD_1 = document.getElementById('div_ParD_1');
let parpadosI_1 = document.getElementById('div_ParI_1');
let parpadosD_3 = document.getElementById('div_ParD_3');
let parpadosI_3 = document.getElementById('div_ParI_3');
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Modifica brillitos
let posBlltsXI=[26.5,29.5,42.0, 38.6, 38.1, 37.9]
let posBlltsXD=[26.5,29.5,43.0, 39.9, 39.3, 39.3];
let posBlltsY= [11.5,13.5,15, 18, 23, 27.5];
let brillitsI_0 = document.getElementById('div_brlltsI_0'); let brillitsI_3 = document.getElementById('div_brlltsI_3');
let back_brillitsI_0 = document.getElementById('div_soprtBrlltsI_0'); let back_brillitsI_3 = document.getElementById('div_soprtBrlltsI_3');
let brillitsD_0 = document.getElementById('div_brlltsD_0'); let brillitsD_3 = document.getElementById('div_brlltsD_3');
let back_brillitsD_0 = document.getElementById('div_soprtBrlltsD_0'); let back_brillitsD_3 = document.getElementById('div_soprtBrlltsD_3');
function animacion(cb,cbG,GrdP,dirP){
    // <<<<<<<<<<<<<<<<<<< Modifica brillitos
    let gradientEscala = 1;
    let dirPB = 1;
    let intervalos = setInterval(() => {
    gradientEscala += dirPB * 10;

    brillitsI_0.style.width =String(gradientEscala)+"%"; if(cb<5){brillitsI_3.style.width =String(gradientEscala)+"%";}
    brillitsI_0.style.height =String(gradientEscala)+"%"; if(cb<5){brillitsI_3.style.height =String(gradientEscala)+"%";}
    back_brillitsI_0.style.left = String(posBlltsXI[cb])+"%"; if(cb<5){back_brillitsI_3.style.left = String(posBlltsXI[cb])+"%";}
    back_brillitsI_0.style.bottom = String(posBlltsY[cb])+"%"; if(cb<5){back_brillitsI_3.style.bottom = String(posBlltsY[cb])+"%";}

    brillitsD_0.style.width =String(gradientEscala)+"%"; if(cb<5){brillitsD_3.style.width =String(gradientEscala)+"%";}
    brillitsD_0.style.height =String(gradientEscala)+"%"; if(cb<5){brillitsD_3.style.height =String(gradientEscala)+"%";}
    back_brillitsD_0.style.right = String(posBlltsXD[cb])+"%"; if(cb<5){back_brillitsD_3.style.right = String(posBlltsXD[cb])+"%";}
    back_brillitsD_0.style.bottom = String(posBlltsY[cb])+"%"; if(cb<5){back_brillitsD_3.style.bottom = String(posBlltsY[cb])+"%";}

    if (gradientEscala > 100) {dirPB = -1;
    }else if (gradientEscala < 1) {
        dirPB = 1;
        clearInterval(intervalos); // Detén el intervalo
        cb+=1;cbG+=1;
        if(cb>5){cb=0}
        setTimeout(animacion,100,cb,cbG,GrdP,dirP); // Espera .1 segundos antes de repetir
    }
    // <<<<<<<<<<<<<<<<<<< Modifica PARPADEO
    if(cbG>10){
        GrdP += dirP * 9; // Incrementa la posición del gradiente
        parpadosD_0.style.background = `linear-gradient(180deg, #611232 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosI_0.style.background = `linear-gradient(180deg, #611232 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosD_1.style.background = `linear-gradient(180deg, #000000 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosI_1.style.background = `linear-gradient(180deg, #000000 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosD_3.style.background = `linear-gradient(180deg, #000000 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosI_3.style.background = `linear-gradient(180deg, #000000 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        if (GrdP >= 99) {dirP = -1;
        }else if (GrdP < 0) {
            dirP = 1;
            GrdP=0;
            cbG=0;
        }
    }
}, 19); // Actualiza el gradiente cada 9 milisegundos
}
animacion(0,0,0,1) // el primero inicializa animacion
// <<<<<<<<<<<<<<<<<<<
// -------------------
// <<<<<<<<<<<<<<<<<<<


/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", initContenedor);
window.addEventListener("resize", initContenedor);