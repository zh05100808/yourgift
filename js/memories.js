// =========================================
// MEMORIES PAGE — PHOTO LIGHTBOX
// =========================================

const memoryPhotos =
    document.querySelectorAll(".memory-photo");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const lightboxClose =
    document.getElementById("lightboxClose");


// =========================================
// OPEN PHOTO
// =========================================

memoryPhotos.forEach(function (photo) {

    photo.addEventListener("click", function () {

        const card =
            photo.closest(".memory-card");

        if (!card || !lightbox) {
            return;
        }

        const title =
            card.querySelector("h2");

        const description =
            card.querySelector("p");


        // Set large image
        lightboxImage.src = photo.src;


        // Get title from card
        if (title) {
            lightboxTitle.textContent =
                title.textContent;
        }


        // Get description from card
        if (description) {
            lightboxDescription.textContent =
                description.textContent;
        }


        // Show lightbox
        lightbox.classList.add("active");

        // Stop background scrolling
        document.body.style.overflow = "hidden";

    });

});


// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


// Close using X button

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


// Close by clicking outside the image/card

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        }
    );

}


// =========================================
// CLOSE USING ESCAPE KEY
// =========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeLightbox();
        }

    }
);
