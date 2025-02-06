const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
