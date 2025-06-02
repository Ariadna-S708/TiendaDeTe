document.addEventListener("DOMContentLoaded", () => {
fetch("includes/header.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-header").innerHTML = html;
    });

fetch("includes/footer.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-footer").innerHTML = html;
});
})


fetch("includes/header.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-header").innerHTML = html;
    });

fetch("includes/footer.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-footer").innerHTML = html;
});


/* Comentar si no es necesario el document-Problemas con el live server */