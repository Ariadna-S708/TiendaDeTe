fetch("/includes/header.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-header").innerHTML = html;
    });

fetch("/includes/footer.html")
    .then((res) => res.text())
    .then((html) => {
    document.getElementById("include-footer").innerHTML = html;
});