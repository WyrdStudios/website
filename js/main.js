        function handleNewsletterSubmit(event) {
          event.preventDefault();
          
          const form = event.target;
          const emailInput = form.querySelector('input[name="fields[email]"]');
          const email = emailInput.value;
          
          if (!email || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
          }
          
          // Show loading state
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalText = submitBtn.textContent;
          submitBtn.textContent = 'Subscribing...';
          submitBtn.disabled = true;
          
          // Send to MailerLite
          fetch('https://assets.mailerlite.com/jsonp/1749703/forms/163368800993936434/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `fields[email]=${encodeURIComponent(email)}&ml-submit=1&anticsrf=true`
          })
          .then(response => {
            // Show success message inline
            const formContent = form.closest('.ml-form-embedBody');
            formContent.innerHTML = `
              <div class="ml-form-successBody row-success">
                <div class="ml-form-successContent">
                  <h4>Success!</h4>
                  <p>You have successfully joined our mailing list.</p>
                </div>
              </div>
            `;
          })
          .catch(error => {
            console.error('Subscription error:', error);
            alert('There was an error. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          });
        }
        
        function ml_webform_success_29895363() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-29895363 .row-success').show();
          $('.ml-subscribe-form-29895363 .row-form').hide();
        }
        
        // Theme Management Functions
        function detectAndApplyTheme() {
            const userPreference = localStorage.getItem('theme');
            const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (userPreference) {
                applyTheme(userPreference);
            } else {
                applyTheme(systemPreference ? 'dark' : 'light');
            }
        }

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            // Don't update icon here as the header component might not be loaded yet
            // The icon will be updated when the header component loads in include-components.js
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            // Manually update the icon since applyTheme no longer does it
            updateThemeToggleIcon(newTheme);
        }

        function updateThemeToggleIcon(theme) {
            const toggleButton = document.querySelector('.theme-toggle');
            if (toggleButton) {
                toggleButton.innerHTML = theme === 'dark' ? '☀️' : '🌙';
                toggleButton.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
            }
        }

        // Listen for system theme changes
        function setupSystemThemeListener() {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            darkModeMediaQuery.addEventListener('change', (e) => {
                // Only apply system preference if user hasn't set a manual preference
                if (!localStorage.getItem('theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    applyTheme(newTheme);
                    // Manually update the icon since applyTheme no longer does it
                    updateThemeToggleIcon(newTheme);
                }
            });
        }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', () => {
            detectAndApplyTheme();
            setupSystemThemeListener();
            setupMobileMenuClickOutside();
            
            // Check if page is loaded in iframe and apply iframe-specific styles
            if (window.self !== window.top) {
                document.body.setAttribute('data-iframe', 'true');
            }
            
            // Set active navigation state based on current page
            setActiveNavigation();
        });

        // Function to set active navigation state based on current page
        function setActiveNavigation() {
            const currentPath = window.location.pathname;
            const navItems = document.querySelectorAll('.nav-item');
            
            // Remove active class from all nav items
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Determine which nav item should be active based on current page
            let activeNavItem;
            
            if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/') || currentPath.includes('index.html')) {
                // Home page
                activeNavItem = document.querySelector('.nav-item[href="index.html"]');
            } else if (currentPath.includes('work.html')) {
                // Work page
                activeNavItem = document.querySelector('.nav-item[href="work.html"]');
            } else if (currentPath.includes('founders.html')) {
                // Founders page
                activeNavItem = document.querySelector('.nav-item[href="founders.html"]');
            } else if (currentPath.includes('workshops.html')) {
                // Workshops page
                activeNavItem = document.querySelector('.nav-item[href="workshops.html"]');
            } else if (currentPath.includes('contact.html')) {
                // Contact page
                activeNavItem = document.querySelector('.nav-item[href="contact.html"]');
            }
            
            // Add active class to the appropriate nav item
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }



        // Setup click outside to close mobile menu
        function setupMobileMenuClickOutside() {
            document.addEventListener('click', (event) => {
                const navItems = document.querySelector('.nav-items');
                const mobileToggle = document.querySelector('.mobile-nav-toggle');
                const navContainer = document.querySelector('.nav-container');
                
                // Check if mobile menu is open and click is outside navigation
                if (navItems && navItems.classList.contains('active') && 
                    !navContainer.contains(event.target)) {
                    closeMobileMenu();
                }
            });

            // Close mobile menu on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    closeMobileMenu();
                }
            });
        }

        // Mobile Navigation Functions
        function toggleMobileMenu() {
            const navItems = document.querySelector('.nav-items');
            const mobileToggle = document.querySelector('.mobile-nav-toggle');
            
            navItems.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        }

        function closeMobileMenu() {
            const navItems = document.querySelector('.nav-items');
            const mobileToggle = document.querySelector('.mobile-nav-toggle');
            
            navItems.classList.remove('active');
            mobileToggle.classList.remove('active');
        }



        // Footer functionality
        function copyEmail() {
            const email = 'info@thewyrdstudios.com';
            navigator.clipboard.writeText(email).then(() => {
                // Show success message
                const copyBtn = document.querySelector('.email-copy-btn');
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#4CAF50';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                const copyBtn = document.querySelector('.email-copy-btn');
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#4CAF50';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            });
        }

        function subscribeNewsletter() {
            const email = document.getElementById('newsletter-email').value;
            if (email && email.includes('@')) {
                // Show success message
                const subscribeBtn = document.querySelector('.newsletter-subscribe-btn');
                const originalText = subscribeBtn.textContent;
                subscribeBtn.textContent = 'Subscribed!';
                subscribeBtn.style.background = '#4CAF50';
                
                // Clear input
                document.getElementById('newsletter-email').value = '';
                
                setTimeout(() => {
                    subscribeBtn.textContent = originalText;
                    subscribeBtn.style.background = '';
                }, 2000);
            }
        }





        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', () => {
            const backToTopBtn = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
