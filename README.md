# Angular Chatbot

A modern chatbot component built with Angular 17 that can be used as a web component in any web application.

## Features

- Modern Angular 17 architecture
- Standalone components
- SCSS styling
- Web component support
- Message history
- Timestamp support
- Responsive design
- TypeScript support

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

The application will be available at `http://localhost:4200`.

## Usage

### As an Angular Component

```typescript
import { ChatbotComponent } from './features/chatbot/components/chatbot/chatbot.component';

@Component({
  // ...
  imports: [ChatbotComponent]
})
```

```html
<app-chatbot
  title="Support Chat"
  initialMessage="Welcome to our support chat!"
></app-chatbot>
```

### As a Web Component

```html
<script src="path/to/your/bundled/chatbot.js"></script>
<app-chatbot></app-chatbot>
```

## Project Structure

```
src/app/features/chatbot/
├── components/
│   └── chatbot/
│       ├── chatbot.component.ts
│       ├── chatbot.component.html
│       └── chatbot.component.scss
├── models/
│   └── chat-message.model.ts
├── services/
│   └── chatbot.service.ts
└── utils/
    └── chatbot.util.ts
```

## Development

### Building

```bash
ng build
```

### Testing

```bash
ng test
```

### Linting

```bash
ng lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Chatbot Web Component

This project demonstrates the integration of an Angular web component (chatbot) into different applications (React and vanilla JavaScript).

## Project Structure

```
.
├── apps/
│   ├── frontend/           # Angular application with web component
│   └── dummy-test/         # Vanilla JavaScript test application
└── react-app/             # React application
```

## Building and Using the Web Component

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Building the Web Component

1. Navigate to the Angular app directory:
   ```bash
   cd apps/frontend
   ```

2. Run the build script:
   ```bash
   ./build-webcomponent.sh
   ```
   This script will:
   - Build the Angular web component
   - Copy the built files to both React and dummy-test applications
   - Create necessary directories if they don't exist

### Using the Web Component

#### In React Application

1. Import the web component in your React component:
   ```typescript
   import React, { useEffect } from 'react';

   const ChatbotWrapper: React.FC = () => {
     useEffect(() => {
       // Load the Angular web component script
       const script = document.createElement('script');
       script.src = '/webcomponent/main.js';
       script.async = true;
       document.body.appendChild(script);

       // Load Angular Material styles
       const materialStyles = document.createElement('link');
       materialStyles.rel = 'stylesheet';
       materialStyles.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
       document.head.appendChild(materialStyles);

       // Load the web component styles
       const webComponentStyles = document.createElement('link');
       webComponentStyles.rel = 'stylesheet';
       webComponentStyles.href = '/webcomponent/styles.css';
       document.head.appendChild(webComponentStyles);
     }, []);

     return (
       <div className="chatbot-container">
         <app-chatbot 
           title="Stock Chatbot" 
           initialMessage="Hello! Ask me about stock prices."
         ></app-chatbot>
       </div>
     );
   };
   ```

2. Add type declarations for the web component:
   ```typescript
   // src/types/custom-elements.d.ts
   declare namespace JSX {
     interface IntrinsicElements {
       'app-chatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
         title?: string;
         initialMessage?: string;
       };
     }
   }
   ```

#### In Vanilla JavaScript Application

1. Add the web component to your HTML:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Chatbot Test</title>
     <link rel="stylesheet" href="/webcomponent/styles.css">
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   </head>
   <body>
     <app-chatbot 
       title="Stock Chatbot" 
       initialMessage="Hello! Ask me about stock prices."
     ></app-chatbot>
     <script src="/webcomponent/main.js"></script>
   </body>
   </html>
   ```

### Features

- Stock price information for top 5 stocks
- Real-time chat interface
- Responsive design
- Material Design styling

### Testing the Chatbot

1. Start the React application:
   ```bash
   cd react-app
   npm run dev
   ```

2. Start the dummy test application:
   ```bash
   cd dummy-test
   npm run dev
   ```

3. Test the chatbot by asking about stock prices:
   - "Show me stock prices"
   - "What are the current market prices?"
   - "Tell me about the top stocks"

### Troubleshooting

If the web component doesn't load:
1. Check the browser console for errors
2. Verify that all required files are present in the `/public/webcomponent/` directory
3. Ensure the correct file paths are used in the script and style tags
4. Check that the web component is properly registered in the Angular application 