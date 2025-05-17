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