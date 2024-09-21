const tecnologies = document.querySelectorAll(".item");
const nameContainer = document.querySelector(".name-container");
const skillNameField = document.querySelector(".skill-name p");

tecnologies.forEach((tech) => {
    tech.addEventListener("mouseover", () => {
        nameContainer.style.opacity = "1";
        const techId = tech.id;
        skillNameField.innerHTML = `${techId}`;
    });

    tech.addEventListener("mouseout", () => {
        nameContainer.style.opacity = "0";
    })
});
