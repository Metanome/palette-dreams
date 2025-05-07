import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="flex items-center justify-between py-4 px-6 bg-white shadow">
    <div className="font-bold text-xl tracking-tight">
      <Link href="/">Palette Dreams</Link>
    </div>
    <div className="space-x-6">
      <Link href="/gallery" className="hover:underline">Gallery</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
