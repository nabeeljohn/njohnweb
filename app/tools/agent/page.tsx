"use client";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data: { reply?: string; error?: string } = await res.json();

      if (data.reply) setReply(data.reply);
      else setReply(`Error: ${data.error}`);
    } catch (err) {
      setReply("Network error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Gemini Chat (TSX)</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "60%", marginRight: 10 }}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      {reply && (
        <div style={{ marginTop: 20, padding: 10, border: "1px solid #ccc" }}>
          <strong>Reply:</strong> {reply}
        </div>
      )}
    </main>
  );
}