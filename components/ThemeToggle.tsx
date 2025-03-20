"use client";

import { useEffect, useState } from "react";
import { PiSunDim, PiMoon } from "react-icons/pi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer rounded-lg dark:hover:bg-grey dark:text-white transition"
    >
      {theme === "light" ? <PiMoon size={20} /> : <PiSunDim size={20} />}
    </button>
  );
}
