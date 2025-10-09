import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


const SignIn = () => {
  const { setUser } = useOutletContext(); // get user setter from Home
  const navigate = useNavigate(); //  hook for navigation
  
  const [showpassword, setshowpassword] = useState(false);

  const [signin, setsignin] = useState({
    email: "",
    password: "",
  });
  const hanldechange = (e) => {
    setsignin({ ...signin, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Filhal frontend alert, backend integration ke liye API call yahan hoga
    try {
      const res = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", //  this is the key line
        body: JSON.stringify(signin),
      });
      const result = await res.json();
      if (res.ok) {
        setUser(result.user); //  update Topbar immediately
        localStorage.setItem("user", JSON.stringify(result.user)); // persist
        setsignin({ email: "", password: "" });
        alert("User login successfully ✅");
        navigate("/"); //  redirect to Home page
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {}
    // alert(`Email: ${signin.email}\nPassword: ${signin.password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              value={signin.email}
              // onChange={(e) => emailhandle(e)}
              onChange={(e) => hanldechange(e)}
              // onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
          <label className="block mb-1 font-medium">Password</label>
          <div className="relative">
            <input
              type={showpassword ? "text" : "password"} //  toggle
              placeholder="Enter your password"
              id="password"
              value={signin.password}
              onChange={(e) => hanldechange(e)}
              required
              className="w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            {/* Eye toggle button */}
            <button
              type="button"
              onClick={() => setshowpassword(!showpassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer"
            >
              {showpassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white py-2 rounded-md font-semibold mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between text-sm mt-4">
          <Link to="#" className="text-green-600 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signUp" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
