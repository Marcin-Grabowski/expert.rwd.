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


