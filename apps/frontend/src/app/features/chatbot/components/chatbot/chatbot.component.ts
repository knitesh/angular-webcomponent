import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../models/chat-message.model';
import { createUserMessage, isValidMessage } from '../../utils/chatbot.util';
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
  @Output() messageSent = new EventEmitter<string>();

  isOpen: boolean = false;
  userInput: string = '';
  messages: ChatMessage[] = [];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.messages = this.chatbotService.getMessageHistory();
    if (this.messages.length === 0) {
      this.chatbotService.addMessage({ 
        text: this.initialMessage, 
        isUser: false,
        timestamp: new Date()
      });
      this.messages = this.chatbotService.getMessageHistory();
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!isValidMessage(this.userInput)) return;

    const userMessage = createUserMessage(this.userInput);
    this.chatbotService.addMessage(userMessage);
    this.messages = this.chatbotService.getMessageHistory();
    this.messageSent.emit(this.userInput);

    this.chatbotService.getBotResponse(this.userInput).subscribe(botMessage => {
      this.chatbotService.addMessage(botMessage);
      this.messages = this.chatbotService.getMessageHistory();
    });

    this.userInput = '';
  }
} 