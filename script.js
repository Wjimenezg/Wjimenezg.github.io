const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

if(noBtn){

    // Para celular (click)
    noBtn.addEventListener("click", function(e){
        e.preventDefault();
        crecerBoton();
    });

    // Para computadora (cuando pasa el mouse)
    noBtn.addEventListener("mouseover", function(){
        moverBoton();
    });

}

function crecerBoton(){
    scale += 0.3;
    yesBtn.style.transform = `scale(${scale})`;
}

function moverBoton(){
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
