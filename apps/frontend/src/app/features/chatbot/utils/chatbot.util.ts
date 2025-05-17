import { ChatMessage } from '../models/chat-message.model';

export const getBotResponse = (message: string): string => {
  // Simple response logic - replace with actual API integration
  const responses = [
    "I understand. How can I help you further?",
    "That's interesting! Tell me more.",
    "I'm here to assist you. What else would you like to know?",
    "Let me help you with that.",
    "I'm processing your request."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const createUserMessage = (text: string): ChatMessage => ({
  text,
  isUser: true,
  timestamp: new Date()
});

export const createBotMessage = (text: string): ChatMessage => ({
  text,
  isUser: false,
  timestamp: new Date()
});

export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0;
};

export const formatMessageTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}; 