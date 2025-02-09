document.addEventListener("DOMContentLoaded", function () {
    // skrtpy dotyczacy nabar 
    const menu = document.getElementById("myTopnav");
    const icon = document.querySelector(".icon");

    icon.addEventListener("click", function (event) {
        menu.classList.toggle("responsive");
        event.stopPropagation(); // Zapobiega natychmiastowemu zamknięciu
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !icon.contains(event.target)) {
            menu.classList.remove("responsive");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            let dropdownContent = this.nextElementSibling;

            // Jeśli już otwarte, zamknij
            if (dropdownContent.classList.contains("open")) {
                dropdownContent.classList.remove("open");
            } else {
                // Zamknij inne dropdowny
                document.querySelectorAll(".dropdown-content").forEach(menu => {
                    menu.classList.remove("open");
                });

                // Otwórz tylko kliknięty
                dropdownContent.classList.add("open");
            }
        });
    });
});
