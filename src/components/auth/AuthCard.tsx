"use client";

import React from "react";
import { Mail, Lock, User, ArrowRight, Globe } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";

interface AuthCardProps {
  type: "login" | "register";
}

export function AuthCard({ type }: AuthCardProps) {
  const isLogin = type === "login";

  return (
    <GlassCard className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill in the details below to get started"}
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl glass-input py-3 pl-10 pr-4 text-sm"
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl glass-input py-3 pl-10 pr-4 text-sm"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl glass-input py-3 pl-10 pr-4 text-sm"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
        >
          {isLogin ? "Sign In" : "Register"} <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="relative my-6 text-center text-xs text-gray-400">
        <span className="bg-slate-900 px-2 relative z-10">Or continue with</span>
        <div className="absolute inset-0 top-1/2 border-t border-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs text-white backdrop-blur-md transition-all hover:bg-white/10"
        >
          <FaGoogle className="h-4 w-4 text-red-400" /> Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs text-white backdrop-blur-md transition-all hover:bg-white/10"
        >
          <FaGithub className="h-4 w-4 text-white" /> GitHub
        </button>
      </div>
    </GlassCard>
  );
}