import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // npm install lucide-react

const DarkModeToggle = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  // Sync with <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      //    console.log("Dark mode enabled");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 transition"
    >
      {dark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default DarkModeToggle;
