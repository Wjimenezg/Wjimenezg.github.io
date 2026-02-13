const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let noScale = 1;

const frases = [
    "¿Segura? 😢",
    "Piénsalo bien 😭",
    "No seas así 🥺",
    "Última oportunidad 😔",
    "Ya casi dices que sí 😏"
];

let index = 0;

noBtn.addEventListener("click", function(e){
    e.preventDefault();

    // Vibración en celular
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }

    // SI crece
    yesScale += 0.4;
    yesBtn.style.transform = `scale(${yesScale})`;

    // NO se hace pequeño
    noScale -= 0.1;
    if(noScale > 0.3){
        noBtn.style.transform = `scale(${noScale})`;
    }

    // Cambiar texto del botón NO
    if(index < frases.length - 1){
        noBtn.textContent = frases[index];
        index++;
    }

    // Corazones
    crearCorazon();
});

// Crear corazones animados
function crearCorazon(){
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = "30px";
    heart.style.animation = "fade 1s ease-out";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

