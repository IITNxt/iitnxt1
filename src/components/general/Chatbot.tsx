// components/ChatbotButton.tsx
"use client";
import { MessageCircle, Sparkles } from "lucide-react";

export default function ChatbotButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      aria-label="Open Chatbot"
      onClick={onClick}
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-amber-400 hover:bg-amber-500 text-white shadow-xl rounded-full p-4 flex items-center justify-center transition-colors duration-200 group"
      style={{
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
      }}
    >
      <span className="relative">
        <MessageCircle className="h-7 w-7 drop-shadow" />
        <Sparkles className="h-4 w-4 text-white absolute -top-2 -right-2 opacity-80" />
      </span>
    </button>
  );
}
