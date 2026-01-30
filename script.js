document.addEventListener('DOMContentLoaded', () => {
    // 1. System Uptime Counter
    let startTime = Date.now();
    const uptimeElement = document.getElementById('uptime');

    function updateUptime() {
        let diff = Math.floor((Date.now() - startTime) / 1000);
        let h = Math.floor(diff / 3600).toString().padStart(2, '0');
        let m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
        let s = (diff % 60).toString().padStart(2, '0');
        if (uptimeElement) {
            uptimeElement.innerText = `${h}:${m}:${s}`;
        }
    }
    setInterval(updateUptime, 1000);

    // 2. Animate Progress Bars on Scroll
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.fill');
                fills.forEach(fill => {
                    // Pulls the width from the inline style we set in HTML
                    fill.style.opacity = "1"; 
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.impact').forEach(card => observer.observe(card));

    // 3. Glitch Audio/Visual Reset (Optional micro-interaction)
    const glitchTitle = document.querySelector('.glitch');
    glitchTitle.addEventListener('mouseover', () => {
        glitchTitle.style.textShadow = '2px 0 #ff00c1, -2px 0 #00fff9';
    });
    glitchTitle.addEventListener('mouseout', () => {
        glitchTitle.style.textShadow = 'none';
    });
});
