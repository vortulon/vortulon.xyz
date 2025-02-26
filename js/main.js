
document.addEventListener('DOMContentLoaded', function() {
    // this makes the mouse funny
    document.addEventListener('mousemove', function(e) {
        const container = document.querySelector('.container');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        container.style.transform = `translateY(-5px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // reset transform when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        const container = document.querySelector('.container');
        container.style.transform = 'translateY(-5px)';
    });
    
    // funny link shit
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // copyright year thing, this is actualyl really cool
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} vortulon.xyz`;
    }
});