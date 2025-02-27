function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const size = Math.random() * 2.5 + 0.5;
        
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
window.addEventListener('resize', createStars);