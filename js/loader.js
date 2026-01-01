// Laden Header und Footer
$("header").load("components/header.html header > *");
$("footer").load("components/footer.html footer > *");

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

