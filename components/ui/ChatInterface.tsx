'use client';

import { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.srv967587.hstgr.cloud/webhook/c4c6a588-36f1-4c97-a405-272747948943', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response || 'Response received' }]);
      
      // Navigate to command center after first message
      setTimeout(() => {
        router.push('/command-center');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#0f0f0f]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        {/* Messages */}
        {messages.length > 0 && (
          <div className="mb-4 space-y-3 max-h-60 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-[#ff6b35]/20 text-white ml-8'
                    : 'bg-white/5 text-white/90 mr-8'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Have a conversation with our AI agent..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35]/50 transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !message.trim()}
            className="bg-[#ff6b35] hover:bg-[#ff7d4d] text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
