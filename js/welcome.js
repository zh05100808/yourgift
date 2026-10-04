// =========================================
// WELCOME PAGE JAVASCRIPT
// =========================================

const yesButton = document.getElementById("yesButton");

if (yesButton) {

    yesButton.addEventListener("click", function () {

        // Create heart explosion
        for (let i = 0; i < 20; i++) {

            const heart = document.createElement("span");

            heart.innerHTML = "❤️";

            heart.style.position = "fixed";
            heart.style.left = "50%";
            heart.style.top = "50%";

            heart.style.fontSize =
                Math.floor(Math.random() * 15 + 15) + "px";

            heart.style.zIndex = "9999";
            heart.style.pointerEvents = "none";

            heart.style.transition = "all 1s ease";

            document.body.appendChild(heart);

            const x =
                (Math.random() - 0.5) * window.innerWidth;

            const y =
                (Math.random() - 0.5) * window.innerHeight;

            setTimeout(() => {

                heart.style.transform =
                    `translate(${x}px, ${y}px) scale(1.5)`;

                heart.style.opacity = "0";

            }, 50);

            setTimeout(() => {
                heart.remove();
            }, 1100);
        }

        // Open Page 2
        setTimeout(() => {
            window.location.href = "memories.html";
        }, 700);

    });

}