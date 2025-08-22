/**
 * Wyrd Studios Website - Component Loading System
 * 
 * Copyright (c) 2025 Wyrd Studios, Inc. All rights reserved.
 * 
 * This software is proprietary and confidential. Unauthorized copying, 
 * distribution, modification, public display, or public performance of 
 * this software is strictly prohibited.
 * 
 * This software is the confidential and proprietary information of 
 * Wyrd Studios, Inc. It is protected by copyright law and international 
 * treaties. Unauthorized reproduction or distribution of this software, 
 * or any portion of it, may result in severe civil and criminal penalties, 
 * and will be prosecuted to the maximum extent possible under the law.
 * 
 * For licensing inquiries, contact: info@thewyrdstudios.com
 * 
 * Wyrd Studios, Inc.
 * Building technology that serves humanity.
 */

// Component Loading System
document.addEventListener('DOMContentLoaded', function() {
    // Function to load a component
    function loadComponent(componentId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(componentId).innerHTML = data;
                // After header is loaded, ensure theme icon is correct and set active navigation
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
                        
                        // Attach theme toggle event listener
                        const themeToggleButton = document.querySelector('.theme-toggle');
                        if (themeToggleButton && typeof toggleTheme === 'function') {
                            themeToggleButton.addEventListener('click', toggleTheme);
                        }
                        
                        // Set active navigation after header is loaded
                        if (typeof setActiveNavigation === 'function') {
                            setActiveNavigation();
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
