import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BookCard = ({ Book, addToCart }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user"); // login check

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(Book);
      // alert("✅ Book added to cart successfully!");
      toast.success("Book added to cart successfully!")

    } else {
      navigate("/signin"); // login page pe bhej do
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Book Image */}
      <div className="py-2 overflow-hidden">
        <img
          src={Book.image}
          alt={Book.bookTitle}
          className="w-full h-40 object-contain transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Book Info */}
      <div>
        <div className="flex justify-between items-center px-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {Book.bookTitle}
          </h3>
          <span className="text-green-700 font-bold bg-green-100 px-2 rounded-full text-sm">
            ${Book.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`mt-3 w-full py-3 rounded relative overflow-hidden group h-12 flex items-center justify-center cursor-pointer ${
            isLoggedIn ? "bg-green-600 text-white" : "bg-gray-400 text-gray-200"
          }`}
          onClick={handleAddToCart}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="absolute transition-transform duration-300 group-hover:-translate-y-10">
              {isLoggedIn ? "Add to Cart" : "Login Required"}
            </span>
            {!isLoggedIn && (
              <span className="absolute transition-transform duration-300 translate-y-10 group-hover:translate-y-0">
                Login
              </span>
            )}
            {isLoggedIn && (
              <span className="absolute transition-transform duration-300 translate-y-10 group-hover:translate-y-0">
                <ShoppingCart size={22} />
              </span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
