"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NextStep Abroad Logo" className="w-36" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <Link
            href="/countries"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Countries
          </Link>
          <Link
            href="/courses"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Courses
          </Link>
          <Link
            href="/blogs"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Contact
          </Link>
          <Link href="/counselling">
            <Button className="bg-secondary hover:bg-secondary/90">
              Counselling
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/countries"
              className="block px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Countries
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link href="/counselling">
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Counselling
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
