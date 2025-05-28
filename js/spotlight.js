// Spotlight cursor effect
document.addEventListener('DOMContentLoaded', function() {
    const spotlight = document.getElementById('spotlight');
    const spotlightToggle = document.getElementById('spotlight-toggle');
    
    // Toggle spotlight mode
    spotlightToggle.addEventListener('click', function() {
        spotlight.classList.toggle('active');
        document.body.classList.toggle('spotlight-mode');
    });
    
    // Update spotlight position based on mouse movement
    document.addEventListener('mousemove', function(e) {
        if (spotlight.classList.contains('active')) {
            // Get cursor position
            const x = e.clientX;
            const y = e.clientY;
            
            // Update CSS variables for the mask position
            spotlight.style.setProperty('--x', x + 'px');
            spotlight.style.setProperty('--y', y + 'px');
            
            // Move the spotlight circle (optional, as we're using CSS mask)
            const spotlightCircle = spotlight.querySelector('.spotlight-circle');
            if (spotlightCircle) {
                spotlightCircle.style.left = x + 'px';
                spotlightCircle.style.top = y + 'px';
            }
        }
    });
});
