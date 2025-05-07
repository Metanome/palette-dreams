import React from "react";

const Footer = () => (
  <footer className="py-6 px-6 bg-gray-100 text-center text-sm text-gray-600 mt-12">
    <div>© {new Date().getFullYear()} Palette Dreams. All rights reserved.</div>
    <div className="mt-2">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Instagram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Twitter</a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Facebook</a>
    </div>
  </footer>
);

export default Footer;
