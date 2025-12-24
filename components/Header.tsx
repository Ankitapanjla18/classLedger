"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-bold text-blue-600">
              ClassLedger
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#offline-first"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#why-choose"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Why Choose Us
            </a>
            <Button variant="primary" href="#contact" className="text-sm">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="primary" href="#contact" className="text-sm px-4 py-2">
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

