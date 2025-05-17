# Chatbot Web Component Test Environment

This directory contains a test environment for the Angular Chatbot web component. It demonstrates how to use the chatbot as a web component in a pure HTML environment.

## Setup

The Angular application has two separate build configurations:
1. Regular Angular app build (`ng build`)
2. Web component build (`ng build:webcomponent`)

To build and test the web component:

1. Build the web component version:
```bash
cd ../apps/frontend
ng build:webcomponent
```

2. Copy the web component assets:
```bash
cd ../../dummy-test
./copy-assets.sh
```

Or combine both steps in one command:
```bash
cd ../apps/frontend && ng build:webcomponent && cd ../../dummy-test && ./copy-assets.sh
```

## Running the Test Environment

Start a local server using Node's http-server:
```bash
npx http-server -p 8080
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

## Development

### Regular Angular App Development
1. Make your changes in the `apps/frontend` directory
2. Run `ng serve` to start the development server
3. Access the app at `http://localhost:4200`

### Web Component Development
1. Make your changes in the `apps/frontend` directory
2. Build the web component: `ng build:webcomponent`
3. Run the copy script to update the test environment
4. Start the test server: `npx http-server -p 8080`
5. Access the test page at `http://localhost:8080`

## Troubleshooting

If you see 404 errors for the script files:
1. Make sure you've run the web component build (`ng build:webcomponent`)
2. Check that the `assets` directory contains the following files:
   - runtime.js
   - polyfills.js
   - main.js
   - styles.css

## Notes

- The regular Angular app and web component builds are separate to keep the concerns divided
- The web component build is optimized for standalone usage
- Changes to the chatbot component will affect both the app and web component versions 