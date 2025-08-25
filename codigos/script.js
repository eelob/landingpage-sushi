// Efeito de rolagem suave
document.querySelector('.scroll').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight - 90,
        behavior: 'smooth'
    });
});

// Animação para os números (contagem progressiva)
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        const suffix = number.textContent.replace(/[0-9]/g, '');
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const animate = () => {
            if (count < target) {
                count += increment;
                number.textContent = Math.floor(count) + suffix;
                requestAnimationFrame(animate);
            } else {
                number.textContent = target + suffix;
            }
        };
        
// Animação quando a seção estiver visível
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                observer.unobserve(number.parentElement);
            }
        });
        
        observer.observe(number.parentElement);
    });
});