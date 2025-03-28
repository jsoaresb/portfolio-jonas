window.onload = function () {
    // Adiciona efeito de brilho nos botões interativos
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.8)';
        });
        button.addEventListener('mouseout', () => {
            button.style.boxShadow = 'none';
        });
    });

    // Adiciona efeito de brilho nos ícones das redes sociais
    document.querySelectorAll('.redes-sociais a').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.textShadow = '0 0 10px white';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.textShadow = 'none';
        });
    });
};