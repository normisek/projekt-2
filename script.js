// Scroll to top button functionality
const scrollTopButton = document.getElementById("scroll-top");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollTopButton.classList.add("visible");
    }
    else {
        scrollTopButton.classList.remove("visible");
    }
});

scrollTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});