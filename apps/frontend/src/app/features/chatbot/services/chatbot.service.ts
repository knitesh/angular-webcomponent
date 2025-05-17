import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { createBotMessage, getBotResponse } from '../utils/chatbot.util';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messageHistory: ChatMessage[] = [];

  constructor() {}

  getMessageHistory(): ChatMessage[] {
    return [...this.messageHistory];
  }

  addMessage(message: ChatMessage): void {
    this.messageHistory.push(message);
  }

  getBotResponse(message: string): Observable<ChatMessage> {
    // Simulate API delay
    return of(createBotMessage(getBotResponse(message)));
  }

  clearHistory(): void {
    this.messageHistory = [];
  }
} 