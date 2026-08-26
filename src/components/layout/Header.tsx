"use client"

import * as React from "react"
import Link from "next/link"
import { Terminal, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Documentation", href: "#docs" },
    { name: "Demo", href: "#demo" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 max-w-[1200px] mx-auto">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-zinc-100" />
            <span className="font-semibold text-zinc-100 tracking-tight">Developer Cockpit</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#partner">
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-zinc-400 hover:text-zinc-100">
              Partner With Us
            </Button>
          </Link>
          <Button variant="secondary" size="sm">Download Free</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 p-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Link href="#partner">
                <Button variant="outline" className="w-full justify-start">Partner With Us</Button>
              </Link>
              <Button variant="primary" className="w-full justify-start">Download Free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
