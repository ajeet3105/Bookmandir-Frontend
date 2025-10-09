import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const socket = io(BACKEND_URL, { withCredentials: true });

const SellerDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const seller = JSON.parse(localStorage.getItem("user"));
  const sellerId = seller?._id || seller?.id;

  useEffect(() => {
    if (!sellerId) return;
    socket.emit("join_room", { room: sellerId });

    socket.on("new_message_notification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });

    return () => socket.off("new_message_notification");
  }, [sellerId]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/my-books`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="text-center mt-10">Loading your books...</div>;

  return (
    <>
      <div className="py-4 bg-amber-800 text-white text-center">
        <h2 className="text-xl font-bold playfair">📚 Your Uploaded Books</h2>
      </div>

      <div className="min-h-screen px-6 py-4">
        {notifications.length > 0 && (
          <div className="bg-gray-200 p-3 rounded mb-6 shadow-sm">
            <h3 className="font-semibold mb-2">🔔 New Messages{}</h3>
            {notifications.map((n, i) => (
              <p key={i}>
                Buyer <span className="font-semibold">{n.buyerId}</span>:{" "}
                {n.message}
              </p>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="border p-3 rounded-xl shadow bg-white hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-40 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={book.image}
                  alt={book.bookTitle}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Book Info */}
              <h3 className="text-lg font-bold mt-3">{book.bookTitle}</h3>
              <p className="text-sm text-gray-600 mb-2">{book.author}</p>

              {/* Price + Chat Row */}
              <div className="flex items-center justify-between mt-2">
                <p className="font-semibold text-gray-800">₹{book.price}</p>

                <div className="relative">
                  <button
                    onClick={() => {
                      if (notifications.length === 0)
                        return alert("No buyers yet");
                      const latestBuyerId =
                        notifications[notifications.length - 1].buyerId;
                      navigate(`/chat/${latestBuyerId}`, {
                        state: {
                          sellerId,
                          buyerId: latestBuyerId,
                          bookId: book._id,
                        },
                      });
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-800 transition cursor-pointer"
                  >
                    Chat
                  </button>

                  {/* Notification Dot */}
                  {notifications.length >= 1 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white animate-pulse"></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
