import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { URL } from "../api/api";
const BACKEND_URL = URL;

const Sell = () => {
  const [form, setForm] = useState({
    bookTitle: "",
    author: "",
    publicationYear: "",
    price: "",
    condition: "",
    bookType: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  // input changes handle
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id || e.target.name]: e.target.value });
  };

  // submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // form ke sare values append
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });
    if (image) {
      data.append("image", image);
    }

    const res = await fetch(`${BACKEND_URL}/api/sell`, {
      method: "POST",
      body: data,
      credentials: "include", // 👈 important for protect
    });

    const result = await res.json();

    // setBooks([...books,result]);
    if (res.ok) {
      alert("Book submitted successfully ✅");
      setForm({
        bookTitle: "",
        author: "",
        publicationYear: "",
        price: "",
        condition: "",
        bookType: "",
        description: "",
      });
      setImage(null);
    } else {
      alert("Error:" + result.message);
    }
  };

  return (
    <>
      <div className="px-6 py-4 bg-amber-800 text-white text-center">
        <h3 className="text-xl font-bold playfair">Sell Old Books</h3>
      </div>

      <div className="p-6">
        <p className="mb-4 text-amber-900">
          Fill out the form below with details about the book(s) you'd like to
          sell. Our team will review your submission and contact you with an
          offer.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Book title + Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="bookTitle"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Book Title
              </label>
              <input
                type="text"
                id="bookTitle"
                value={form.bookTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                value={form.author}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Publication + Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="publicationYear"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Publication Year
              </label>
              <input
                type="number"
                id="publicationYear"
                value={form.publicationYear}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Asking Price
              </label>
              <input
                type="text"
                id="price"
                value={form.price}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label
                htmlFor="condition"
                className="block text-sm font-medium text-amber-900 mb-1"
              >
                Condition
              </label>
              <select
                id="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              >
                <option value="">Select condition</option>
                <option value="Like New">Like New</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>

          {/* Book type */}
          <div>
            <label
              htmlFor="bookType"
              className="block text-sm font-medium text-amber-900 mb-1"
            >
              Types of Books
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Fiction",
                "School Books",
                "Competitive Exams",
                "Art & Photography",
                "Craft",
                "Home & Style",
                "Films",
                "Sports",
              ].map((type, i) => (
                <div key={i} className="flex items-center">
                  <input
                    type="radio"
                    // id={}
                    name="bookType"
                    value={type}
                    checked={form.bookType === type}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-700 focus:ring-amber-500 border-amber-300 cursor-pointer"
                  />
                  <label
                    htmlFor={type}
                    className="ml-2 block text-sm text-amber-900"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-amber-900 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-amber-900 mb-1">
              Upload Images
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-amber-400 rounded px-4 py-2 file:bg-amber-400 file:text-purple-800 file:border-0 cursor-pointer"
              accept="image/*"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 rounded-md transition-colors font-medium cursor-pointer"
            >
              Submit for Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sell;
