# Wyrd Studios Website

A human-centered technology company website built with modern web standards, featuring responsive design, dark/light theme support, and component-based architecture.

## 🎯 Project Overview

Wyrd Studios is a human-centered product studio creating technology that puts people first. This website showcases our privacy-first, AI-enhanced solutions and AI workshops while demonstrating our commitment to building technology that serves humanity.

**Live Site:** [https://thewyrdstudios.com](https://thewyrdstudios.com)

## 🏗️ Architecture & Structure

### File Organization
```
website/
├── index.html              # Homepage with company overview
├── work.html              # Work philosophy and approach
├── founders.html          # Team information
├── workshops.html         # AI workshop offerings
├── contact.html           # Contact information
├── privacy-policy.html    # Privacy policy
├── terms-of-service.html  # Terms of service
├── 404.html              # Custom 404 page
├── components/            # Reusable HTML components
│   ├── header.html       # Navigation component
│   └── footer.html       # Footer with newsletter signup
├── css/                  # Stylesheets
│   ├── styles.css        # Source CSS (unminified)
│   └── styles.min.css    # Minified CSS (production)
├── js/                   # JavaScript files
│   ├── main.js           # Core functionality
│   ├── main.min.js       # Minified main.js
│   ├── include-components.js  # Component loader
│   └── include-components.min.js  # Minified component loader
├── images/               # Optimized images and assets
├── tools/                # Development utilities
│   ├── minify.sh         # CSS/JS minification script
│   ├── run_server.py     # Local development server
│   └── package.json      # Node.js dependencies
├── robots.txt            # Search engine directives
├── sitemap.xml           # XML sitemap
└── CNAME                 # Custom domain configuration
```

### Technology Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS custom properties (variables)
- **Fonts:** Inter (body) and Syne Mono (monospace) from Google Fonts
- **Icons:** Emoji-based icons for simplicity
- **Analytics:** Google Analytics (gtag.js)
- **Newsletter:** MailerLite integration
- **Build Tools:** Node.js-based minification (clean-css-cli, terser)

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14.17.0 or higher)
- **npm** (v6.14.13 or higher)
- **Python 3** (for local development server)
- **Modern web browser** with ES6+ support

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WyrdStudios/website.git
   cd website
   ```

2. **Install Node.js dependencies:**
   ```bash
   cd tools
   npm install
   cd ..
   ```

3. **Start local development server:**
   ```bash
   cd tools
   python3 run_server.py
   ```
   
   The server will automatically open your browser to `http://localhost:8000`

## 🛠️ Development Workflow

### Making Changes

1. **Edit source files:**
   - `css/styles.css` - Main stylesheet
   - `js/main.js` - Core JavaScript functionality
   - `js/include-components.js` - Component loading system
   - HTML files for content changes

2. **Minify assets after changes:**
   ```bash
   cd tools
   ./minify.sh
   cd ..
   ```
   
   **⚠️ Important:** Always run the minify script after updating CSS or JS files. This ensures the production-ready minified versions are generated.

3. **Test changes locally** using the Python development server

4. **Commit and push** your changes

### Component System

The website uses a component-based architecture for maintainable code:

- **Header Component** (`components/header.html`): Navigation with theme toggle
- **Footer Component** (`components/footer.html`): Newsletter signup and links
- **Component Loader** (`js/include-components.js`): Dynamically loads components

Components are loaded via JavaScript and support:
- Theme persistence across page loads
- Active navigation state management
- Responsive mobile navigation

### Theme System

The website features a comprehensive theming system:

- **Light Theme** (default): Clean, bright interface
- **Dark Theme**: Dark mode with proper contrast
- **System Preference Detection**: Automatically matches user's OS preference
- **Theme Persistence**: Remembers user's choice in localStorage
- **CSS Custom Properties**: Centralized color and spacing variables

Theme toggle is located in the header navigation.

## 🎨 Styling & Design

### CSS Architecture

- **CSS Custom Properties**: Centralized theming variables
- **Mobile-First Design**: Responsive breakpoints using CSS Grid and Flexbox
- **Component-Based CSS**: Modular styles organized by functionality
- **Performance Optimized**: Critical CSS inlined, non-critical CSS loaded asynchronously

### Key Design Features

- **Responsive Typography**: Fluid type scaling using `clamp()`
- **Accessibility**: High contrast ratios, semantic HTML, ARIA labels
- **Performance**: Optimized images (WebP with JPEG fallbacks)
- **SEO**: Structured data, meta tags, sitemap

### Color Palette

```css
/* Light Theme */
--bg-primary: #FBFBFB
--bg-secondary: #ffffff
--text-primary: #2E2E2E
--accent-primary: #D7C10C (gold)
--accent-secondary: #D09FB6 (rose)

/* Dark Theme */
--bg-primary: #1a1a1a
--bg-secondary: #2E2E2E
--text-primary: #FBFBFB
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- CSS variables for responsive spacing and typography
- Touch-friendly navigation
- Optimized images for different screen densities
- Viewport meta tags for proper mobile rendering

## 🔧 JavaScript Functionality

### Core Features

- **Theme Management**: Light/dark mode toggle with system preference detection
- **Component Loading**: Dynamic header/footer inclusion
- **Newsletter Integration**: MailerLite form handling with validation
- **Mobile Navigation**: Responsive mobile menu with click-outside handling
- **Active Navigation**: Current page highlighting
- **Email Copy**: One-click email copying functionality
- **Back to Top**: Smooth scroll to top button

### Event Handling

- **DOM Ready**: Theme initialization and component setup
- **Theme Changes**: System preference detection and manual toggle
- **Mobile Menu**: Touch and keyboard navigation support
- **Form Submission**: Newsletter signup with error handling

## 📊 SEO & Performance

### Search Engine Optimization
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: Schema.org markup for organization and services
- **Sitemap**: XML sitemap with image optimization
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevents duplicate content issues

### Performance Features
- **Minified Assets**: CSS and JavaScript minification
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Preconnect and optimized Google Fonts loading
- **Lazy Loading**: Images load only when needed
- **Critical CSS**: Above-the-fold styles inlined

### Security Headers
- **Content Security Policy**: Restricts resource loading
- **Strict Transport Security**: HTTPS enforcement
- **X-Content-Type-Options**: MIME type sniffing prevention

## 🧪 Testing & Quality Assurance

### Browser Testing
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: Screen reader compatibility, keyboard navigation

### Performance Testing
- **Lighthouse**: Core Web Vitals optimization
- **PageSpeed Insights**: Mobile and desktop performance
- **WebPageTest**: Real-world performance metrics

## 🚀 Deployment

### Production Build
1. Ensure all changes are minified using `./tools/minify.sh`
2. Commit minified files to repository
3. Deploy to hosting provider (GitHub Pages, Netlify, etc.)

### Environment Variables
- **Google Analytics ID**: `G-LF47E8ZTES`
- **MailerLite Integration**: Newsletter signup forms
- **Custom Domain**: `thewyrdstudios.com`

## 📝 Content Management

### Page Structure
- **Homepage**: Company overview, value propositions, focus areas
- **Work**: Philosophy and approach to technology
- **Founders**: Team bios and expertise
- **Workshops**: AI training offerings and tiers
- **Contact**: Direct email contact
- **Legal**: Privacy policy and terms of service

### Content Updates
- Edit HTML files directly
- Update images in `images/` directory
- Modify CSS for styling changes
- Update JavaScript for functionality changes
- **Remember to run minification script after changes**

## 🔍 Troubleshooting

### Common Issues

1. **Components not loading:**
   - Check browser console for errors
   - Verify file paths in `include-components.js`
   - Ensure local server is running

2. **Theme not persisting:**
   - Check localStorage in browser dev tools
   - Verify theme toggle event listeners
   - Check for JavaScript errors

3. **Styles not updating:**
   - Run `./tools/minify.sh` after CSS changes
   - Clear browser cache
   - Check CSS file paths

4. **Newsletter not working:**
   - Verify MailerLite integration
   - Check browser console for fetch errors
   - Test form validation

### Debug Mode
- Open browser developer tools
- Check Console tab for JavaScript errors
- Use Network tab to verify resource loading
- Inspect Elements tab for CSS debugging

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing patterns and conventions
2. **Testing**: Test changes across different devices and browsers
3. **Minification**: Always run minification script after changes
4. **Commit Messages**: Use descriptive commit messages
5. **Pull Requests**: Create PRs for significant changes

### File Naming Conventions
- **HTML**: kebab-case (e.g., `privacy-policy.html`)
- **CSS**: kebab-case (e.g., `styles.css`)
- **JavaScript**: camelCase (e.g., `includeComponents.js`)
- **Images**: descriptive names with format extensions

## 📚 Additional Resources

### Documentation
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Web Performance](https://web.dev/performance/)

### Tools
- **CSS Minification**: clean-css-cli
- **JavaScript Minification**: terser
- **Local Development**: Python HTTP server
- **Image Optimization**: WebP conversion tools

## 📄 License

This project is proprietary to Wyrd Studios. All rights reserved.

## 📞 Support

For technical questions or development support:
- **Email**: info@thewyrdstudios.com
- **GitHub Issues**: [Repository Issues](https://github.com/WyrdStudios/website/issues)

---

**Built with ❤️ by Wyrd Studios - Building technology that serves humanity.**
