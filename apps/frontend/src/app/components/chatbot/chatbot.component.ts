import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage, createUserMessage, createBotMessage, getBotResponse, isValidMessage } from './chatbot.util';

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

  ngOnInit() {
    this.messages.push(createBotMessage(this.initialMessage));
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!isValidMessage(this.userInput)) return;

    // Add user message
    this.messages.push(createUserMessage(this.userInput));
    this.messageSent.emit(this.userInput);

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      this.messages.push(createBotMessage(getBotResponse(this.userInput)));
    }, 1000);

    this.userInput = '';
  }
} 