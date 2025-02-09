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
// skrypt dotuczacu dropdowne w menu 
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
// zmienia wielkosc liter z h4 na h6
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 640) { // Sprawdza szerokość ekranu
        document.querySelectorAll("h4").forEach(h4 => {
            let h6 = document.createElement("h6");
            h6.innerHTML = h4.innerHTML; // Kopiuje zawartość
            h6.className = h4.className; // Kopiuje klasy CSS
            h4.replaceWith(h6); // Zamienia element w DOM
        });
    }
});