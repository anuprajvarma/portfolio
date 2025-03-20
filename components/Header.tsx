"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4">
      <div className="w-[40rem] m-auto flex justify-between items-center px-2">
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`absolute cursor-pointer lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent lg:p-0 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col text-2xl lg:flex-row gap-4">
            <li className="hover:bg-[var(--bg)] rounded-md p-2">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:bg-[var(--bg)] rounded-md p-2">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-[var(--bg)] rounded-md p-2">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:bg-[var(--bg)] rounded-md p-2">
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
