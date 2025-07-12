'use client';

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full px-4 mx-auto max-w-screen-xl">
      <nav className="flex flex-row gap-4 p-4 text-2xl justify-between">
        <Link href="/">
          <div className="relative font-bold pl-4 flex items-center gap-4">
            <img
              src="/Kirill-Ayzenberg-Logo-Kirill-ayzenberg-Blue-Kirill-Ayzenberg-LLC.png"
              alt="Kirill Ayzenberg logo"
              width={50}
              height={50}
              className="h-8 object-contain"
            />
            <p className="text-3xl items-center hidden md:block">Kirill Ayzenberg Mortgage Lender</p>
          </div>
        </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><Link href="/">Home <span className="hidden">Kirill Ayzenberg</span></Link></li>
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
          <li><Link href="/">Home <span className="hidden">Kirill Ayzenberg</span></Link></li>
          <li><Link href="/about-kirk-ayzenberg">About <span className="hidden">Kirk Ayzenberg</span></Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
    </div>
  );
}
