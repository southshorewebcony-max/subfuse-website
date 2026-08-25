const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    const openMenu = () => {
        hamburger.classList.add("active");
        navLinks.classList.add("active");

        hamburger.setAttribute("aria-expanded", "true");

        document.documentElement.classList.add("nav-open");
        document.body.classList.add("nav-open");
    };

    const closeMenu = () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");

        document.documentElement.classList.remove("nav-open");
        document.body.classList.remove("nav-open");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu whenever a link is tapped
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close automatically if the viewport grows back to desktop size
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
            closeMenu();
        }
    });

    // Close on Escape for keyboard users
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
            closeMenu();
        }
    });
}