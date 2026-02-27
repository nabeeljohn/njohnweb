"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages: Message[] = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const systemMessage: Message = {
        role: "system",
        content:
          "You are 'Milo', a helpful AI assistant. Respond concisely in short sentences, maximum 2-3 sentences."
      };

      const body = { messages: [systemMessage, ...updatedMessages] };

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data: { reply?: string; error?: string } = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply ?? data.error ?? "No response received."
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Network error." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col h-[80vh]">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-4">Chat with Milo</h1>

        {/* Chat Box */}
        <div
          ref={chatBoxRef}
          className="flex-[0_0_70%] bg-gray-800 border border-gray-600 rounded-md p-4 overflow-y-auto"
        >
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              {msg.role === "assistant" && (
                <div className="text-sm text-gray-300 mb-1">Milo</div>
              )}
              <div
                className={`p-3 rounded-md max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-gray-400 bg-opacity-30 text-white ml-auto backdrop-blur-sm"
                    : "bg-gray-200 bg-opacity-30 text-white backdrop-blur-sm"
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="bg-gray-200 bg-opacity-30 border border-gray-600 p-3 rounded-md max-w-[75%] backdrop-blur-sm">
              Milo is thinking...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="flex gap-3 mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 rounded-md bg-gray-600 bg-opacity-30 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-6 py-3 bg-gray-600 bg-opacity-30 hover:bg-gray-500 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed transition backdrop-blur-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}