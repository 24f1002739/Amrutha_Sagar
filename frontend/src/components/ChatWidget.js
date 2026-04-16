import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const QUICK_REPLIES = [
  "Opening hours?",
  "Where are you located?",
  "Is it pure veg?",
  "Party orders?",
  "Menu info?",
];

function getBotReply(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes("hour") || lower.includes("time") || lower.includes("open") || lower.includes("close"))
    return "We are open from 9:00 AM to 10:30 PM, every day including Sundays!";
  if (lower.includes("locat") || lower.includes("where") || lower.includes("address") || lower.includes("direction"))
    return "We are at No.75, Tank St, near Gandhi Statue, Hosur, Tamil Nadu 635109. Easy to find near the main road!";
  if (lower.includes("veg") || lower.includes("non-veg") || lower.includes("pure"))
    return "Yes! Amrutha Sagar is a 100% Pure Vegetarian restaurant. We do not serve any non-veg items.";
  if (lower.includes("party") || lower.includes("cater") || lower.includes("event") || lower.includes("function") || lower.includes("birthday"))
    return "We undertake party orders for all occasions! Please fill out our Party Orders form on the website or call us directly to discuss your requirements.";
  if (lower.includes("menu") || lower.includes("food") || lower.includes("dosa") || lower.includes("price"))
    return "We serve South Indian breakfast, dosas, lunch meals, Chinese starters, Indian gravies, biryanis, chats, juices, milkshakes, ice cream and more! Check our full menu on this website.";
  if (lower.includes("call") || lower.includes("phone") || lower.includes("contact") || lower.includes("number"))
    return "Please call us for any enquiries. You can find our number on the Contact section of this website.";
  if (lower.includes("deliver") || lower.includes("order online") || lower.includes("swiggy") || lower.includes("zomato"))
    return "We currently do not offer online ordering. Please call us directly for dine-in or takeaway enquiries.";
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey"))
    return "Namaste! Welcome to Amrutha Sagar Veg Restaurant. How can I help you today?";
  return "Thank you for your question! For detailed enquiries, please call us. You can also check our Menu, Party Orders, or Contact sections on this page.";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste! Welcome to Amrutha Sagar. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: getBotReply(msg) }]);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            data-testid="chat-window"
            className="fixed bottom-24 right-4 md:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-emerald-800/50 shadow-2xl"
          >
            <div className="bg-[#064e3b] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#022c22]" />
                </div>
                <div>
                  <p className="text-emerald-50 font-sans text-sm font-medium">Amrutha Assistant</p>
                  <p className="text-emerald-200/50 text-xs font-sans">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-emerald-200/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="bg-[#022c22] h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm font-sans leading-relaxed ${
                      m.from === "user"
                        ? "bg-yellow-500 text-[#022c22] rounded-br-md"
                        : "bg-[#064e3b]/50 text-emerald-200/90 rounded-bl-md border border-emerald-800/30"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#011a14] p-3 space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-xs px-2.5 py-1 rounded-full border border-emerald-800/40 text-emerald-200/60 hover:text-yellow-500 hover:border-yellow-500/40 transition-colors font-sans"
                  >
                    {qr}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  data-testid="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-[#022c22] border border-emerald-800/40 rounded-full px-4 py-2 text-sm text-emerald-50 placeholder:text-emerald-200/30 focus:outline-none focus:border-yellow-500/50 font-sans"
                />
                <button
                  data-testid="chat-send-btn"
                  onClick={() => sendMessage()}
                  className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-400 transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4 text-[#022c22]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        data-testid="chat-widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:bg-yellow-400 transition-all hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6 text-[#022c22]" /> : <MessageCircle className="w-6 h-6 text-[#022c22]" />}
      </button>
    </>
  );
}
