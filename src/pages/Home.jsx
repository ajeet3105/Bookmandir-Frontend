import Topbar from "../components/topbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Cartcontext } from "../CartContext/Context";

const Home = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // cart ko localStorage me sync karo jab bhi change ho
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // user ko localStorage se load karo
  // const [user, setUser] = useState(() => {
  //   const storedUser = localStorage.getItem("user");
  //   return storedUser ? JSON.parse(storedUser) : null;
  // });

  const [user, setUser] = useState(() => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
});


  return (
    <Cartcontext.Provider value={{ cart, setCart }}>
      <Topbar user={user} setUser={setUser} /> {/* pass user state */}
      <Header />
      <Outlet context={{ user, setUser }} />{" "}
      {/* nested routes ke liye user pass */}
      <Footer />
    </Cartcontext.Provider>
  );
};

export default Home;
