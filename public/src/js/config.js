// Config for light mode
const projectNames = document.querySelectorAll(".project-content .project-name p");

function addLightClass() {
    document.body.classList.toggle("light");

    projectNames.forEach((projectName) => {
        if (document.body.classList.contains("light")) {
            projectName.style.color = "#263238";
        } else {
            projectName.style.color = "#e8eaec";
        }
    });
}

// Config for scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolling", window.scrollY > 300);
});

// Project configuration for tab navigation
const images = document.querySelectorAll(".project-img img");

images.forEach((img) => {
    const projectName = img
        .closest(".project")
        .querySelector(".project-content .project-name p");

    img.addEventListener("focus", () => {
        projectName.style.color = "#fa9c22";
    });

    img.addEventListener("blur", () => {
        if (document.body.classList.contains("light")) {
            projectName.style.color = "#263238";
        } else {
            projectName.style.color = "#e8eaec";
        }
    });
});

export { addLightClass };
