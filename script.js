// function myFunction(element) {
//     var x = document.getElementById("myTopnav");

//     if (x.className === "topnav") {
//         x.className += " responsive";
//         element.innerHTML = "close"; // zmień ikonę na "close"
//         element.setAttribute("aria-label", "Zamknij menu"); // zaktualizuj tekst dla czytników ekranu
//     } else {
//         x.className = "topnav";
//         element.innerHTML = "menu"; // przywróć ikonę "menu"
//         element.setAttribute("aria-label", "Otwórz menu"); // przywróć tekst dla czytników ekranu
//     }
// }

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

// Dodaj ten nowy kod
document.addEventListener('click', function (event) {
    var topnav = document.getElementById("myTopnav");
    var header = document.querySelector(".main-header");
    var menuBtn = document.querySelector(".navbtn.icon");

    // Pomijaj kliknięcia na przycisk menu, bo jest już obsługiwane przez myFunction
    if (event.target === menuBtn || event.target.parentNode === menuBtn) {
        return;
    }

    // Sprawdź czy menu jest otwarte i kliknięcie było poza nagłówkiem
    if (topnav.className === "topnav responsive" && !header.contains(event.target)) {
        // Zamknij menu
        topnav.className = "topnav";
        menuBtn.innerHTML = "menu";
        menuBtn.setAttribute("aria-label", "Otwórz menu");
    }
}, true);
