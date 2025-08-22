#!/bin/bash

# Minification script for Wyrd Studios, Inc. website
# Copyright (c) 2025 Wyrd Studios, Inc. All rights reserved.
# 
# This software is proprietary and confidential. Unauthorized copying, 
# distribution, modification, public display, or public performance of 
# this software is strictly prohibited.
# 
# This script creates minified versions of CSS and JavaScript files
# For licensing inquiries, contact: info@thewyrdstudios.com

echo "Starting minification process..."

# Minify CSS
echo "Minifying CSS..."
npx clean-css-cli ../css/styles.css -o ../css/styles.min.css

# Minify JavaScript files separately
echo "Minifying JavaScript..."

# Minify main.js
npx terser ../js/main.js -o ../js/main.min.js --compress --mangle

# Minify include-components.js
npx terser ../js/include-components.js -o ../js/include-components.min.js --compress --mangle

echo "Minification complete!"
echo "Generated files:"
echo "  - css/styles.min.css"
echo "  - js/main.min.js"
echo "  - js/include-components.min.js"
