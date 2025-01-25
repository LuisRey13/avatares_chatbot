/// <<<<<<<<<<<<<<<<<<<<< INICIA MOVIMIENTO <<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Movimiento ojos

function mov_ojos_3(event){

    // <<<<<<<<<<<<<<<<<<< Posicion mouse
    let Posx=event.clientX
    let Posy=event.clientY
    // <<<<<<<<<<<<<<<<<<< Modifica los ojos
    let par_de_ojos_b = document.getElementById('par_de_ojos_b');let rectPDOB = par_de_ojos_b.getBoundingClientRect();
    let PosGPDOB_x = rectPDOB.left+rectPDOB.width/2;let PosGPDOB_y = rectPDOB.bottom-rectPDOB.height/2;
    let R = Math.sqrt(Math.pow(Posx-PosGPDOB_x,2)+Math.pow(Posy-PosGPDOB_y,2))

    let par_de_ojos_f = document.getElementById('par_de_ojos_f');

    let G_DI=Math.atan2(Posy-PosGPDOB_y,Posx-PosGPDOB_x);

    let rxy = Math.min(R,rectPDOB.width*.5)
    let NposODI_x = rxy*Math.cos(G_DI); let NposODI_y = rxy*Math.sin(G_DI);

    par_de_ojos_f.style.left=String(NposODI_x)+"px"
    par_de_ojos_f.style.top=String(NposODI_y)+"px"

    let WH=rectPDOB.width*rectPDOB.width/(rectPDOB.width+Math.min(rectPDOB.width/3,R/rectPDOB.width))
    console.log(WH," --- ",rectPDOB.width," -- ",R)
    par_de_ojos_f.style.width=String(WH)+"px"
    par_de_ojos_f.style.height=String(WH)+"px"
}

/* -------------------- Funciones para dinámicas -------------------- */
window.addEventListener("load", mov_ojos_3);
window.addEventListener("resize", mov_ojos_3);
window.addEventListener("mousemove", mov_ojos_3);
window.addEventListener("scroll", mov_ojos_3);
window.addEventListener("click",  function(event) {
    setTimeout(() => {
        mov_ojos_3(event)
    }, 700);
});