import React, { useState } from "react";
import getResponse from "../chatbot";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! What would you like to know about Girdhari?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    try {
      const reply = await getResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8">
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-4 rounded-full shadow-lg hover:from-teal-500 hover:to-teal-700 transition"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 bg-white shadow-2xl rounded-lg w-80 h-112 flex flex-col font-poppins">
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span className="text-lg font-semibold">Chat with Me</span>
            <button onClick={toggleChat} className="text-white font-bold">
              ✕
            </button>
          </div>

          {/* Chat Display */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-teal-100 text-teal-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-300 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-3 mr-4 font-poppins"
              placeholder="Type your query..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-teal-500 hover:to-teal-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
