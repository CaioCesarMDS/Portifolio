// Config for light mode
function addLightClass() {
    document.body.classList.toggle("light");
}

// Config for scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolling", window.scrollY > 300);
});


export { addLightClass };
