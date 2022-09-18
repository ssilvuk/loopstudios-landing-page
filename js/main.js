const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    //If the nav is closed, open it

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }

    // If the nav is open, close it
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
