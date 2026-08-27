"use client"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Subtle Developer-oriented background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-transparent to-transparent opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Subtle Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-zinc-700/50 bg-zinc-800/20 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Developer Cockpit v0.1.0 is now available
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[5.5rem] font-semibold tracking-tight text-foreground mb-8 max-w-[54rem] mx-auto leading-[1.1] animate-fade-in-up animation-delay-100">
          One workspace for the tools developers use <span className="text-zinc-500">every day.</span>
        </h1>
        
        {/* Supporting Description */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-[42rem] mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          An extensible desktop developer workspace that brings essential development workflows together in one place. Built natively for Windows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-fade-in-up animation-delay-300">
          <Link href="/#features" className="w-full sm:w-auto">
            <Button size="lg" className="w-full group">
              Explore Developer Cockpit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/demo" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Watch Demos
            </Button>
          </Link>
        </div>

        {/* Product Visual */}
        {/* <div className="mx-auto max-w-5xl rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm animate-fade-in-up animation-delay-400">
          <div className="rounded-md overflow-hidden border border-zinc-800 relative bg-zinc-950 aspect-[16/9] flex items-center justify-center"> */}
            {/* Minimal window controls */}
            {/* <div className="absolute top-0 left-0 w-full h-10 border-b border-zinc-800 bg-zinc-900/80 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500 flex items-center">
                <Code2 className="w-3 h-3 mr-2" /> Developer Cockpit
              </div>
            </div> */}
            
            {/* Actual screenshot */}
            {/* <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
              <Image 
                 src="/developer-cockpit.png" 
                 alt="Developer Cockpit Interface" 
                 fill
                 sizes="(max-width: 1200px) 100vw, 1200px"
                 priority
                 className="object-cover object-left-top"
               />
            </div> */}
          {/* </div>
        </div> */}
      </div>
    </section>
  )
}
