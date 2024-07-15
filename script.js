
document.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelectorAll('.control');
    const sections = document.querySelectorAll('.section');
    let currentSectionId = null;

    controls.forEach(control => {
        control.addEventListener('click', function() {
            const dataId = this.getAttribute('data-id');

            // Check if clicking the same control
            if (dataId === currentSectionId) {
                return; // Do nothing if clicking the same section
            }

            // Remove 'active-btn' class from all controls
            controls.forEach(c => c.classList.remove('active-btn'));

            // Add 'active-btn' class to the clicked control
            this.classList.add('active-btn');

            // Hide the current active section
            if (currentSectionId) {
                const currentSection = document.getElementById(currentSectionId);
                if (currentSection) {
                    currentSection.classList.remove('active');
                }
            }

            // Show the corresponding section
            const targetSection = document.getElementById(dataId);
            if (targetSection) {
                targetSection.classList.add('active');
                currentSectionId = dataId; // Update current section id
            }
        });
    });
});
