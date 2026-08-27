"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#editions" },
    { name: "Demos", href: "/demo" },
    { name: "Docs", href: "https://github.com/ratuhin1122/developer-cockpit-public/tree/main/docs", external: true },
    { name: "Contact", href: "/#partner" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 max-w-[1200px] mx-auto">
        {/* Brand & Logo */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Logo className="h-8 w-10 shrink-0 drop-shadow-[0_0_15px_rgba(0,212,231,0.25)]" />
            </div>
            <span className="font-semibold text-zinc-100 tracking-tight text-base group-hover:text-white transition-colors">
              Developer Cockpit
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-zinc-400 hover:text-zinc-100 transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Right Action */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/ratuhin1122/developer-cockpit-public/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="font-medium shadow-sm group">
              <Download className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              Download v1.0.0
            </Button>
          </a>
          <Link href="/#partner">
            <Button variant="primary" size="sm" className="font-medium shadow-sm">
              Partner With Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-100 p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl p-6 animate-fade-in-up">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block text-base font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 px-3 py-2.5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col space-y-3">
              <a 
                href="https://github.com/ratuhin1122/developer-cockpit-public/releases/tag/v1.0.0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="secondary" className="w-full justify-center group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Download v1.0.0
                </Button>
              </a>
              <Link href="/#partner" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full justify-center">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
