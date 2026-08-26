# Developer Cockpit - Website Content Audit

Based on the verified documentation in `developer-cockpit-public`, here is the extracted product information for building the website.

## 1. Product Purpose
An extensible, high-performance desktop workspace designed to unify core developer workflows and eliminate context switching on Windows.

## 2. Product Positioning
Developer Cockpit consolidates fragmented daily developer utilities (terminals, layout managers, project launchers, port monitors, Git, Docker, SSH, snippet libraries) into a single, low-latency native application built on Tauri, React, and Rust.

## 3. Major Features
- Modern Terminal (ConPTY / xterm.js)
- Workspace Manager (Snapshot & Restore)
- Multi-Step Project Launcher
- Port Manager & Process Inspector
- Advanced Git Dashboard
- Docker Workspace & Doctor
- Zero-Password SSH Profile Manager
- Version Dashboard
- Command Snippets Library
- Extensible Plugin System (SDK v2)

## 4. Free Features
- Modern Terminal (Unlimited tabs, split panes, all shells, themes, zoom)
- Basic Git Dashboard (Repository status, branches, ahead/behind tracking)
- Project Launcher (Single-step program & folder launches)
- Version Dashboard (Auto-detects 12 toolchains)
- Command Snippets Library (Local storage, categorization, 1-click execution)
- Settings Hub

## 5. Pro Features
- Workspace Manager (Session snapshotting & layout restore)
- Multi-Step Project Launcher (Automated multi-action pipelines)
- Port Manager (Win32 process memory inspection, tree kill, restart)
- Advanced Git Suite (SVG commit graph, stashes, tags, merge assistants, analytics)
- Docker Workspace & Doctor (Compose grouping, graphs, streaming logs, diagnostics)
- SSH Profile Manager (Grouped profiles & direct terminal launch)
- Plugin System & SDK v2 (Sandboxed custom modules, widgets, scoped storage)

## 6. Terminal Capabilities
- ConPTY integration running on xterm.js 6
- Multi-tab sessions
- Recursive split panes (horizontal/vertical)
- Shell selection (PowerShell 7, CMD, Git Bash)
- Custom themes
- Live font zooming
- In-buffer search

## 7. Git Capabilities
- Visual SVG commit history graph
- Branch management
- Ahead/behind upstream counts
- Track staged/unstaged changes
- Stash manager
- Tag manager
- Cherry-pick and merge conflict assistants
- Contributor analytics

## 8. Docker Capabilities
- Compose v2 service grouping
- Visual SVG service dependency graph
- Streaming log drawer (via Tauri Channels)
- Container terminal shell launcher
- WSL2 Docker Doctor checks (daemon health, reclaimable disk space, WSL2 status)

## 9. SSH Capabilities
- Zero-Password storage policy (credentials never stored in DB/logs)
- Organize remote host profiles by groups and favorites
- Direct terminal connection

## 10. Port Manager
- Real-time TCP/TCPv6 socket monitor
- Win32 process memory introspection (extracting command lines and working directories)
- Recursive process tree killing
- Process restart capabilities

## 11. Project Launcher
- Multi-step automated launch orchestration (e.g., chain IDE startup, terminal build scripts, dev servers, local web URLs)
- Folder views
- Framework auto-detection

## 12. Workspace Functionality
- 1-click snapshotting of entire multi-tab and split-pane terminal sessions with directory bindings
- 1-click layout restore

## 13. Command Snippets
- Categorized snippet repository
- Local storage
- Single-click execution into active terminal shells

## 14. Plugin System
- Plugin SDK v2 (`@developer-cockpit/plugin-sdk`)
- Sandboxed iframe/worker runtime execution
- Custom sidebar modules and overview dashboard widgets
- Scoped SQLite key-value persistence

## 15. Version Dashboard
- Probes and verifies installation status, version strings, and filesystem paths for 12 core developer toolchains

## 16. Architecture
- **Frontend Layer:** React 19, TypeScript, Vite 7, Zustand stores, Plugin Sandbox
- **IPC Bridge:** Tauri v2 commands and channels
- **Backend Layer:** Rust 2021, Domain Command Handlers, TerminalManager (ConPTY), DockerLogManager, License Engine, SQLite Plugin
- **Operating System Layer:** Windows ConPTY, Win32 APIs (Process Memory, Netstat, DPAPI), CLI Toolchains

## 17. Technology Stack
- **Desktop Framework:** Tauri v2 (Rust 2021)
- **UI:** React 19 + TypeScript 5.8 + Vite 7
- **Styling:** Tailwind CSS v4 + Radix UI Primitives + Lucide Icons
- **State:** Zustand 5
- **DB:** SQLite (`tauri-plugin-sql`)
- **Terminal:** ConPTY (`portable-pty: 0.8`) + xterm.js 6
- **Cryptography:** Ed25519 (`ed25519-dalek: 2.0`) + Windows DPAPI

## 18. Platform Support
- Microsoft Windows 10 (version 1809+) and Windows 11 (x86_64)

## 19. Licensing Model
- Open-core commercial model with capability-driven gating
- Offline Ed25519 digital signature validation
- Local license tokens encrypted using Windows DPAPI

## 20. Roadmap
- **Phase 1 (Completed):** Native Windows Core (v0.1.0)
- **Phase 2 (Planned):** Extensibility & Ecosystem (Remote Plugin Registry)
- **Phase 3 (Planned):** Cloud Synchronization & Collaboration (Team workspaces, E2EE sync)
- **Phase 4 (Long-Term):** Multi-Platform Exploration (macOS/Linux POSIX PTY)

## 21. Partnership Opportunity
- Open to Strategic Partnerships, Technology Integrations, Product Collaboration, Commercial Licensing & Distribution, Investment, Acquisition Discussions.
- Contact: ruhulamintuhin715@gmail.com

## 22. Existing Screenshots
- `assets/developer-cockpit.png`
- Detailed screenshots available in `assets/screenshots/`

## 23. Existing Demo Video
- Documented in `demo/DEMO.md`
- Contains LinkedIn video links for:
  - Modern Terminal
  - Project & Workspace Launcher
  - Port Manager, Versions & Snippets
  - Git Dashboard
  - Docker Workspace & Doctor

## 24. Existing Branding/Assets
- Main Logo/UI: `assets/developer-cockpit.png`
- Branding resources in `assets/branding/`
- Architecture diagrams in `assets/diagrams/`
