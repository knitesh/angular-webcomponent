import { Component } from '@angular/core';
import { ChatbotComponent } from './features/chatbot/components/chatbot/chatbot.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChatbotComponent],
  template: `
    <div class="app-container">
      <h1>Angular Chatbot Demo</h1>
      <app-chatbot
        title="Support Chat"
        initialMessage="Welcome to our support chat! How can I help you today?"
      ></app-chatbot>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      color: #333;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {
  title = 'Angular Chatbot';
} 