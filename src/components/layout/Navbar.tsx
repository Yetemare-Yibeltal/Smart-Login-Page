"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/20 px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <ShieldCheck className="h-6 w-6 text-cyan-400" />
          <span>SmartAuth</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <Link href="/login" className="hover:text-white transition-colors">Login</Link>
          <Link href="/register" className="rounded-xl bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/20 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};