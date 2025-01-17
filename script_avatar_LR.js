/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoD= document.createElement("div");
div_GOjoD.setAttribute("id","div_GOjoD");
div_GOjoD.setAttribute("class","div_GOjos");
/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoI= document.createElement("div");
div_GOjoI.setAttribute("id","div_GOjoI");
div_GOjoI.setAttribute("class","div_GOjos");
/* -------------------------- OJO DERECHO --------------------------- */
let div_OjoD= document.createElement("div");
div_OjoD.setAttribute("id","div_OjoD");
div_OjoD.setAttribute("class","div_Ojos");
/* ------------------------- OJO IZQUIERDO -------------------------- */
let div_OjoI= document.createElement("div");
div_OjoI.setAttribute("id","div_OjoI");
div_OjoI.setAttribute("class","div_Ojos");
/* ------------------------ PARPADO DERECHO ------------------------- */
let div_ParD= document.createElement("div");
div_ParD.setAttribute("id","div_ParD");
div_ParD.setAttribute("class","div_Parpds");
/* ----------------------- PARPADO IZQUIERDO ------------------------ */
let div_ParI= document.createElement("div");
div_ParI.setAttribute("id","div_ParI");
div_ParI.setAttribute("class","div_Parpds");
/* ------------------------------ BOCA ------------------------------ */
let div_boca= document.createElement("div");
div_boca.setAttribute("id","div_boca");
div_boca.setAttribute("class","div_boca");
/* ----------------------------- LENGUA ----------------------------- */
let div_lengua= document.createElement("div");
div_lengua.setAttribute("id","div_lengua");
div_lengua.setAttribute("class","div_lengua");
/* ------------ SE INCRUSTA sporte brillitos Izquierdos ------------- */
let div_soprtBrlltsI= document.createElement("div");
div_soprtBrlltsI.setAttribute("id","div_soprtBrlltsI");
div_soprtBrlltsI.setAttribute("class","div_soprtBrllts");
/* ---------------- SE INCRUSTA brillitos Izquierdos ---------------- */
let div_brlltsI= document.createElement("div");
div_brlltsI.setAttribute("id","div_brlltsI");
div_brlltsI.setAttribute("class","div_brllts");
/* ------------- SE INCRUSTA sporte brillitos Derechos -------------- */
let div_soprtBrlltsD= document.createElement("div");
div_soprtBrlltsD.setAttribute("id","div_soprtBrlltsD");
div_soprtBrlltsD.setAttribute("class","div_soprtBrllts");
/* ----------------- SE INCRUSTA brillitos Derechos ----------------- */
let div_brlltsD= document.createElement("div");
div_brlltsD.setAttribute("id","div_brlltsD");
div_brlltsD.setAttribute("class","div_brllts");
/* --------------------- SE UNEN LOS ELEMENTOS ---------------------- */
div_avatar_LR.appendChild(div_GOjoD);
div_avatar_LR.appendChild(div_GOjoI);
div_GOjoD.appendChild(div_OjoD);
div_GOjoI.appendChild(div_OjoI);
div_GOjoD.appendChild(div_ParD);
div_GOjoI.appendChild(div_ParI);
div_boca.appendChild(div_lengua);
div_avatar_LR.appendChild(div_boca);
div_avatar_LR.appendChild(div_soprtBrlltsI);
div_avatar_LR.appendChild(div_soprtBrlltsD);
div_soprtBrlltsI.appendChild(div_brlltsI);
div_soprtBrlltsD.appendChild(div_brlltsD);

/// <<<<<<<<<<<<<<<<<<<<< INICIA MOVIMIENTO <<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento ojos y boca

function mov_ojos(event){
    var_boca=-1;
    // <<<<<<<<<<<<<<<<<<< Posicion mouse
    let Posx=event.clientX
    let Posy=event.clientY
    // <<<<<<<<<<<<<<<<<<< Modifica los ojos
    let GojoD = document.getElementById('div_GOjoD');let rectGOD = GojoD.getBoundingClientRect();
    let GojoI = document.getElementById('div_GOjoI');let rectGOI = GojoI.getBoundingClientRect();
    let ojoD = document.getElementById('div_OjoD');  let rectOD = ojoD.getBoundingClientRect();
    let ojoI = document.getElementById('div_OjoI');  let rectOI = ojoI.getBoundingClientRect();

    let PosGOjoDx = rectGOD.left+rectGOD.width/2;let PosGOjoDy = rectGOD.bottom-rectGOD.height/2;
    let PosGOjoIx = rectGOI.left+rectGOI.width/2;let PosGOjoIy = rectGOI.bottom-rectGOI.height/2;

    let GD=Math.atan2(Posy-PosGOjoDy,Posx-PosGOjoDx);
    let GI=Math.atan2(Posy-PosGOjoIy,Posx-PosGOjoIx);

    let rx=(rectGOD.width/2-rectOD.width/2)*.9;
    let ry=(rectGOD.height/2-rectOD.height/2)*.9;
    let NposODx = rx*Math.cos(GD); let NposODy = ry*Math.sin(GD);
    let NposOIx = rx*Math.cos(GI); let NposOIy = ry*Math.sin(GI);

    let NposFODx = NposODx+rectGOD.width/2-rectOD.width/2
    let NposFOIx = NposOIx+rectGOD.width/2-rectOI.width/2
    let NposFODy = (NposODy+NposOIy)/2+rectGOD.height/2-rectOD.height/2;
    let NposFOIy = (NposODy+NposOIy)/2+rectGOD.height/2-rectOD.height/2;


    document.getElementById('div_OjoD').style.left  = String(NposFODx)+"px";
    document.getElementById('div_OjoD').style.top = String(NposFODy)+"px";
    document.getElementById('div_OjoI').style.left  = String(NposFOIx)+"px";
    document.getElementById('div_OjoI').style.top = String(NposFOIy)+"px";
    // <<<<<<<<<<<<<<<<<<< Modifica la boca
    //let avatar_LR = document.getElementById("avatar_LR").getBoundingClientRect();
    //let avatarX = avatar_LR.left + (avatar_LR.width / 2);
    //let avatarY = avatar_LR.top + (avatar_LR.height / 2);

    let boca = document.getElementById('div_boca');
    let rectBoca = boca.getBoundingClientRect();let PosBocax = rectBoca.left+rectBoca.width/2;let PosBocay = rectBoca.bottom-rectBoca.height/2;
    let R = Math.sqrt(Math.pow(Posx-PosBocax,2)+Math.pow(Posy-PosBocay,2))

    let fRx = Math.pow(1/3,R*.0013)
    let fRy = Math.pow(1/3,R*.0013)

    boca.style.width = String(fRx*7*1.9)+"%";
    boca.style.height = String(fRy*7)+"%";

    // <<<<<<<<<<<<<<<<<<< Modifica la lengua
    let lengua = document.getElementById('div_lengua');
    lengua.style.width = String(fRx*30*1.9)+"%";
    lengua.style.height = String(fRy*30)+"%";
    lengua.style.backgroundColor="rgb("+String(250*(fRx+fRy)/2)+", 0, 0)";
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento PARPADEO
let parpadosD = document.getElementById('div_ParD');
let parpadosI = document.getElementById('div_ParI');
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Modifica brillitos
let posBlltsXI=[27,30,42.0, 38.6, 38.1, 37.9]
let posBlltsXD=[27,30,43.0, 39.9, 39.3, 39.3];
let posBlltsY= [15,17,18.5, 21.6, 26.0, 30.6];
let brillitsI = document.getElementById('div_brlltsI');
let back_brillitsI = document.getElementById('div_soprtBrlltsI');
let brillitsD = document.getElementById('div_brlltsD');
let back_brillitsD = document.getElementById('div_soprtBrlltsD');
function animacion(cb,cbG,GrdP,dirP){
    // <<<<<<<<<<<<<<<<<<< Modifica brillitos
    let gradientEscala = 1;
    let dirPB = 1;
    let intervalos = setInterval(() => {
    gradientEscala += dirPB * 10;

    brillitsI.style.width =String(gradientEscala)+"%";
    brillitsI.style.height =String(gradientEscala)+"%";
    back_brillitsI.style.left = String(posBlltsXI[cb])+"%";
    back_brillitsI.style.bottom = String(posBlltsY[cb])+"%";

    brillitsD.style.width =String(gradientEscala)+"%";
    brillitsD.style.height =String(gradientEscala)+"%";
    back_brillitsD.style.right = String(posBlltsXD[cb])+"%";
    back_brillitsD.style.bottom = String(posBlltsY[cb])+"%";

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
        parpadosD.style.background = `linear-gradient(180deg, #611232 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
        parpadosI.style.background = `linear-gradient(180deg, #611232 ${GrdP}%,  rgba(0, 0, 0, 0) 0%)`;
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

/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", mov_ojos);
window.addEventListener("resize", mov_ojos);
window.addEventListener("mousemove", mov_ojos);
window.addEventListener("scroll", mov_ojos);
window.addEventListener("click",  function(event) {
    setTimeout(() => {
        mov_ojos(event)
    }, 700);
});