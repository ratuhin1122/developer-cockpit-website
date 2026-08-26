"use client"

import * as React from "react"
import { ArrowRight, Layers, Blocks, Cpu, Monitor, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function Architecture() {
  return (
    <section id="architecture-deep-dive" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Engineered for native performance.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A deeply integrated stack leveraging Rust for systems-level access and React for a fluid, extensible UI. Built specifically for Windows to eliminate abstraction overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Architecture Diagram Column */}
          <div className="lg:col-span-7 overflow-hidden">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 backdrop-blur-sm shadow-2xl relative">
              <div className="absolute inset-0 bg-grid-zinc-800/[0.2] bg-[size:20px_20px]"></div>
              
              <div className="relative z-10 flex flex-col gap-4">
                
                {/* User */}
                <div className="flex flex-col items-center">
                  <div className="text-xs font-mono text-zinc-500 mb-2">USER</div>
                  <div className="w-px h-6 bg-gradient-to-b from-transparent to-zinc-700"></div>
                </div>

                {/* Frontend Layer */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5 backdrop-blur-md text-center">
                  <div className="flex items-center justify-center gap-2 mb-3 text-blue-400">
                    <Monitor className="w-5 h-5" />
                    <h3 className="font-semibold text-sm tracking-widest uppercase">Frontend Layer</h3>
                  </div>
                  <p className="text-sm text-zinc-300 font-medium">React 19 • TypeScript • Zustand • Plugin Sandbox</p>
                </div>

                {/* IPC Bridge */}
                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-8 bg-zinc-700 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3 h-3 text-yellow-500" /> Tauri v2 IPC
                    </div>
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 backdrop-blur-md text-center">
                  <div className="flex items-center justify-center gap-2 mb-3 text-emerald-400">
                    <Cpu className="w-5 h-5" />
                    <h3 className="font-semibold text-sm tracking-widest uppercase">Backend Layer</h3>
                  </div>
                  <p className="text-sm text-zinc-300 font-medium mb-2">Rust 2021 • Domain Command Handlers • SQLite</p>
                  <p className="text-xs text-zinc-500">TerminalManager (ConPTY) • DockerLogManager • Capability Engine</p>
                </div>

                {/* OS Bridge */}
                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-8 bg-zinc-700 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-zinc-700 bg-zinc-900"></div>
                  </div>
                </div>

                {/* Operating System Layer */}
                <div className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 p-5 backdrop-blur-md text-center">
                  <div className="flex items-center justify-center gap-2 mb-3 text-zinc-300">
                    <Layers className="w-5 h-5" />
                    <h3 className="font-semibold text-sm tracking-widest uppercase">Operating System</h3>
                  </div>
                  <p className="text-sm text-zinc-400">Windows ConPTY • Win32 APIs (Process/Memory) • DPAPI</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Blocks className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">Modular by Design</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                The architecture isolates the UI rendering thread from heavy system operations. Rust command handlers securely interact with native Win32 APIs, abstracting away process management and memory introspection complexity.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Monitor className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100">Deep Desktop Integration</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Native ConPTY bindings ensure zero-latency terminal input, while DPAPI encryption ensures that capability licenses and SSH credentials remain completely bound to the hardware user profile.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-8 mt-2">
              <h3 className="text-lg font-semibold text-zinc-100 mb-3">Extensible Plugin Sandbox</h3>
              <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                Using SDK v2, external engineering teams can safely inject custom sidebar modules and dashboard widgets. Plugins run within a sandboxed iframe/worker runtime, restricted to scoped SQLite key-value persistence.
              </p>
              
              <Link href="https://github.com/ratuhin1122/developer-cockpit-public/tree/main/docs/architecture" target="_blank">
                <Button variant="outline" className="w-full sm:w-auto group">
                  Explore the Architecture
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
