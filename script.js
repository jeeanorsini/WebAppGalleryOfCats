document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link de navegar imediatamente

            // Aqui você pode adicionar a lógica para mostrar um modal
            const projectTitle = this.querySelector('h4').textContent;
            const projectDescription = this.querySelector('p').textContent;

            // Exemplo simples de alerta, você pode substituir por um modal real
            alert(`Você clicou no projeto: ${projectTitle}\n\nDescrição: ${projectDescription}`);

            // Para redirecionar, você pode usar:
            // window.location.href = this.href;
        });
    });
});
