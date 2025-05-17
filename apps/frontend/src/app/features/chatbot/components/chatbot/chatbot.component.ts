import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../models/chat-message.model';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @Input() title: string = 'Chatbot';
  @Input() initialMessage: string = 'Hello! How can I help you today?';
  @Output() messageSent = new EventEmitter<ChatMessage>();

  messages: ChatMessage[] = [];
  userInput: string = '';
  isOpen: boolean = false;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.addMessage(this.initialMessage, false);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage: ChatMessage = { text: this.userInput, isUser: true, timestamp: new Date() };
    this.addMessage(userMessage.text, true);
    this.messageSent.emit(userMessage);

    this.chatbotService.getBotResponse(this.userInput).subscribe((response: ChatMessage) => {
      this.addMessage(response.text, false);
    });

    this.userInput = '';
  }

  private addMessage(text: string, isUser: boolean) {
    this.messages.push({ text, isUser, timestamp: new Date() });
  }
} 