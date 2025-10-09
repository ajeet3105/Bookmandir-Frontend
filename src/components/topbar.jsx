import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = ({ user, setUser }) => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);

    if (value === "logout") {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/");
      fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      }).catch(console.error); 
    }

    if (value === "my account") {
      // Redirect everyone to home page
      navigate("/");
    }
    if (value === "profile") {
      if (user?.role === "seller") {
        navigate("/seller-dashboard"); // seller ke liye
      } else {
        navigate("/user/profile"); // buyer ke liye
      }
    }
    if (value === "Dark Mode") {
      console.log("Dark Mode toggled");
    }
  };

  return (
    <div className="bg-green-600 text-white px-4 py-1 flex justify-between items-center">
      <div>🌐 English | 💵 USD $</div>

      <div className="flex items-center space-x-4">
        <select
          value={selected}
          onChange={handleChange}
          className="bg-green-400 text-black py-1 rounded cursor-pointer"
        >
          <option value="my account">My account</option>
          <option value="profile">Profile</option>
          <option value="Dark Mode">Dark Mode</option>
          <option value="logout" className="bg-red-600">
            Logout
          </option>
        </select>

        <div>
          {user ? (
            user.name
          ) : (
            <Link to="/signin" className="hover:underline">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
