
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, PaperclipIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
};

interface AIChatProps {
  initialMessage?: string;
  placeholder?: string;
}

const AIChat = ({ initialMessage = "Hi there! I'm your AI career assistant. How can I help you today?", placeholder = "Type your message here..." }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: initialMessage,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your resume, I'd recommend focusing on enhancing your data analysis skills. Consider courses on SQL or Python for data science.",
        "Looking at the job market trends, UX/UI design skills are in high demand in your field. This could complement your existing skill set nicely.",
        "Have you considered obtaining a project management certification? With your experience, this could open up new career paths.",
        "Your background in marketing would pair well with digital analytics skills. Google Analytics certification might be a good next step.",
        "For your industry, networking is crucial. I recommend joining professional groups on LinkedIn and attending virtual industry events."
      ];

      const botMessage: Message = {
        id: Date.now().toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full border border-border rounded-lg overflow-hidden">
      <div className="bg-secondary p-4 border-b border-border">
        <h3 className="font-semibold">Career Assistant</h3>
        <p className="text-sm text-muted-foreground">
          Ask questions about career paths, skills, certifications, and job market trends
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3 max-w-[85%]",
              message.sender === 'user' ? 'ml-auto' : ''
            )}
          >
            {message.sender === 'bot' && (
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <Bot className="h-5 w-5" />
              </div>
            )}
            <div
              className={cn(
                "rounded-lg p-3",
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-secondary text-secondary-foreground rounded-tl-none'
              )}
            >
              {message.content}
            </div>
            {message.sender === 'user' && (
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <User className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <Bot className="h-5 w-5" />
            </div>
            <div className="bg-secondary text-secondary-foreground rounded-lg rounded-tl-none p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" type="button" className="shrink-0">
            <PaperclipIcon className="h-5 w-5" />
          </Button>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="min-h-10 resize-none"
            rows={1}
          />
          <Button 
            type="button" 
            size="icon" 
            onClick={handleSendMessage} 
            disabled={!input.trim() || isLoading} 
            className="shrink-0"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
