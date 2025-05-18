#!/bin/bash

set -e

# Build the Angular web component
npx ng build --configuration webcomponent

# Define source and target directories
SRC_DIR="dist/webcomponent"
DUMMY_TEST_DIR="../../dummy-test/public/webcomponent"

# Create target directory if it doesn't exist
mkdir -p "$DUMMY_TEST_DIR"

# Copy and rename main files without hashes
cp "$SRC_DIR"/main.*.js "$DUMMY_TEST_DIR/main.js"
cp "$SRC_DIR"/polyfills.*.js "$DUMMY_TEST_DIR/polyfills.js"
cp "$SRC_DIR"/runtime.*.js "$DUMMY_TEST_DIR/runtime.js"
cp "$SRC_DIR"/styles.*.css "$DUMMY_TEST_DIR/styles.css"

# Copy other assets (e.g., index.webcomponent.html, 3rdpartylicenses.txt)
cp "$SRC_DIR"/index.webcomponent.html "$DUMMY_TEST_DIR/"
cp "$SRC_DIR"/3rdpartylicenses.txt "$DUMMY_TEST_DIR/" 2>/dev/null || true

echo "Web component build copied and renamed to $DUMMY_TEST_DIR" 