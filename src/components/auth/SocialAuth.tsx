"use client";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const SocialAuth = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => signIn("google")}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
      >
        <FaGoogle className="h-4 w-4" /> Google
      </button>
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
      >
        <FaGithub className="h-4 w-4" /> GitHub
      </button>
    </div>
  );
};