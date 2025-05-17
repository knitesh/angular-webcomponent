#!/bin/bash

# Create a directory for web component assets if it doesn't exist
mkdir -p assets

# Copy only the necessary files for the web component
cp ../apps/frontend/dist/frontend/runtime.*.js assets/runtime.js
cp ../apps/frontend/dist/frontend/polyfills.*.js assets/polyfills.js
cp ../apps/frontend/dist/frontend/main.*.js assets/main.js
cp ../apps/frontend/dist/frontend/styles.*.css assets/styles.css

# Copy favicon if it exists
if [ -f "../apps/frontend/dist/frontend/favicon.ico" ]; then
    cp ../apps/frontend/dist/frontend/favicon.ico assets/
fi

echo "Web component assets copied successfully!" 