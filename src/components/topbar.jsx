// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const Topbar = ({ user, setUser }) => {
//   const [selected, setSelected] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSelected(value);

//     if (value === "logout") {
//       setUser(null);
//       localStorage.removeItem("user");
//       navigate("/");
//       fetch(`${BACKEND_URL}/api/logout`, {
//         method: "POST",
//         credentials: "include",
//       }).catch(console.error);
//     }

//     if (value === "Account") {
//       // Redirect everyone to home page
//       navigate("/");
//     }
//     if (value === "profile") {
//       if (user?.role === "seller") {
//         navigate("/seller-dashboard"); // seller ke liye
//       } else {
//         navigate("/user/profile"); // buyer ke liye
//       }
//     }
//     // if (value === "Dark Mode") {
//     //   console.log("Dark Mode toggled");
//     // }
//   };

//   return (
//     <div className="bg-green-600 text-white px-4 py-1 flex justify-between items-center">
//       <div>🌐 English | $</div>

//       <div className="flex items-center space-x-4">
//         <select
//           value={selected}
//           onChange={handleChange}
//           className="bg-green-400 text-black py-1 rounded cursor-pointer"
//         >
//           <option value="Account">Account</option>
//           <option value="profile">Profile</option>
//           {/* <option value="Dark Mode">Dark Mode</option> */}
//           <option value="logout" className="bg-red-600">
//             Logout
//           </option>
//         </select>

//         {/* <div>
//           {user ? (
//             user.name
//           ) : (
//             <Link to="/signin" className="hover:underline">
//               SignIn
//             </Link>
//           )}
//         </div> */}

//         <div>
//           {user ? (
//             <span title={user.name}>
//               {user.name.length > 5 ? `${user.name.slice(0, 5)}..` : user.name}
//             </span>
//           ) : (
//             <Link to="/signin" className="hover:underline">
//               SignIn
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;


import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Topbar = ({ user, setUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
    fetch(`${BACKEND_URL}/api/logout`, {
      method: "POST",
      credentials: "include",
    }).catch(console.error);
    setDropdownOpen(false);
    toast.success("Logged out successfully!")
  };

  const handleProfile = () => {
    if (user?.role === "seller") navigate("/seller-dashboard");
    else navigate("/user/profile");
    setDropdownOpen(false);
  };

  return (
    <div className="bg-green-600 text-white px-4 py-1 flex justify-between items-center">
      <div>🌐 English | $</div>

      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        {user ? (
          <div>
            {/* User Button */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-white text-green-600 font-semibold px-4 py-0.5 rounded hover:bg-green-50 transition cursor-pointer"
              title={user.name} // Full name on hover
            >
              {user.name.length > 5 ? `${user.name.slice(0, 5)}..` : user.name}
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded shadow-lg z-[100]">
                <button
                  onClick={handleProfile}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-white text-green-600 font-semibold px-4 py-1 rounded hover:bg-green-50 transition"
          >
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
