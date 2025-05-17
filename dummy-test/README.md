# Chatbot Web Component Test Environment

This directory contains a test environment for the Angular Chatbot web component. It demonstrates how to use the chatbot as a web component in a pure HTML environment.

## Setup

1. Build the Angular application:
```bash
cd ../apps/frontend
ng build
```

2. Copy the web component assets:
```bash
cd ../../dummy-test
./copy-assets.sh
```

Or combine both steps in one command:
```bash
cd ../apps/frontend && ng build && cd ../../dummy-test && ./copy-assets.sh
```

## Running the Test Environment

Start a local server using one of these methods:

### Using Node's http-server (Recommended)
```bash
npx http-server -p 8080
```

### Using Python's built-in server
```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Directory Structure

```
dummy-test/
├── assets/           # Web component assets (copied from Angular build)
├── index.html        # Test page with web component demo
├── copy-assets.sh    # Script to copy build assets
└── README.md         # This file
```

## Web Component Usage

The chatbot can be used in any HTML page by including the necessary scripts and using the custom element:

```html
<!-- Load the web component bundles -->
<script src="assets/runtime.js"></script>
<script src="assets/polyfills.js"></script>
<script src="assets/main.js"></script>

<!-- Use the web component -->
<app-chatbot
    title="Support Assistant"
    initial-message="Hello! How can I help you today?"
></app-chatbot>
```

## Customization

The web component accepts the following attributes:

- `title`: The title of the chatbot window
- `initial-message`: The first message shown when the chatbot opens

## Troubleshooting

If you see 404 errors for the script files:
1. Make sure you've run the build and copy commands
2. Check that the `assets` directory contains the following files:
   - runtime.js
   - polyfills.js
   - main.js
   - styles.css

## Development

When making changes to the Angular application:
1. Make your changes in the `apps/frontend` directory
2. Rebuild the application
3. Run the copy script to update the test environment
4. Refresh the browser to see your changes 