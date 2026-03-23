function scrollContacto() {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
}

// Animación al hacer scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Consulta enviada correctamente");
});