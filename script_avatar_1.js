/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoD_1= document.createElement("div");
div_GOjoD_1.setAttribute("id","div_GOjoD_1");
div_GOjoD_1.setAttribute("class","div_GOjos_1");
/* ----------------------- GLOBO OJO DERECHO ------------------------ */
let div_GOjoI_1= document.createElement("div");
div_GOjoI_1.setAttribute("id","div_GOjoI_1");
div_GOjoI_1.setAttribute("class","div_GOjos_1");
/* -------------------------- OJO DERECHO --------------------------- */
let div_OjoD_1= document.createElement("div");
div_OjoD_1.setAttribute("id","div_OjoD_1");
div_OjoD_1.setAttribute("class","div_Ojos_1");
/* ------------------------- OJO IZQUIERDO -------------------------- */
let div_OjoI_1= document.createElement("div");
div_OjoI_1.setAttribute("id","div_OjoI_1");
div_OjoI_1.setAttribute("class","div_Ojos_1");
/* ------------------------ PARPADO DERECHO ------------------------- */
let div_ParD_1= document.createElement("div");
div_ParD_1.setAttribute("id","div_ParD_1");
div_ParD_1.setAttribute("class","div_Parpds_1");
/* ----------------------- PARPADO IZQUIERDO ------------------------ */
let div_ParI_1= document.createElement("div");
div_ParI_1.setAttribute("id","div_ParI_1");
div_ParI_1.setAttribute("class","div_Parpds_1");
/* --------------------- SE UNEN LOS ELEMENTOS ---------------------- */
div_avatar_1.appendChild(div_GOjoD_1);
div_avatar_1.appendChild(div_GOjoI_1);
div_GOjoD_1.appendChild(div_OjoD_1);
div_GOjoI_1.appendChild(div_OjoI_1);
div_GOjoD_1.appendChild(div_ParD_1);
div_GOjoI_1.appendChild(div_ParI_1);


/// <<<<<<<<<<<<<<<<<<<<< INICIA MOVIMIENTO <<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento ojos y boca

function mov_ojos_1(event){
    var_boca=-1;
    // <<<<<<<<<<<<<<<<<<< Posicion mouse
    let Posx=event.clientX
    let Posy=event.clientY
    // <<<<<<<<<<<<<<<<<<< Modifica los ojos
    let GojoD = document.getElementById('div_GOjoD_1');let rectGOD = GojoD.getBoundingClientRect();
    let GojoI = document.getElementById('div_GOjoI_1');let rectGOI = GojoI.getBoundingClientRect();
    let ojoD = document.getElementById('div_OjoD_1');  let rectOD = ojoD.getBoundingClientRect();
    let ojoI = document.getElementById('div_OjoI_1');  let rectOI = ojoI.getBoundingClientRect();

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


    document.getElementById('div_OjoD_1').style.left  = String(NposFODx)+"px";
    document.getElementById('div_OjoD_1').style.top = String(NposFODy)+"px";
    document.getElementById('div_OjoI_1').style.left  = String(NposFOIx)+"px";
    document.getElementById('div_OjoI_1').style.top = String(NposFOIy)+"px";
};

/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", mov_ojos_1);
window.addEventListener("resize", mov_ojos_1);
window.addEventListener("mousemove", mov_ojos_1);
window.addEventListener("scroll", mov_ojos_1);
window.addEventListener("click",  function(event) {
    setTimeout(() => {
        mov_ojos_1(event)
    }, 700);
});