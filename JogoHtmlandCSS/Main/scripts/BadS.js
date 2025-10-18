const sigils = ["trash", "Waste", "Garbage", "Get OUT", "NP this guy", "Fraudulent", "weak", "Junk", "Scum", "Vermin", "Rubbish", "Pathetic", "Clown", "Frail", "Feeble", "Puny", "Decrepit", "Powerless", "Vulnerable", "Losers", "Failures", "Disappointments", "Inferior", "Inadequate", "Defective", "Heinous", "Evil", "🐀", "🐭", "🤢", "🤡"];

let sigilContainer = document.querySelector(".sigils-container");
if (!sigilContainer) {
    sigilContainer = document.createElement("div");
    sigilContainer.classList.add("sigils-container");
    document.body.appendChild(sigilContainer);
}

function spawnSigil() {
    const sigil = document.createElement("div");
    sigil.classList.add("sigil");
    sigil.textContent = sigils[Math.floor(Math.random() * sigils.length)];

    sigil.style.left = Math.random() * 100 + "vw";

    sigil.style.top = "110vh";
    const size = Math.random() * 2 + 1; 
    sigil.style.fontSize = `${size}rem`;

    const duration = Math.random() * 6 + 4; 
    sigil.style.animationDuration = `${duration}s`;

    sigilContainer.appendChild(sigil);

    setTimeout(() => sigil.remove(), duration * 1000);
}

setInterval(spawnSigil, Math.random() * 500 + 500);
