"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-4 lg:p-0 ${isOpen ? "block" : "hidden"} lg:block`}>
        <ul className="flex flex-col lg:flex-row gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Blog</Link></li>
          <li><Link href="/contact">Resume</Link></li>
          <button className="w-[30px] rounded-sm bg-grey"></button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
