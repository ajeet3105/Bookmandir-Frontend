import { useEffect, useState } from "react";
import BookCard from "./BooksCard";
import { useContext } from "react";
import { createContext } from "react";
import { Cartcontext } from "../CartContext/Context";
import { URL } from "../api/api";
const BACKEND_URL = URL;

const BookCollection = () => {
  const [books, setBooks] = useState([]);

  const [category, setCategory] = useState("all"); // selected category

  const { cart, setCart } = useContext(Cartcontext);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/get`);
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) => category === "all" || book.bookType === category
  );

  return (
    <section className="py-6 px-4">
      <div className="container mx-auto">
        <h2
          id="Books-Collection"
          className="text-3xl font-bold text-center mb-9"
        >
          Books Collection
        </h2>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Featured Books</h2>
          <div className="flex items-center">
            <label htmlFor="category" className="mr-2 text-amber-900">
              Filter:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white border border-amber-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="School Books">School Books</option>
              <option value="Competitive Exams">Competitive Exams</option>
              <option value="Art & Photography">Art & Photography</option>
              <option value="Craft">Craft</option>
              <option value="Home & Style">Home & Style</option>
              <option value="Films">Films</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, i) => (
              <BookCard key={i} Book={book} addToCart={handleAddToCart} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No books available in this category
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookCollection;
