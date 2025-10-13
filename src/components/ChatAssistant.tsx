'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatAssistantProps {
  address: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatAssistant({ address }: ChatAssistantProps) {
  // address will be used when we integrate real data
  console.log('ChatAssistant for address:', address);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. Ask me about your portfolio, transactions, or any blockchain analysis.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing your portfolio data using Blockscout MCP. This feature will be fully functional once we integrate the real data sources!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const quickPrompts = [
    "What's my biggest position?",
    "Show risky approvals",
    "Analyze my portfolio",
    "Recent activity summary",
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white font-bold text-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        💬
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed right-8 bottom-8 w-96 h-[500px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl z-40 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-amber-400 to-purple-500 text-white'
                        : 'bg-white/10 text-white/90'
                    }`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="p-4 border-t border-white/20">
              <div className="text-xs text-white/60 mb-2">Quick prompts:</div>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(prompt)}
                    className="text-xs bg-white/10 hover:bg-white/20 text-white/80 px-3 py-1 rounded-full transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about your portfolio..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-amber-400 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
