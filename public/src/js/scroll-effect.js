const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolling", window.scrollY > 300);
});
