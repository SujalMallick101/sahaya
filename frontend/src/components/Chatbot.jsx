import { useState, useRef, useEffect } from 'react';
import { BotIcon, SendIcon, XIcon } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about welfare schemes 👋' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botMsg = {
      sender: 'bot',
      text: getBotResponse(input), // Mock response
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes('education')) return 'You might be eligible for the National Scholarship Scheme.';
    if (msg.includes('health')) return 'Consider checking Ayushman Bharat or state-specific health plans.';
    if (msg.includes('apply')) return 'You can apply directly via the "Schemes" tab after eligibility check.';
    return 'Sorry, I didn’t get that. Try asking about education, healthcare, or how to apply.';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BotIcon size={18} />
              <span className="text-sm font-medium">Scheme Chatbot</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <XIcon size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto text-sm bg-indigo-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-indigo-200 self-end ml-auto text-right'
                    : 'bg-white border text-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button onClick={handleSend} className="ml-2 text-indigo-600 hover:text-indigo-800">
              <SendIcon size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        >
          <BotIcon size={20} />
        </button>
      )}
    </div>
  );
}
