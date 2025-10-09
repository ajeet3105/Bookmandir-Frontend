import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-900 text-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">bookmandir</h3>
              <p className="mb-4">
                Preserving literary heritage, one book at a time.
              </p>
              <div className="text-lg mt-4 flex space-x-4 md:mt-0">
                <a href="#" className="hover:text-amber-200 transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  <BsInstagram />
                </a>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  <FaXTwitter />
                </a>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-amber-200 transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Browse Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Sell Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Donate Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-200 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                  <span>123 Bookmandir , bhopal City, BC 12345</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>info@bookmandir.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t  border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; 2025 Bokkmandir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
