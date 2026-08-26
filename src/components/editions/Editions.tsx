"use client"

import * as React from "react"
import { Check, ArrowRight, Shield, Key, Code } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const freeFeatures = [
  { name: "Modern Terminal", desc: "Unlimited tabs, split panes, custom themes, and font zooming." },
  { name: "Basic Git Dashboard", desc: "Repository status, branches, and ahead/behind tracking." },
  { name: "Project Launcher", desc: "Single-step program and folder launches." },
  { name: "Version Dashboard", desc: "Auto-detects 12 core developer toolchains." },
  { name: "Command Snippets", desc: "Local storage, categorization, and 1-click execution." },
  { name: "Settings Hub", desc: "Access to all base configuration sections." }
]

const proFeatures = [
  { name: "Workspace Manager", desc: "1-click session snapshotting and exact layout restore." },
  { name: "Multi-Step Project Launcher", desc: "Automated multi-action pipelines and orchestrations." },
  { name: "Port Manager", desc: "Win32 process memory inspection, tree kill, and restart." },
  { name: "Advanced Git Suite", desc: "SVG commit graph, stashes, tags, and merge assistants." },
  { name: "Docker Workspace & Doctor", desc: "Compose grouping, dependency graphs, and streaming logs." },
  { name: "SSH Profile Manager", desc: "Grouped remote profiles with direct terminal launch." },
  { name: "Plugin System & SDK v2", desc: "Sandboxed custom modules, widgets, and scoped storage." }
]

export function Editions() {
  return (
    <section id="editions" className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Capability-driven architecture.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Developer Cockpit follows an open-core model. A centralized capability engine gates advanced functionality, verified securely via offline cryptography rather than constant internet checks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Free Edition */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-12 backdrop-blur-sm flex flex-col relative">
            <div className="mb-8 border-b border-zinc-800 pb-8">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">Free Edition</h3>
              <p className="text-zinc-400">Essential tools for individual developers.</p>
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-6">Included Capabilities</h4>
              <ul className="space-y-4">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-zinc-300">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{feature.name}</p>
                      <p className="text-sm text-zinc-500 mt-0.5">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <Button variant="secondary" className="w-full">
                Download Free Edition
              </Button>
            </div>
          </div>

          {/* Pro Edition */}
          <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-8 md:p-12 backdrop-blur-sm flex flex-col relative shadow-[0_0_80px_rgba(16,185,129,0.05)]">
            <div className="absolute top-0 right-0 p-8">
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-emerald-400">
                Premium
              </span>
            </div>
            
            <div className="mb-8 border-b border-zinc-800 pb-8 pr-24">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-2">Pro Edition</h3>
              <p className="text-zinc-400">Advanced workflows, deep diagnostics, and extensibility.</p>
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-6">Everything in Free, plus</h4>
              <ul className="space-y-4">
                {proFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{feature.name}</p>
                      <p className="text-sm text-zinc-500 mt-0.5">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col gap-4">
              <Button variant="primary" className="w-full">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Philosophy Banner */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="flex-1 space-y-4">
            <h4 className="text-xl font-semibold text-zinc-100">Offline-first Cryptographic Licensing</h4>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
              Developer Cockpit respects your privacy and machine resources. The capability engine uses offline Ed25519 digital signature validation. Local license tokens are encrypted using Windows DPAPI, preventing cross-user and cross-machine key theft without requiring constant internet checks.
            </p>
            <Link 
              href="https://github.com/ratuhin1122/developer-cockpit-public/tree/main/docs/licensing" 
              target="_blank"
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mt-2 group"
            >
              Read the detailed licensing documentation
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="flex gap-4 shrink-0 opacity-80">
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500">
              <Shield className="w-6 h-6 mb-1" />
            </div>
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500">
              <Key className="w-6 h-6 mb-1" />
            </div>
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500">
              <Code className="w-6 h-6 mb-1" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
