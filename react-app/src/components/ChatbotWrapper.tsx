import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-chatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const ChatbotWrapper: React.FC = () => {
  useEffect(() => {
    // Load the Angular web component script
    const script = document.createElement('script');
    script.src = '/webcomponent/main.fd11c25126fb4f61.js';
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

    // Load polyfills
    const polyfills = document.createElement('script');
    polyfills.src = '/webcomponent/polyfills.139ac8c060768a6e.js';
    polyfills.async = true;
    document.body.appendChild(polyfills);

    // Load runtime
    const runtime = document.createElement('script');
    runtime.src = '/webcomponent/runtime.a9ed4cd750b373b0.js';
    runtime.async = true;
    document.body.appendChild(runtime);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(materialStyles);
      document.head.removeChild(webComponentStyles);
      document.body.removeChild(polyfills);
      document.body.removeChild(runtime);
    };
  }, []);

  return (
    <div className="chatbot-container">
      <h1>React App with Angular Web Component</h1>
      <app-chatbot></app-chatbot>
    </div>
  );
};

export default ChatbotWrapper; 