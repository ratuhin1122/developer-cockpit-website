"use client"

import * as React from "react"
import { Handshake, ArrowRight, BookOpen, Mail, Layers, Puzzle, Box, Code2, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const strengths = [
  "A truly unified developer workspace",
  "High-performance native terminal",
  "Visual Git dashboard",
  "Deep Docker integration",
  "Zero-password SSH manager",
  "Automated project workflows",
  "Session and workspace management",
  "Extensible capability system",
  "Plugin architecture (SDK v2)",
  "Native desktop performance"
]

const collaborationAreas = [
  {
    title: "Developer Productivity",
    desc: "Integrate specialized productivity tools or remote dev environments directly into the native workspace.",
    icon: Zap
  },
  {
    title: "DevOps & Containers",
    desc: "Expand Docker capabilities or introduce Kubernetes, Terraform, and CI/CD pipeline monitoring.",
    icon: Box
  },
  {
    title: "Issue Tracking",
    desc: "Potential integrations for Jira, Linear, or GitHub issues within the plugin sidebar.",
    icon: Code2
  },
  {
    title: "Enterprise Tooling",
    desc: "Deploy custom internal toolchains and proprietary environment configurations for large engineering teams.",
    icon: ShieldCheck
  },
  {
    title: "Plugin Ecosystems",
    desc: "Collaborate on building out the remote plugin registry to support extensive third-party tools.",
    icon: Puzzle
  },
  {
    title: "Cloud Development",
    desc: "Future possibilities for seamless remote-tunnels and cloud-based terminal sessions.",
    icon: Network
  }
]

// Re-import missing icon for the array above
function Zap(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
}

export function Partnership() {
  return (
    <section id="partner" className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-zinc-800 flex items-center justify-center text-zinc-300 shadow-xl backdrop-blur-sm">
              <Handshake className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
            Build the Future of Developer Workspaces.
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Developer Cockpit represents a new paradigm in desktop developer tooling. We are actively open to strategic discussions with engineering organizations, technology providers, and investors.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12">
            {["Strategic Partnerships", "Technology Integrations", "Product Collaboration", "Commercial Licensing", "Investment", "Acquisition", "Engineering Collaboration"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium text-zinc-300">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="mailto:ruhulamintuhin715@gmail.com">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 group">
                <Mail className="mr-2 h-4 w-4" />
                Partner With Developer Cockpit
              </Button>
            </Link>
            <Link href="https://github.com/ratuhin1122/developer-cockpit-public/tree/main/docs" target="_blank">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                <BookOpen className="mr-2 h-4 w-4 text-zinc-400" />
                View Technical Documentation
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Why Partner */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10 backdrop-blur-sm flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-zinc-100 mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-emerald-400" />
              Why Partner With Developer Cockpit?
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Leverage an incredibly fast, native foundation to bring your developer tools directly to the desktop without building from scratch. Our core strengths include:
            </p>
            
            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
                {strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                    <span className="text-zinc-300 text-sm md:text-base leading-tight">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Potential Collaboration Areas */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 md:p-10 backdrop-blur-sm flex flex-col">
            <h3 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-3">
              <Network className="w-6 h-6 text-blue-400" />
              Potential Collaboration Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collaborationAreas.map((area, i) => {
                const Icon = area.icon
                return (
                  <div key={i} className="rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-5 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-zinc-200">{area.title}</h4>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 font-mono text-center">
                * Note: Specific integrations listed above represent future possibilities and areas of mutual exploration, not currently confirmed features.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
