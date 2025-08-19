# Wyrd Studios Website

A modern, responsive website for Wyrd Studios featuring automatic theme detection based on user system preferences.

## Features

- **Automatic Theme Detection**: Automatically detects and applies the user's system theme preference (light/dark mode)
- **Manual Theme Toggle**: Users can manually override the system preference with a theme toggle button
- **Responsive Design**: Optimized for all device sizes
- **Smooth Transitions**: Elegant theme switching with smooth color transitions
- **Accessibility**: ARIA labels and semantic HTML for screen readers

## Theme System

The website now automatically detects your system's color scheme preference and applies the appropriate theme:

- **Light Theme**: Clean, bright design with dark text on light backgrounds
- **Dark Theme**: Easy-on-the-eyes design with light text on dark backgrounds

### How It Works

1. **System Detection**: On page load, the website checks your system's `prefers-color-scheme` setting
2. **Automatic Application**: Applies the appropriate theme based on your system preference
3. **Real-time Updates**: Responds to system theme changes in real-time
4. **User Override**: Click the theme toggle button (🌙/☀️) in the navigation to manually switch themes
5. **Persistence**: Your manual theme choice is remembered across browser sessions

### Browser Support

- **Modern Browsers**: Full support for automatic theme detection and switching
- **Older Browsers**: Graceful fallback to light theme with manual toggle functionality
- **JavaScript Disabled**: CSS media query fallback ensures basic theme functionality

## File Structure

- `wyrdstudioswebsite.html` - Main website file with integrated theme system
- `wyrdstudioswebsite-backup.html` - Backup of the original light theme version
- `wyrdstudioswebsite-dark-backup.html` - Backup of the original dark theme version

## Development

The website uses:
- **CSS Custom Properties** for dynamic theme switching
- **JavaScript** for theme detection and user preference management
- **CSS Media Queries** for system preference fallback
- **Smooth Transitions** for elegant theme changes

## Maintenance

- **Single Source of Truth**: All content and styling is now in one file
- **Easy Updates**: Modify content once instead of maintaining duplicate files
- **Theme Modifications**: Update CSS custom properties to modify theme colors
- **New Themes**: Add new theme variations by extending the CSS custom properties system