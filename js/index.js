document.addEventListener("DOMContentLoaded", function() {
    /* Typing Effect */
    const heroText = document.querySelector('.hero-content h1');
    const heroMessage = heroText.innerHTML;
    heroText.innerHTML = '';
    let index = 0;

    function typeEffect() {
        if (index < heroMessage.length) {
            heroText.innerHTML += heroMessage.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Typing speed
        }
    }
    typeEffect();

    /* Smooth Scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* Parallax Effect */
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            let scrollPosition = window.pageYOffset;
            section.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Parallax speed
        });
    });

    /* Ripple Hover Effect on Links */
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => ripple.remove(), 600); // Remove after animation
        });
    });

    /* Floating Stars Background */
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.appendChild(starContainer);

    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Varying animation speed
        star.style.animationDelay = `${Math.random() * 10}s`; // Random delay
        starContainer.appendChild(star);
    }
});
