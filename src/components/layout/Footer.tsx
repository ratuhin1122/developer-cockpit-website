"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/Logo"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center space-x-3 mb-4 group">
            <Logo className="h-7 w-9 shrink-0 transition-transform group-hover:scale-105" />
            <span className="font-semibold text-zinc-100 tracking-tight text-lg group-hover:text-white transition-colors">
              Developer Cockpit
            </span>
          </Link>
          <p className="text-sm text-zinc-500 mb-6">
            The unified developer workspace for Windows.
          </p>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Developer Cockpit. All rights reserved.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/#features" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Features</Link></li>
            <li><Link href="/#architecture" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Architecture</Link></li>
            <li><Link href="/#editions" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Editions</Link></li>
            <li><Link href="/#roadmap" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Roadmap</Link></li>
            <li><Link href="/demo" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Demos</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="https://github.com/ratuhin1122/developer-cockpit-public/tree/main/docs" target="_blank" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Documentation</Link></li>
            <li><Link href="https://github.com/ratuhin1122/developer-cockpit-public" target="_blank" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">GitHub Repository</Link></li>
            <li><Link href="https://github.com/ratuhin1122/developer-cockpit-public/blob/main/docs/licensing/LICENSE.md" target="_blank" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">License</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-zinc-100 font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/#partner" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Partner With Us</Link></li>
            <li><Link href="mailto:ruhulamintuhin715@gmail.com" className="hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 rounded-sm">Contact</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
