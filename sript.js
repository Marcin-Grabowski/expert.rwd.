function myFunction(element) {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
        element.innerHTML = "close"; // zmień ikonę na "close"
        element.setAttribute("aria-label", "Zamknij menu"); // zaktualizuj tekst dla czytników ekranu
    } else {
        x.className = "topnav";
        element.innerHTML = "menu"; // przywróć ikonę "menu"
        element.setAttribute("aria-label", "Otwórz menu"); // przywróć tekst dla czytników ekranu
    }
}

// // skrypt dotuczacu dropdowne w menu 
// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownButtons = document.querySelectorAll(".dropdown-btn");

//     dropdownButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             let dropdownContent = this.nextElementSibling;

//             // Jeśli już otwarte, zamknij
//             if (dropdownContent.classList.contains("open")) {
//                 dropdownContent.classList.remove("open");
//             } else {
//                 // Zamknij inne dropdowny
//                 document.querySelectorAll(".dropdown-content").forEach(menu => {
//                     menu.classList.remove("open");
//                 });

//                 // Otwórz tylko kliknięty
//                 dropdownContent.classList.add("open");
//             }
//         });
//     });
// });
