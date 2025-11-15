// Function to load HTML includes in all files
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;

                if (elementId === 'header-placeholder') {
                    const toggleButton = document.querySelector('.menu-toggle');
                    const navMenu = document.querySelector('.nav-menu');

                    if (toggleButton && navMenu) {
                        toggleButton.addEventListener('click', () => {
                            toggleButton.classList.toggle('active');
                            navMenu.classList.toggle('active');
                        });
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadHTML('header-placeholder', 'includes/header.html');
    loadHTML('footer-placeholder', 'includes/footer.html');
});
