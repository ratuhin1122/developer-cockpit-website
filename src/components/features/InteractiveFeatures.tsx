"use client"

import * as React from "react"
import Image from "next/image"
import { Terminal, Layout, HardDrive, GitBranch, Zap, Plug } from "lucide-react"

type Feature = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  techCapability: string;
  status: "Free" | "Pro" | "Core & Pro";
  imageFocus: string; // CSS object-position to fake different crops of the main screenshot
};

type FeatureGroup = {
  id: string;
  name: string;
  icon: React.ElementType;
  features: Feature[];
};

const featureGroups: FeatureGroup[] = [
  {
    id: "dev-env",
    name: "Development Environment",
    icon: Terminal,
    features: [
      {
        id: "terminal",
        name: "Modern Terminal",
        description: "A high-performance terminal emulator running on xterm.js 6 with native Windows ConPTY integration.",
        benefits: ["Unlimited tabs", "Recursive split panes (horizontal/vertical)", "Custom themes and live font zooming", "In-buffer search"],
        techCapability: "ConPTY / xterm.js",
        status: "Free",
        imageFocus: "object-[10%_10%]"
      }
    ]
  },
  {
    id: "project-workflow",
    name: "Project Workflow",
    icon: Layout,
    features: [
      {
        id: "workspace-manager",
        name: "Workspace Manager",
        description: "1-click snapshotting of entire multi-tab and split-pane terminal sessions with directory bindings.",
        benefits: ["Instant layout restore", "Preserves exact working directories", "Saves cognitive overhead across reboots"],
        techCapability: "SQLite Session Persistence",
        status: "Pro",
        imageFocus: "object-[0%_50%]"
      },
      {
        id: "project-launcher",
        name: "Multi-Step Project Launcher",
        description: "Automated launch orchestration chaining IDE startup, terminal build scripts, dev servers, and local web URLs.",
        benefits: ["Single-click startup", "Framework auto-detection", "Simultaneous process launching"],
        techCapability: "Win32 Process Creation",
        status: "Pro",
        imageFocus: "object-[0%_100%]"
      }
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: HardDrive,
    features: [
      {
        id: "docker",
        name: "Docker Workspace & Doctor",
        description: "Visualize and manage Docker Compose v2 projects with streaming logs and deep health diagnostics.",
        benefits: ["Compose v2 service grouping", "Visual SVG service dependency graph", "WSL2 Docker Doctor health checks", "Container terminal shell launcher"],
        techCapability: "Tauri Channels / Docker CLI",
        status: "Pro",
        imageFocus: "object-[100%_10%]"
      },
      {
        id: "port-manager",
        name: "Port Manager",
        description: "Real-time TCP/TCPv6 socket monitor with deep Win32 process memory introspection.",
        benefits: ["Extract command lines and working directories", "Recursive process tree killing", "In-place process restart"],
        techCapability: "Win32 APIs / Netstat",
        status: "Pro",
        imageFocus: "object-[100%_50%]"
      },
      {
        id: "ssh",
        name: "Zero-Password SSH Manager",
        description: "Organize remote host profiles by groups and favorites with direct terminal connection.",
        benefits: ["Zero-Password storage policy", "Credentials never stored in DB/logs", "Instant 1-click connect"],
        techCapability: "Ed25519 / DPAPI",
        status: "Pro",
        imageFocus: "object-[100%_100%]"
      }
    ]
  },
  {
    id: "vcs",
    name: "Version Control",
    icon: GitBranch,
    features: [
      {
        id: "git",
        name: "Advanced Git Dashboard",
        description: "A complete visual Git client built directly into your workspace.",
        benefits: ["Visual SVG commit history graph", "Ahead/behind upstream counts", "Stash and Tag managers", "Cherry-pick and merge conflict assistants"],
        techCapability: "Native Git CLI Integration",
        status: "Core & Pro",
        imageFocus: "object-[50%_50%]"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: Zap,
    features: [
      {
        id: "snippets",
        name: "Command Snippets",
        description: "A categorized local snippet repository ready for instant use.",
        benefits: ["Single-click execution into active terminal shells", "Fast categorization", "Local storage"],
        techCapability: "SQLite",
        status: "Free",
        imageFocus: "object-[20%_80%]"
      },
      {
        id: "version-dashboard",
        name: "Version Dashboard",
        description: "Automatically probes and verifies installation status for core developer toolchains.",
        benefits: ["Auto-detects 12 developer toolchains", "Verifies exact version strings", "Resolves filesystem paths"],
        techCapability: "Filesystem Probing",
        status: "Free",
        imageFocus: "object-[80%_80%]"
      }
    ]
  },
  {
    id: "extensibility",
    name: "Extensibility",
    icon: Plug,
    features: [
      {
        id: "plugin-system",
        name: "Plugin System & SDK v2",
        description: "A secure, sandboxed runtime allowing custom modules to run natively inside the cockpit.",
        benefits: ["Sandboxed iframe/worker runtime", "Custom sidebar modules", "Overview dashboard widgets", "Scoped SQLite key-value persistence"],
        techCapability: "TypeScript SDK / iframe RPC",
        status: "Pro",
        imageFocus: "object-[50%_0%]"
      }
    ]
  }
];

export function InteractiveFeatures() {
  const [activeGroupId, setActiveGroupId] = React.useState(featureGroups[0].id)
  const [activeFeatureId, setActiveFeatureId] = React.useState(featureGroups[0].features[0].id)

  const activeGroup = featureGroups.find((g) => g.id === activeGroupId) || featureGroups[0]
  const activeFeature = activeGroup.features.find((f) => f.id === activeFeatureId) || activeGroup.features[0]

  return (
    <section id="architecture" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Everything you need. <span className="text-zinc-500">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Deep OS integrations and native performance bring your entire workflow into a single window.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column: Navigation */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide gap-6 lg:gap-8 snap-x">
            {featureGroups.map((group) => {
              const Icon = group.icon
              const isActiveGroup = group.id === activeGroupId
              
              return (
                <div key={group.id} className="flex flex-col min-w-[200px] lg:min-w-0 snap-start">
                  <button 
                    onClick={() => {
                      setActiveGroupId(group.id)
                      setActiveFeatureId(group.features[0].id)
                    }}
                    className={`flex items-center gap-3 text-lg font-medium transition-colors mb-3 whitespace-nowrap lg:whitespace-normal ${isActiveGroup ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActiveGroup ? 'text-blue-500' : ''}`} />
                    {group.name}
                  </button>
                  
                  {isActiveGroup && (
                    <div className="flex flex-col gap-2 pl-8 border-l border-zinc-800 ml-2.5">
                      {group.features.map((feature) => (
                        <button
                          key={feature.id}
                          onClick={() => setActiveFeatureId(feature.id)}
                          className={`text-left text-sm py-1.5 transition-colors whitespace-nowrap lg:whitespace-normal ${activeFeatureId === feature.id ? 'text-zinc-100 font-medium' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                          {feature.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Feature Content */}
          <div className="lg:w-2/3">
            <div 
              key={activeFeature.id} 
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl animate-fade-in-up"
            >
              {/* Feature Image Area */}
              <div className="w-full h-64 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden">
                <Image 
                  src="/developer-cockpit.png" 
                  alt={activeFeature.name} 
                  fill
                  sizes="(max-width: 1200px) 100vw, 800px"
                  className={`object-cover transition-all duration-700 ease-in-out ${activeFeature.imageFocus}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              </div>

              {/* Feature Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-zinc-100">{activeFeature.name}</h3>
                  <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${activeFeature.status.includes('Pro') ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-zinc-700 text-zinc-400 bg-zinc-800'}`}>
                    {activeFeature.status}
                  </span>
                </div>
                
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  {activeFeature.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Benefits</h4>
                    <ul className="space-y-3">
                      {activeFeature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Core Technology</h4>
                    <div className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm font-mono text-zinc-300">
                      {activeFeature.techCapability}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
