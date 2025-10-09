
/** */
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { URL } from "../api/api";
const BACKEND_URL = URL;

const socket = io(BACKEND_URL, { withCredentials: true });

const ChatPage = () => {
  const location = useLocation();
  const { bookId, sellerId: stateSellerId, buyerId: stateBuyerId } = location.state || {};

  const user = JSON.parse(localStorage.getItem("user"));
  const myId = user._id || user.id;
  const isBuyer = user?.role === "buyer";

  // IDs
  const buyerId = isBuyer ? myId : stateBuyerId;    // if logged-in user is buyer → buyerId = myId
  const sellerId = stateSellerId;                  // always use sellerId from state

  const otherUserId = isBuyer ? sellerId : buyerId; // for message comparison only

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  // scroll to bottom on new message
  useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), [chat]);

  // Create or update chat in DB
  useEffect(() => {
    if (!buyerId || !sellerId || !bookId) return;

    fetch(`${BACKEND_URL}/api/start-chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buyerId, sellerId, bookId }),
    }).catch(console.error);
  }, [buyerId, sellerId, bookId]);

  // Join socket room and listen for messages
  useEffect(() => {
    if (!buyerId || !sellerId || !bookId) return;

    const sortedIds = [buyerId, sellerId].sort().join("-");
    const room = `chat-${bookId}-${sortedIds}`;
    socket.emit("join_room", { room });

    const handleReceive = (data) => setChat((prev) => [...prev, data]);
    socket.on("receive_message", handleReceive);
    return () => socket.off("receive_message", handleReceive);
  }, [buyerId, sellerId, bookId]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const sortedIds = [buyerId, sellerId].sort().join("-");
    const room = `chat-${bookId}-${sortedIds}`;
    socket.emit("send_message", { room, senderId: myId, message, buyerId, sellerId });
    setChat((prev) => [...prev, { senderId: myId, message }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="py-4 px-6 bg-amber-800 text-white">
        <h2 className="text-xl font-bold playfair">
          Chat with ID: {sellerId}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {chat.map((c, idx) => (
          <div
            key={idx}
            className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg break-words ${
              c.senderId === myId
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-gray-900 self-start"
            }`}
          >
            {c.message}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
/*** */