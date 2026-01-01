// Laden Header und Footer
$("header").load("components/header.html header > *");
$("footer").load("components/footer.html footer > *");

// Suchfunktion (bzw. Filtern der Suchbegriffe)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form[role='search']");
    const searchInput = document.getElementById("glossar-suche-input");
    const clearBtn = document.getElementById("clear-search");
    const dl = document.querySelector("section[aria-labelledby='glossar-uebersicht'] dl");
    const dts = dl.querySelectorAll("dt");

    // "Kein Eintrag gefunden" im neunen <p>-Tag anzeigen
    let noResult = document.createElement("p");
    noResult.textContent = "Kein Eintrag gefunden.";
    noResult.style.display = "none";
    dl.parentNode.insertBefore(noResult, dl.nextSibling);

    // Suchen auslösen
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        let matchFound = false;

        dts.forEach(dt => {
            const dd = dt.nextElementSibling;
            const text = dt.textContent + " " + dd.textContent;
            if (text.toLowerCase().includes(query)) {
                dt.style.display = "";
                dd.style.display = "";
                matchFound = true;
            } else {
                dt.style.display = "none";
                dd.style.display = "none";
            }
        });

        noResult.style.display = matchFound ? "none" : "block";
    });

    // Suchfeld zurücksetzen/leeren
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        dts.forEach(dt => {
            dt.style.display = "";
            dt.nextElementSibling.style.display = "";
        });
        noResult.style.display = "none";
    });
});


// Laden des Zeitstempels
document.addEventListener("DOMContentLoaded", function () {
    const t = document.getElementById("last-updated");
    if (!t) return;

    const d = new Date(document.lastModified);
    t.textContent =
        d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }) +
        " " +
        d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    t.setAttribute("datetime", d.toISOString());
});

