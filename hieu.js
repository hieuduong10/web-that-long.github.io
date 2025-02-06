const buttonsToFade = ["fake", "not", "wrong"];

buttonsToFade.forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener("mouseover", function() {
        button.style.transition = "opacity 0.2s ease-out";
        button.style.opacity = "0";
        setTimeout(() => {
            button.style.visibility = "hidden"; // Giữ nguyên vị trí nhưng ẩn nút
        }, 200);
    });
});
