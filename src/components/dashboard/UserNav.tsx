"use client";

import { User } from "lucide-react";

export const UserNav = () => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5 pr-4 backdrop-blur-md">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
        <User className="h-4 w-4" />
      </div>
      <span className="text-xs font-medium text-white">Metages Yibeltal</span>
    </div>
  );
};