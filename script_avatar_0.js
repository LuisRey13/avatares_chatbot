/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoD_0= document.createElement("div");
div_GOjoD_0.setAttribute("id","div_GOjoD_0");
div_GOjoD_0.setAttribute("class","div_GOjos_0");
/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoI_0= document.createElement("div");
div_GOjoI_0.setAttribute("id","div_GOjoI_0");
div_GOjoI_0.setAttribute("class","div_GOjos_0");
/* -------------------------- OJO DERECHO --------------------------- */
let div_OjoD_0= document.createElement("div");
div_OjoD_0.setAttribute("id","div_OjoD_0");
div_OjoD_0.setAttribute("class","div_Ojos_0");
/* ------------------------- OJO IZQUIERDO -------------------------- */
let div_OjoI_0= document.createElement("div");
div_OjoI_0.setAttribute("id","div_OjoI_0");
div_OjoI_0.setAttribute("class","div_Ojos_0");
/* ------------------------ PARPADO DERECHO ------------------------- */
let div_ParD_0= document.createElement("div");
div_ParD_0.setAttribute("id","div_ParD_0");
div_ParD_0.setAttribute("class","div_Parpds_0");
/* ----------------------- PARPADO IZQUIERDO ------------------------ */
let div_ParI_0= document.createElement("div");
div_ParI_0.setAttribute("id","div_ParI_0");
div_ParI_0.setAttribute("class","div_Parpds_0");
/* ------------------------------ BOCA ------------------------------ */
let div_boca= document.createElement("div");
div_boca.setAttribute("id","div_boca");
div_boca.setAttribute("class","div_boca");
/* ----------------------------- LENGUA ----------------------------- */
let div_lengua= document.createElement("div");
div_lengua.setAttribute("id","div_lengua");
div_lengua.setAttribute("class","div_lengua");
/* ------------ SE INCRUSTA sporte brillitos Izquierdos ------------- */
let div_soprtBrlltsI_0 = document.createElement("div");
div_soprtBrlltsI_0.setAttribute("id","div_soprtBrlltsI_0");
div_soprtBrlltsI_0.setAttribute("class","div_soprtBrllts_0");
/* ---------------- SE INCRUSTA brillitos Izquierdos ---------------- */
let div_brlltsI_0 = document.createElement("div");
div_brlltsI_0.setAttribute("id","div_brlltsI_0");
div_brlltsI_0.setAttribute("class","div_brllts_0");
/* ------------- SE INCRUSTA sporte brillitos Derechos -------------- */
let div_soprtBrlltsD_0 = document.createElement("div");
div_soprtBrlltsD_0.setAttribute("id","div_soprtBrlltsD_0");
div_soprtBrlltsD_0.setAttribute("class","div_soprtBrllts_0");
/* ----------------- SE INCRUSTA brillitos Derechos ----------------- */
let div_brlltsD_0 = document.createElement("div");
div_brlltsD_0.setAttribute("id","div_brlltsD_0");
div_brlltsD_0.setAttribute("class","div_brllts_0");
/* --------------------- SE UNEN LOS ELEMENTOS ---------------------- */
div_avatar_0.appendChild(div_GOjoD_0);
div_avatar_0.appendChild(div_GOjoI_0);
div_GOjoD_0.appendChild(div_OjoD_0);
div_GOjoI_0.appendChild(div_OjoI_0);
div_GOjoD_0.appendChild(div_ParD_0);
div_GOjoI_0.appendChild(div_ParI_0);
div_boca.appendChild(div_lengua);
div_avatar_0.appendChild(div_boca);
div_avatar_0.appendChild(div_soprtBrlltsI_0);
div_avatar_0.appendChild(div_soprtBrlltsD_0);
div_soprtBrlltsI_0.appendChild(div_brlltsI_0);
div_soprtBrlltsD_0.appendChild(div_brlltsD_0);

/// <<<<<<<<<<<<<<<<<<<<< INICIA MOVIMIENTO <<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento ojos y boca

function mov_ojos_0(event){
    var_boca=-1;
    // <<<<<<<<<<<<<<<<<<< Posicion mouse
    let Posx=event.clientX
    let Posy=event.clientY
    // <<<<<<<<<<<<<<<<<<< Modifica los ojos
    let GojoD = document.getElementById('div_GOjoD_0');let rectGOD = GojoD.getBoundingClientRect();
    let GojoI = document.getElementById('div_GOjoI_0');let rectGOI = GojoI.getBoundingClientRect();
    let ojoD = document.getElementById('div_OjoD_0');  let rectOD = ojoD.getBoundingClientRect();
    let ojoI = document.getElementById('div_OjoI_0');  let rectOI = ojoI.getBoundingClientRect();

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


    document.getElementById('div_OjoD_0').style.left  = String(NposFODx)+"px";
    document.getElementById('div_OjoD_0').style.top = String(NposFODy)+"px";
    document.getElementById('div_OjoI_0').style.left  = String(NposFOIx)+"px";
    document.getElementById('div_OjoI_0').style.top = String(NposFOIy)+"px";
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


/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", mov_ojos_0);
window.addEventListener("resize", mov_ojos_0);
window.addEventListener("mousemove", mov_ojos_0);
window.addEventListener("scroll", mov_ojos_0);
window.addEventListener("click",  function(event) {
    setTimeout(() => {
        mov_ojos_0(event)
    }, 700);
});