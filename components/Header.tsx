"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="sm:w-[40rem] w-full m-auto flex justify-between items-center px-4">
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`absolute cursor-pointer sm:static top-16 left-0 sm:w-auto bg-gray-900 sm:bg-transparent sm:p-0 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <ul className="flex flex-col text-2xl sm:flex-row gap-4">
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
