// what code you are about to read is the most fucking beautiful code I have ever written
// i am so proud of this code, i am so proud of myself
// i am so proud of the fact that i was able to write this code
// i am so proud of the fact that i was able to make this code work
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150; // number of stars
    
    // clear any existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // random size (0.5px to 3px) i think
        const size = Math.random() * 2.5 + 0.5;
        
        // random animation delay and duration
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        
        // set styles
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

// load them stars
document.addEventListener('DOMContentLoaded', createStars);

// re-create stars on window resize for better distribution
window.addEventListener('resize', createStars);