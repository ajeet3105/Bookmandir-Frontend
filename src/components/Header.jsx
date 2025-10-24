import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { Cartcontext } from "../CartContext/Context";

const Header = () => {
  const { cart } = useContext(Cartcontext);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-green-600 ${
      isActive ? "text-green-700 font-bold" : "text-gray-700"
    }`;

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-green-700">
            <Link to="/">
              <img
                src="/favicon.svg"
                alt="Bookmadir"
                className="h-8 md:h-11 "
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-semibold">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            {/* <NavLink to="/browse" className={navLinkClass}>Browse</NavLink> */}

            <NavLink
              to="Books-Collection"
              className={navLinkClass}
              onClick={(e) => {
                e.preventDefault(); // default anchor behavior rok do
                const el = document.getElementById("Books-Collection");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Browse
            </NavLink>

            <NavLink to="/sell" className={navLinkClass}>
              Sell
            </NavLink>
            <NavLink to="/donate" className={navLinkClass}>
              Donate
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            {/* <input
              type="text"
              placeholder="Search"
              className="hidden sm:block px-3 py-1 border rounded-md text-sm"
            /> */}

            {/* Cart */}
            <div className="relative cursor-pointer">
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">
                {cart.length}
              </span>
              <NavLink to="/Card" className={navLinkClass}>
                🛒
              </NavLink>
            </div>

            <DarkModeToggle />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 space-y-4">
            {/* <input
              type="text"
              placeholder="Search books..."
              className="w-full px-3 py-2 border rounded-md text-sm"
            /> */}
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/browser" className={navLinkClass}>
                Browse
              </NavLink>
              <NavLink to="/sell" className={navLinkClass}>
                Sell
              </NavLink>
              <NavLink to="/donate" className={navLinkClass}>
                Donate
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
