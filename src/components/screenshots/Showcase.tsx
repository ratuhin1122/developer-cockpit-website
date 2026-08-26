"use client"

import * as React from "react"
import { Terminal, GitBranch, Docker, Layout, Activity, Code2, Plug, ShieldCheck, Box } from "lucide-react"

const features = [
  {
    name: "Modern Terminal",
    description: "Multi-tab, split-pane ConPTY terminal with live font zooming and curated themes.",
    icon: Terminal,
    label: "Core",
  },
  {
    name: "Git Dashboard",
    description: "Visual SVG commit history graphs, stash management, and merge assistants.",
    icon: GitBranch,
    label: "Pro",
  },
  {
    name: "Docker Workspace",
    description: "Compose v2 project grouping, dependency graphs, and streaming logs.",
    icon: Box,
    label: "Pro",
  },
  {
    name: "Project Launcher",
    description: "Automated multi-step pipelines to orchestrate IDEs, builds, and servers.",
    icon: Layout,
    label: "Pro",
  },
  {
    name: "Port Manager",
    description: "Real-time TCP socket monitor with Win32 process memory introspection.",
    icon: Activity,
    label: "Pro",
  },
  {
    name: "Command Snippets",
    description: "Categorized snippet repository with single-click execution.",
    icon: Code2,
    label: "Core",
  },
  {
    name: "Plugin System",
    description: "Sandboxed iframe/worker runtime supporting custom modules.",
    icon: Plug,
    label: "Pro",
  },
  {
    name: "Version Dashboard",
    description: "Probes and verifies installation status for 12 developer toolchains.",
    icon: ShieldCheck,
    label: "Core",
  }
]

export function Showcase() {
  const [activeFeature, setActiveFeature] = React.useState(0)

  return (
    <section id="features" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            A unified interface for your entire stack.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Developer Cockpit replaces half a dozen disparate tools with a single, highly optimized native application.
          </p>
        </div>

        {/* Large Featured Screenshot Area */}
        <div className="mb-24">
          <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-[0_24px_80px_rgba(0,0,0,0.8)] bg-zinc-900">
            {/* Window Chrome */}
            <div className="h-10 border-b border-zinc-800 bg-zinc-900/80 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
            </div>
            {/* The Actual Application Screenshot */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
               <img 
                 src="/developer-cockpit.png" 
                 alt="Developer Cockpit Interface" 
                 className="w-full h-full object-cover object-top"
               />
            </div>
          </div>
        </div>

        {/* Features Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.name}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border ${feature.label === 'Pro' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-zinc-700 text-zinc-400 bg-zinc-800'}`}>
                    {feature.label}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-zinc-100 mb-2">{feature.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
