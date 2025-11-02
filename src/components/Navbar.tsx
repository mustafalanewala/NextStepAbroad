import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">
            NextStep Abroad
          </span>
        </Link>
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
          <a
            href="#blogs"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Blogs
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Contact
          </a>
          <Button className="bg-secondary hover:bg-secondary/90">
            Counselling
          </Button>
        </nav>
      </div>
    </header>
  );
}
