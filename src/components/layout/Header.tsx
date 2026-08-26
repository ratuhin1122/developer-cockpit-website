import Link from "next/link";
import { Terminal } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-zinc-100" />
          <span className="font-semibold text-zinc-100">Developer Cockpit</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="text-zinc-400 hover:text-zinc-100 transition-colors">Features</Link>
          <Link href="#architecture" className="text-zinc-400 hover:text-zinc-100 transition-colors">Architecture</Link>
          <Link href="#roadmap" className="text-zinc-400 hover:text-zinc-100 transition-colors">Roadmap</Link>
          <Link href="https://github.com/ratuhin1122/developer-cockpit-public" target="_blank" className="text-zinc-400 hover:text-zinc-100 transition-colors">GitHub</Link>
        </nav>
      </div>
    </header>
  );
}
