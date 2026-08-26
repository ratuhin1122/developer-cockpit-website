"use client"

import * as React from "react"
import { CheckCircle2, CircleDashed, Circle, ArrowRight, Lightbulb, Map } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const roadmapPhases = [
  {
    id: "completed",
    status: "Completed",
    phase: "Phase 1: Native Windows Core (v0.1.0)",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      "Tauri v2 + React 19 + Rust + SQLite foundation",
      "Multi-tab & split-pane Modern Terminal with ConPTY integration",
      "Workspace snapshot and restore",
      "Multi-step Project Launcher with framework detection",
      "Win32 Port Manager with process tree termination",
      "Git Dashboard with SVG commit graph, merge/cherry-pick assistants, analytics",
      "Docker Workspace with Compose v2 grouping, channel log streaming, Docker Doctor",
      "Zero-password SSH Profile Manager",
      "Version Dashboard detecting 12 developer runtimes",
      "Command Snippets Library",
      "Plugin SDK v2 with sandboxed execution and scoped storage",
      "Offline Ed25519 licensing with Windows DPAPI encryption"
    ]
  },
  {
    id: "current-next",
    status: "Current & Next",
    phase: "Phase 2: Extensibility & Ecosystem",
    icon: CircleDashed,
    iconColor: "text-blue-500 animate-spin-slow",
    bgClass: "bg-blue-500/10 border-blue-500/20",
    items: [
      "Remote Plugin Registry: Official community and enterprise plugin repository index",
      "Expanded Plugin Contributions: Additional hook points for custom toolbars, status bar items, and custom file viewer panels",
      "Cross-Workspace Context Sharing: Enhanced project metadata extraction for IDE extensions"
    ]
  },
  {
    id: "future",
    status: "Future",
    phase: "Phase 3: Cloud Synchronization & Collaboration",
    icon: Circle,
    iconColor: "text-zinc-500",
    bgClass: "bg-zinc-800/30 border-zinc-700/30",
    items: [
      "Cloud Sync Backend: End-to-end encrypted synchronization for settings, snippets, and workspaces across devices",
      "Team Workspaces: Shared project configurations and team-wide launch profiles",
      "Enterprise License Server Integration: Automated activation and team license management dashboard"
    ]
  },
  {
    id: "strategic",
    status: "Strategic Opportunities",
    phase: "Phase 4: Multi-Platform Exploration",
    icon: Lightbulb,
    iconColor: "text-purple-500",
    bgClass: "bg-purple-500/10 border-purple-500/20",
    items: [
      "POSIX PTY & Platform Abstraction: Abstract platform-specific Win32/DPAPI/ConPTY code to support macOS and Linux desktop environments"
    ]
  }
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
              <Map className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Product Roadmap
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A transparent look at the past, present, and future trajectory of Developer Cockpit.
          </p>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pb-12">
          {roadmapPhases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div key={phase.id} className="mb-16 relative pl-10 md:pl-16 group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center ${phase.iconColor}`}>
                  <Icon className="w-5 h-5 bg-zinc-950 rounded-full" />
                </div>

                {/* Content */}
                <div className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${phase.bgClass} ${phase.iconColor}`}>
                      {phase.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-100 mb-6">{phase.phase}</h3>
                  
                  <ul className="space-y-4">
                    {phase.items.map((item, i) => {
                      const splitIndex = item.indexOf(':');
                      const hasTitle = splitIndex !== -1 && splitIndex < 50;
                      
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2 shrink-0 group-hover:bg-zinc-500 transition-colors"></div>
                          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {hasTitle ? (
                              <>
                                <strong className="text-zinc-200 font-medium">{item.substring(0, splitIndex + 1)}</strong>
                                {item.substring(splitIndex + 1)}
                              </>
                            ) : (
                              item
                            )}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center border-t border-zinc-900 pt-16">
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">Want more details?</h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Review the complete architectural and functional roadmap directly in our public repository.
          </p>
          <Link href="https://github.com/ratuhin1122/developer-cockpit-public/blob/main/roadmap/ROADMAP.md" target="_blank">
            <Button variant="outline" className="w-full sm:w-auto group">
              View Complete Roadmap Docs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
