document.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelectorAll('.control');
    const sections = document.querySelectorAll('.section');

    controls.forEach(control => {
        control.addEventListener('click', function() {
            // Remove active class from all controls
            controls.forEach(c => c.classList.remove('active-btn'));
            // Add active class to clicked control
            this.classList.add('active-btn');

            const dataId = this.getAttribute('data-id');

            sections.forEach(section => section.classList.remove('active'));

            // Show corresponding section
            const targetSection = document.getElementById(dataId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});
