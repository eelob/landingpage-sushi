// Efeito de rolagem suava
document.querySelector('.scroll').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight - 100,
        behavior: 'smooth'
    });
});