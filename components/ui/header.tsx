"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-30 sticky top-4 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl backdrop-blur-md bg-black/20 px-4 shadow-lg border border-gray-700/50">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <NavLinks />
            <LoginButton />
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-[4.5rem] rounded-xl backdrop-blur-md bg-black/30 border border-gray-700/50 shadow-lg transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          )}>
          <div className="px-4 py-3 space-y-3">
            <NavLinks mobile />
            <div className="pt-2">
              <LoginButton fullWidth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = cn(
    "relative px-4 py-2 text-gray-300 rounded-lg transition-colors",
    "hover:text-white hover:bg-gray-800/50",
    mobile ? "block w-full text-left" : ""
  );

  const links = [
    { href: "/ai", label: "✨ AI Prediction" },
    { href: "/education", label: "Education" },
    { href: "/products", label: "Products" },
    { href: "/subscription", label: "🚀 Subscription" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={linkClass}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

function LoginButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <Button
      variant="outline"
      className={cn(
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent hover:from-purple-700 hover:to-indigo-700",
        "transition-all duration-300 font-medium",
        fullWidth ? "w-full" : ""
      )}>
      Login / Register
    </Button>
  );
}
