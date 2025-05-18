import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockPricesService {
  private mockStockData: StockPrice[] = [
    { symbol: 'AAPL', price: 185.92, change: 2.34, changePercent: 1.27 },
    { symbol: 'MSFT', price: 415.32, change: 3.45, changePercent: 0.84 },
    { symbol: 'GOOGL', price: 147.68, change: -1.23, changePercent: -0.83 },
    { symbol: 'AMZN', price: 178.75, change: 1.56, changePercent: 0.88 },
    { symbol: 'META', price: 485.58, change: 4.67, changePercent: 0.97 }
  ];

  getTopStocks(): Observable<StockPrice[]> {
    return of(this.mockStockData);
  }

  formatStockPrices(stocks: StockPrice[]): string {
    return stocks.map(stock => 
      `${stock.symbol}: $${stock.price.toFixed(2)} (${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}, ${stock.changePercent.toFixed(2)}%)`
    ).join('\n');
  }
} 