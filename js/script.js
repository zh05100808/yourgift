/* =========================================================
   WELCOME PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   GET ELEMENTS
========================================================= */

const yesButton = document.getElementById("yesButton");
const heartExplosion = document.getElementById("heartExplosion");


/* =========================================================
   YES BUTTON
========================================================= */

yesButton.addEventListener("click", () => {

    // Create heart explosion
    createHeartExplosion();

    // Button animation
    yesButton.style.transform = "scale(1.12)";

    setTimeout(() => {
        yesButton.style.transform = "";
    }, 250);

    /*
        PAGE 2 WILL BE CONNECTED HERE
        IN THE NEXT STEP.

        For now, the button only creates
        the romantic heart explosion.
    */
});


/* =========================================================
   HEART EXPLOSION
========================================================= */

function createHeartExplosion() {

    // Remove previous hearts
    heartExplosion.innerHTML = "";

    const numberOfHearts = 24;

    for (let i = 0; i < numberOfHearts; i++) {

        const heart = document.createElement("span");

        heart.className = "explosion-heart";

        heart.innerHTML = "♥";

        // Random direction
        const angle =
            (Math.PI * 2 * i) / numberOfHearts;

        const distance =
            120 + Math.random() * 220;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.style.setProperty("--x", `${x}px`);
        heart.style.setProperty("--y", `${y}px`);

        // Random size
        const size =
            14 + Math.random() * 20;

        heart.style.fontSize = `${size}px`;

        // Slight animation delay
        heart.style.animationDelay =
            `${Math.random() * 0.15}s`;

        heartExplosion.appendChild(heart);
    }

    // Remove hearts after animation
    setTimeout(() => {
        heartExplosion.innerHTML = "";
    }, 1800);
}


/* =========================================================
   SUBTLE RANDOM PARTICLE MOVEMENT
========================================================= */

const particles =
    document.querySelectorAll(".particle");

particles.forEach((particle) => {

    const randomDelay =
        Math.random() * 5;

    const randomDuration =
        5 + Math.random() * 4;

    particle.style.animationDelay =
        `${randomDelay}s`;

    particle.style.animationDuration =
        `${randomDuration}s`;
});

