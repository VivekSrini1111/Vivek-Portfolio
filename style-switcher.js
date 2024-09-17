// Toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll

window.addEventListener("scroll", () => {

    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme color

const alternateStyles = document.querySelectorAll(".alternate-style")

function setActiveStyle(color){

    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled",true);
        }
    })
}

// light and dark mode

// light and dark mode
const dayNight = document.querySelector(".day-night");
const homeImg = document.querySelector(".home-img img");

// Paths to images for light and dark modes
const lightModeImg = "/Vivek-Light.png";
const darkModeImg = "/Vivek-Dark.png";

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Toggle image based on dark mode
    if (document.body.classList.contains("dark")) {
        homeImg.src = darkModeImg;
    } else {
        homeImg.src = lightModeImg;
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        homeImg.src = darkModeImg; // Set dark mode image on load if in dark mode
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        homeImg.src = lightModeImg; // Set light mode image on load if in light mode
    }
});
