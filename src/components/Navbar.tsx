"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Only */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
           <img 
  src="/images/logo.png" 
  className="h-14 w-auto"
/>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
            <a href="#how" className="text-gray-700 hover:text-purple-600">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-600">Benefits</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600">Blog</a>
          </div>

          {/* Button */}
          <button className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#features" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#benefits" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>Benefits</a>
            <a href="#pricing" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#blog" className="block text-gray-700 hover:text-purple-600 py-2" onClick={() => setIsOpen(false)}>Blog</a>
            <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}