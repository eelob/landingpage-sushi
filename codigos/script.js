// Efeito de rolagem suave
document.querySelector('.scroll').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
    });
});