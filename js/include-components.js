// Component Loading System
document.addEventListener('DOMContentLoaded', function() {
    // Function to load a component
    function loadComponent(componentId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(componentId).innerHTML = data;
                // After header is loaded, ensure theme icon is correct
                if (componentId === 'header') {
                    // Small delay to ensure DOM is fully ready
                    setTimeout(() => {
                        const currentTheme = document.documentElement.getAttribute('data-theme');
                        if (currentTheme) {
                            const toggleButton = document.querySelector('.theme-toggle');
                            if (toggleButton) {
                                toggleButton.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
                                toggleButton.title = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
                            }
                        }
                    }, 10);
                }
            })
            .catch(error => console.error('Error loading component:', error));
    }

    // Load header and footer (all files are now in root directory)
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
});
