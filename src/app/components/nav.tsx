'use client';

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full px-4 mx-auto max-w-screen-xl">
    <nav className="flex flex-row gap-4 p-4 text-2xl">
      {/* 
      className="relative flex items-center justify-between p-4 border-b border-gray-200 max-w-7xl mx-auto flex-col md:flex-row md:items-start gap-12
      Logo */}
      <div className="relative w-full font-bold pl-4 flex">
        <Link href="/">
            <img
              src="/Kirill-Ayzenberg-Logo-Kirill-ayzenberg-BlueKirill-Ayzenberg-LLC.png"
              alt="Kirill Ayzenberg logo"
              width={150} // adjust as needed
              height={50}  // adjust as needed
              className="w-full h-8 object-contain"
            />
        </Link>
        <p className="text-3xl flex items-center hidden md:block">Kirill Ayzenberg</p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><Link href="/"><span className="hidden">kirill Ayzenberg </span>Home</Link></li>
        <li><Link href="/about-kirk-ayzenberg">About <span className="hidden">Kirk Ayzenberg</span></Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger (Mobile) */}
      <div className="ml-auto pr-8 md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <img
            src="/hamburger-menu.svg"
            alt="Menu"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-4 p-4 z-50">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-kirk-ayzenberg">About <span className="hidden">Kirk Ayzenberg</span></Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
    </div>
  );
}
