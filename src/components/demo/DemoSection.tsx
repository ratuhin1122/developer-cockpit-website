"use client"

import * as React from "react"
import Link from "next/link"
import { Play, ArrowRight, Video, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function DemoSection() {
  return (
    <section id="demo" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            See the Cockpit in action.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Watch a comprehensive walkthrough of the core workflows, from the native terminal and workspace manager to the visual Git dashboard and Docker integration.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {/* Video Container */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl backdrop-blur-sm relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 pointer-events-none"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VX4sPTuXyGk?rel=0&modestbranding=1" 
                title="Developer Cockpit Application Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                loading="lazy"
                className="w-full h-full absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Highlights & CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                  <Video className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">Video Highlights</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sm font-mono text-zinc-500 mt-0.5 w-12 shrink-0">0:00</span>
                  <p className="text-sm text-zinc-400">Modern Terminal & Tabs</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sm font-mono text-zinc-500 mt-0.5 w-12 shrink-0">0:45</span>
                  <p className="text-sm text-zinc-400">Project & Workspace Launcher</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sm font-mono text-zinc-500 mt-0.5 w-12 shrink-0">1:30</span>
                  <p className="text-sm text-zinc-400">Git Dashboard</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sm font-mono text-zinc-500 mt-0.5 w-12 shrink-0">2:15</span>
                  <p className="text-sm text-zinc-400">Docker Workspace & Port Manager</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 text-left">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-3">Ready to upgrade your workflow?</h3>
              <p className="text-zinc-400 mb-6 max-w-md">
                Download the Free edition today and start experiencing zero-latency development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a 
                  href="https://github.com/ratuhin1122/developer-cockpit-public/releases/tag/v1.0.0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 w-full"
                >
                  <Button variant="primary" size="default" className="w-full group">
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Download Free v1.0.0
                  </Button>
                </a>
                <Link href="/demo" className="flex-1 w-full">
                  <Button variant="secondary" size="default" className="w-full">
                    <Play className="mr-2 h-4 w-4 fill-current" />
                    All 7 Feature Demos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
