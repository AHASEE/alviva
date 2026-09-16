"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      const isDarkMode = savedTheme === "dark";
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent rendering until mounted (hydration safety)
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                className="h-10 w-auto"
                alt="Alviva Logo"
              />
            </Link>
            <div className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600">FAQ</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-600">Blog</a>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img 
              src="/images/logo.png" 
              className="h-10 w-auto"
              alt="Alviva Logo"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Home</a>
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Features</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">FAQ</a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Pricing</a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Blog</a>
          </div>

          {/* Right Side - Button + Dark Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Get Started Button */}
            <button className="bg-purple-600 dark:bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 dark:hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button + Dark Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark Toggle Mobile */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-yellow-300 text-lg"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Menu Toggle */}
            <button className="text-2xl text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 space-y-3 transition">
            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#faq" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition" onClick={() => setIsOpen(false)}>FAQ</a>
            <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#blog" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition" onClick={() => setIsOpen(false)}>Blog</a>
            <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}