document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".product-small-img img");
    const fullImg = document.getElementById("imageBox");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            fullImg.src = thumbnail.src;
            fullImg.alt = thumbnail.alt;
        });
    });
});