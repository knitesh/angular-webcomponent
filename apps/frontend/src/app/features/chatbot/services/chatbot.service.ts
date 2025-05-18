import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { StockPricesService } from './stock-prices.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messageHistory: ChatMessage[] = [];

  constructor(private stockPricesService: StockPricesService) {}

  getMessageHistory(): ChatMessage[] {
    return [...this.messageHistory];
  }

  addMessage(message: ChatMessage): void {
    this.messageHistory.push(message);
  }

  getBotResponse(userInput: string): Observable<ChatMessage> {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('stock') || lowerInput.includes('price') || lowerInput.includes('market')) {
      return this.handleStockRequest();
    }

    // Default response for other queries
    return of({
      text: "I'm sorry, I don't understand that. You can ask me about stock prices.",
      isUser: false,
      timestamp: new Date()
    });
  }

  private handleStockRequest(): Observable<ChatMessage> {
    return new Observable(observer => {
      this.stockPricesService.getTopStocks().subscribe(stocks => {
        const formattedPrices = this.stockPricesService.formatStockPrices(stocks);
        observer.next({
          text: `Here are the top 5 stock prices:\n${formattedPrices}`,
          isUser: false,
          timestamp: new Date()
        });
        observer.complete();
      });
    });
  }

  clearHistory(): void {
    this.messageHistory = [];
  }
} 