const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let noScale = 1;
let clicks = 0;

const frases = [
    "¿Segura? 🥺",
    "Piénsalo bien 🤔",
    "'¿Segurisima? 🥺",
    "Enserio? 😋",
    "Ya casi dices que sí 😏"
];

noBtn.addEventListener("click", function(e){
    e.preventDefault();

    clicks++;

    // Vibrar en celular
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }

    // SI crece
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;

    // NO se hace pequeño
    noScale -= 0.1;
    if(noScale > 0.2){
        noBtn.style.transform = `scale(${noScale})`;
    }

    // Cambiar texto
    if(clicks <= frases.length){
        noBtn.textContent = frases[clicks - 1];
    }

    // Si ya tocaron varias veces → SI ocupa toda la pantalla
    if(clicks >= 5){
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.display = "flex";
        yesBtn.style.justifyContent = "center";
        yesBtn.style.alignItems = "center";
        yesBtn.style.fontSize = "50px";
        yesBtn.style.borderRadius = "0";
        yesBtn.style.zIndex = "9999";
    }
});



