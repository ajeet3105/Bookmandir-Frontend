import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { URL } from "../api/api";
const BACKEND_URL = URL;

const Signup = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handlechange = (e) => {
    setsignup({ ...signup, [e.target.id]: e.target.value });
  };

  const [showpassword, setshowpassword] = useState(false);
  const [showconfirmpassword, setshowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }

    try {
      const res = await fetch(`${BACKEND_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
      });

      const result = await res.json();
      if (res.ok) {
        alert("User registered successfully ✅");
        setsignup({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              value={signup.name}
              // onChange={(e) => setName(e.target.value)}
              onChange={handlechange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={signup.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handlechange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showpassword ? "text" : "password"} //👁️ toggle
                id="password"
                placeholder="Enter your password"
                value={signup.password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlechange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="button"
                onClick={() => setshowpassword(!showpassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showpassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <div className="relative">
              <input
                type={showconfirmpassword ? "text" : "password"} // 👁️ toggle
                id="confirmPassword"
                placeholder="Confirm your password"
                value={signup.confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                onChange={handlechange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={() => setshowConfirmPassword(!showconfirmpassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showconfirmpassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold mt-2"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
