import React, { useEffect } from 'react';

const ChatbotWrapper: React.FC = () => {
  useEffect(() => {
    let isComponentMounted = true;

    const loadWebComponent = async () => {
      try {
        // Check if the custom element is already defined
        if (!customElements.get('app-chatbot')) {
          // Load runtime first
          const runtime = document.createElement('script');
          runtime.src = '/webcomponent/runtime.a9ed4cd750b373b0.js';
          runtime.async = true;
          document.body.appendChild(runtime);

          // Load polyfills
          const polyfills = document.createElement('script');
          polyfills.src = '/webcomponent/polyfills.139ac8c060768a6e.js';
          polyfills.async = true;
          document.body.appendChild(polyfills);

          // Load the Angular web component script
          const script = document.createElement('script');
          script.src = '/webcomponent/main.048e71a72c5c5db3.js';
          script.async = true;
          document.body.appendChild(script);

          // Load Angular Material styles
          const materialStyles = document.createElement('link');
          materialStyles.rel = 'stylesheet';
          materialStyles.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
          document.head.appendChild(materialStyles);

          // Load the web component styles
          const webComponentStyles = document.createElement('link');
          webComponentStyles.rel = 'stylesheet';
          webComponentStyles.href = '/webcomponent/styles.b369c0e5fd97a59d.css';
          document.head.appendChild(webComponentStyles);

          // Wait for the script to load
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
      } catch (error) {
        console.error('Error loading web component:', error);
      }
    };

    loadWebComponent();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  return (
    <div className="chatbot-container">
      <h1>React App with Angular Web Component</h1>
      <app-chatbot 
        title="Stock Chatbot" 
        initialMessage="Hello! Ask me about stock prices."
      ></app-chatbot>
    </div>
  );
};

export default ChatbotWrapper; 