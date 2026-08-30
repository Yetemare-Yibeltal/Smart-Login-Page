"use client";

import Link from "next/link";
import { LayoutDashboard, Settings, BarChart3, LogOut } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-black/30 p-4 backdrop-blur-xl text-white">
      <div className="mb-8 px-4 font-bold text-xl text-cyan-400">Dashboard</div>
      <nav className="flex-1 space-y-2">
        <Link href="/dashboard" className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
          <LayoutDashboard className="h-5 w-5" /> Overview
        </Link>
        <Link href="/dashboard/analytics" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white">
          <BarChart3 className="h-5 w-5" /> Analytics
        </Link>
        <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white">
          <Settings className="h-5 w-5" /> Settings
        </Link>
      </nav>
      <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-rose-400 hover:bg-rose-500/10 transition-colors">
        <LogOut className="h-5 w-5" /> Sign Out
      </button>
    </aside>
  );
};