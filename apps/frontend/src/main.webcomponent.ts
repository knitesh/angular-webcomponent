import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ChatbotComponent } from './app/features/chatbot/components/chatbot/chatbot.component';

async function bootstrap() {
  const app = await createApplication({
    providers: []
  });

  // Define the custom element
  const chatbotElement = createCustomElement(ChatbotComponent, {
    injector: app.injector
  });

  // Register the custom element
  customElements.define('app-chatbot', chatbotElement);
}

bootstrap(); 