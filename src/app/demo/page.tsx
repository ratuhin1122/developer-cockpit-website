"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Play, 
  ArrowLeft, 
  ExternalLink, 
  Terminal, 
  GitBranch, 
  Container, 
  Puzzle, 
  FolderKanban, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/Button"

interface DemoVideo {
  id: string
  youtubeId: string
  title: string
  category: string
  duration: string
  icon: React.ComponentType<{ className?: string }>
  summary: string
  highlights: string[]
  youtubeUrl: string
}

const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: "full-overview",
    youtubeId: "VX4sPTuXyGk",
    title: "Developer Cockpit Full Walkthrough",
    category: "Overview",
    duration: "Full Tour",
    icon: Sparkles,
    summary: "A complete end-to-end walkthrough of Developer Cockpit — explore how terminal tabs, visual Git, Docker containers, project workspaces, and utilities unify into a single high-performance cockpit.",
    highlights: [
      "Unified workspace overview and navigation",
      "Instant multi-pane terminal switching",
      "Integrated Docker & Git status dashboards",
      "Zero-latency workflow orchestration"
    ],
    youtubeUrl: "https://youtu.be/VX4sPTuXyGk"
  },
  {
    id: "terminal",
    youtubeId: "pbQiyEtL-kg",
    title: "Terminal & Shell Orchestration",
    category: "Terminal",
    duration: "Feature Demo",
    icon: Terminal,
    summary: "Experience native Windows terminal performance with customizable shell profiles (PowerShell, WSL 2, Git Bash, Command Prompt), split views, tabs, and quick commands.",
    highlights: [
      "Hardware-accelerated native terminal rendering",
      "Split vertical & horizontal panes",
      "Profiles for WSL, PowerShell, and Git Bash",
      "Integrated hotkeys and snippet runners"
    ],
    youtubeUrl: "https://youtu.be/pbQiyEtL-kg"
  },
  {
    id: "docker",
    youtubeId: "VJgx_NyVtsk",
    title: "Docker Container & Image Management",
    category: "Docker",
    duration: "Feature Demo",
    icon: Container,
    summary: "Monitor and manage Docker containers, inspect real-time log streams, manage lifecycle states, and examine port bindings without launching bulky desktop tools.",
    highlights: [
      "Live container status & resource monitor",
      "Instant container log streaming",
      "Port mapping inspections & start/stop actions",
      "Local Docker daemon integration"
    ],
    youtubeUrl: "https://youtu.be/VJgx_NyVtsk"
  },
  {
    id: "git",
    youtubeId: "KyMxAcBrQBM",
    title: "Visual Git Dashboard & Workflows",
    category: "Git",
    duration: "Feature Demo",
    icon: GitBranch,
    summary: "A fluid, visual Git experience built directly into your cockpit. Inspect uncommitted changes, stage files, review side-by-side diffs, switch branches, and commit in seconds.",
    highlights: [
      "Visual change tree and status overview",
      "Side-by-side diff inspection",
      "Fast stage, unstage, and commit actions",
      "Branch switcher and history visualization"
    ],
    youtubeUrl: "https://youtu.be/KyMxAcBrQBM"
  },
  {
    id: "plugins",
    youtubeId: "Mu6EPB-zN7g",
    title: "Extensible Plugin Ecosystem",
    category: "Plugins",
    duration: "Feature Demo",
    icon: Puzzle,
    summary: "Discover how the modular plugin architecture lets you install community extensions, customize workflow tools, and integrate custom developer toolchains.",
    highlights: [
      "Plugin manager & one-click installation",
      "Modular sidebar and dashboard integrations",
      "Custom tool scripting capabilities",
      "Configurable settings per extension"
    ],
    youtubeUrl: "https://youtu.be/Mu6EPB-zN7g"
  },
  {
    id: "workspace",
    youtubeId: "T-7YOJxmpxM",
    title: "Projects & Workspace Launcher",
    category: "Workspace",
    duration: "Feature Demo",
    icon: FolderKanban,
    summary: "Eliminate context switching. Quickly launch recent repositories, restore workspace layouts, organize project groups, and switch environments with zero friction.",
    highlights: [
      "One-click project launcher",
      "Workspace layout & session persistence",
      "Multi-repository group management",
      "Fast fuzzy search project navigation"
    ],
    youtubeUrl: "https://youtu.be/T-7YOJxmpxM"
  },
  {
    id: "ports-snippets",
    youtubeId: "LAAn1ov8Zik",
    title: "Ports, Versions & Snippets",
    category: "Tools",
    duration: "Feature Demo",
    icon: Cpu,
    summary: "Monitor active listening ports and kill rogue processes, check installed runtime versions (Node, Python, Go, Rust), and store frequently used CLI snippets.",
    highlights: [
      "Active port listener & process killer",
      "Runtime SDK and CLI version inspector",
      "Reusable snippet library with quick execution",
      "System environment status at a glance"
    ],
    youtubeUrl: "https://youtu.be/LAAn1ov8Zik"
  }
]

const CATEGORIES = ["All", "Overview", "Terminal", "Docker", "Git", "Plugins", "Workspace", "Tools"]

export default function DemoPage() {
  const [selectedVideo, setSelectedVideo] = React.useState<DemoVideo>(DEMO_VIDEOS[0])
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const playerRef = React.useRef<HTMLDivElement>(null)

  const filteredVideos = React.useMemo(() => {
    if (selectedCategory === "All") return DEMO_VIDEOS
    return DEMO_VIDEOS.filter(video => video.category === selectedCategory)
  }, [selectedCategory])

  const handleSelectVideo = (video: DemoVideo) => {
    setSelectedVideo(video)
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const ActiveIcon = selectedVideo.icon

  return (
    <div className="min-h-screen text-foreground">
      {/* Top Header / Breadcrumb */}
      <div className="border-b border-zinc-900 bg-zinc-950/60 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>7 Demo Videos Available</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        
        {/* Page Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Video Demonstration Showcase
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            Explore Developer Cockpit
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Watch deep-dive walkthroughs for every module, from native terminal split views and Git diffs to Docker container inspection and custom plugins.
          </p>
        </div>

        {/* Featured Video Player View */}
        <div ref={playerRef} className="scroll-mt-36 mb-16">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-3 md:p-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/15 via-emerald-600/15 to-purple-600/15 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
            
            {/* Embed Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-inner">
              <iframe
                key={selectedVideo.youtubeId}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1&autoplay=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full absolute inset-0"
              />
            </div>

            {/* Video Details Bar */}
            <div className="mt-6 px-2 md:px-4 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-blue-400 border border-zinc-700">
                      <ActiveIcon className="w-3.5 h-3.5" />
                      {selectedVideo.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {selectedVideo.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100">
                    {selectedVideo.title}
                  </h2>
                </div>

                <a 
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button variant="secondary" size="sm" className="w-full md:w-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </a>
              </div>

              {/* Description & Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                <div className="md:col-span-2 space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                    About This Walkthrough
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-base">
                    {selectedVideo.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2.5">
                    {selectedVideo.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zinc-300 gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
              All Feature Walkthroughs
            </h2>
            <span className="text-sm text-zinc-400">
              Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-md"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredVideos.map((video) => {
            const Icon = video.icon
            const isPlaying = selectedVideo.id === video.id

            return (
              <div
                key={video.id}
                onClick={() => handleSelectVideo(video)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                  isPlaying 
                    ? "border-blue-500/80 bg-zinc-900/90 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/10" 
                    : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-xl"
                }`}
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-video bg-zinc-950 overflow-hidden border-b border-zinc-800/60">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-zinc-950/80 backdrop-blur-md text-zinc-200 border border-zinc-800">
                      <Icon className="w-3 h-3 text-blue-400" />
                      {video.category}
                    </span>
                  </div>

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
                      isPlaying 
                        ? "bg-blue-500 text-white scale-110" 
                        : "bg-zinc-950/80 backdrop-blur-sm text-zinc-200 border border-zinc-700/80 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500"
                    }`}>
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {isPlaying && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-blue-500/90 text-white text-[10px] font-mono font-medium">
                      Now Playing
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors line-clamp-1 text-lg mb-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {video.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs">
                    <span className="font-medium text-zinc-400 group-hover:text-zinc-200 flex items-center gap-1 transition-colors">
                      {isPlaying ? "Currently viewing" : "Click to play"}
                      <Play className="w-3 h-3 ml-0.5" />
                    </span>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-500 hover:text-blue-400 p-1 transition-colors"
                      title="Open directly on YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-indigo-500/10 rounded-3xl blur-xl pointer-events-none" />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Ready to supercharge your developer workflow?
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Explore Developer Cockpit features and compare our free and pro tiers to eliminate context switching on Windows today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/#editions" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full">
                  Compare Editions
                </Button>
              </Link>
              <Link href="/#partner" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
