import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">NextStep Abroad</span>
            </Link>
            <p className="text-white/80 mb-4">
              Your trusted partner for global education and career success.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/countries"
                  className="hover:text-secondary transition-colors"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-secondary transition-colors"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Career Counseling</li>
              <li>Test Preparation</li>
              <li>Visa Assistance</li>
              <li>Scholarship Guidance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <span>info@nextstepabroad.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Education Street, Global City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2025 NextStep Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
