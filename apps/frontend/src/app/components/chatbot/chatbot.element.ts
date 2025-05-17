import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatbotComponent } from './chatbot.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [],
  providers: []
})
export class ChatbotElementModule {
  constructor(private injector: Injector) {
    const chatbotElement = createCustomElement(ChatbotComponent, { injector });
    customElements.define('app-chatbot', chatbotElement);
  }

  ngDoBootstrap() {}
} 