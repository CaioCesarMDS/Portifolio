const categories = document.querySelectorAll(".categories button");
const slider = document.querySelector(".slider");
const items = slider.querySelectorAll(".item");
const stadardCategory = slider.querySelectorAll(".item.languages").length;

let lengthItems = stadardCategory;
let itemsSlider = [0];
let active = 0;

categories.forEach((category) => {
    category.addEventListener("click", () => {
        selectCategory(category);
        filterByActiveCategory();
    });
});

function selectCategory(category) {
    categories.forEach((category) => {
        category.classList.remove("active");
    });
    category.classList.add("active");
}

function filterByActiveCategory() {
    const activeCategory = document.querySelector("button.active").value;
    itemsSlider = [];
    for (let i = 0; i <= items.length - 1; i++) {
        const itemClass = items[i].classList.value.split(" ")[1];
        if (activeCategory === itemClass) {
            itemsSlider.push(i);
        }
    }
    active = itemsSlider[0];
    lengthItems = itemsSlider[itemsSlider.length - 1];
}

function nextSlider() {
    if (active + 1 > lengthItems) {
        active = itemsSlider[0];
    } else {
        active++;
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    slider.style.left = -checkLeft + "px";
}

function startSlider() {
    setInterval(() => {
        nextSlider();
    }, 3000);
}

startSlider();
