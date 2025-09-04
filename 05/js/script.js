document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bar
    const progressFill = document.querySelector('.progress-fill');
    setTimeout(() => {
        progressFill.style.width = '94%';
    }, 300);

    // Add hover effect to the button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.backgroundColor = '#00d668';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.backgroundColor = '#00f076';
    });
});