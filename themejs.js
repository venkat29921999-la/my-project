// Run when page loads
document.addEventListener("DOMContentLoaded", function () {

    const body = document.getElementById("body");
    const button = document.getElementById("themeButton");

    // Load saved theme
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.className = savedTheme;
    } else {
        body.className = "light";
    }

    // Button click event
    button.addEventListener("click", function () {

        if (body.className === "light") {
            body.className = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            body.className = "light";
            localStorage.setItem("theme", "light");
        }

    });

});