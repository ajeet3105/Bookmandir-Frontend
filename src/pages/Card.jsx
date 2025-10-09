import { useContext } from "react";
import { Cartcontext } from "../CartContext/Context";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const { cart, setCart } = useContext(Cartcontext);
  const navigate = useNavigate(); // useNavigate hook
  // const buyerId = localStorage.getItem("user"); // logged-in buyer
const buyer = JSON.parse(localStorage.getItem("user"));
const buyerId = buyer?.id || buyer?._id;
  

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // localStorage bhi update hoga
  };

const ChatToSeller = (sellerId, bookId) => {
  if (!buyerId) {
    alert("Please login first to chat!");
    navigate("/SignIn");
    return;
  }
  navigate(`/chat/${sellerId}`, { state: { buyerId,sellerId, bookId } }); // ✅ send both
};


  return (
    <div className="">
      <h3 className="w-full py-4 text-xl font-bold text-white mb-4 flex justify-center bg-amber-800">
        🛒 Your Cart
      </h3>

      {cart.length === 0 ? (
        <div className="p-20 text-center text-gray-700 h-50 text-lg">
          Your cart is empty
        </div>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {cart.map((item, i) => (
            <div key={i} className="border p-3 rounded shadow">
              <div className="flex justify-end text-2xl text-amber-600">
                <button
                  className="h-6 w-6  cursor-pointer"
                  // onClick={() => removeFromCart(item.sellerId)} //  delete call
                  onClick={() => removeFromCart(item._id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
              <img
                src={item.image}
                alt={item.bookTitle}
                className="w-full h-40 object-contain mb-2"
              />
              <div>
                <h3 className="font-semibold">{item.bookTitle}</h3>
                <div className="flex justify-between">
                  <p className="text-green-600 font-bold">₹{item.price} </p>
                  <button
                    className="bg-green-600 text-white text-center py-1 px-3 rounded cursor-pointer"
                    onClick={() => ChatToSeller(item.sellerId, item._id)}
                  >
                    Chat To Seller
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
