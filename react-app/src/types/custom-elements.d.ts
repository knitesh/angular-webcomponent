declare namespace JSX {
  interface IntrinsicElements {
    'app-chatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      title?: string;
      initialMessage?: string;
    };
  }
} 