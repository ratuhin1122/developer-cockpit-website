import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-24">
      <div className="mx-auto max-w-[1200px] px-6 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Developer Cockpit. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#terms" className="hover:text-zinc-300">Terms</Link>
          <Link href="#privacy" className="hover:text-zinc-300">Privacy</Link>
          <a href="mailto:ruhulamintuhin715@gmail.com" className="hover:text-zinc-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
