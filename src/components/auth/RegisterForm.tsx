"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { useAuth } from "@/components/auth/AuthProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    setTimeout(() => {
      login({ name, email });
      setIsLoading(false);
      setStatusMessage("Account created successfully! Redirecting...");
      setTimeout(() => router.push("/"), 1200);
    }, 800);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 text-white overflow-hidden">
      <AmbientBackground />

      <GlassCard className="w-full max-w-md p-8 backdrop-blur-2xl border border-white/10 bg-white/5 rounded-3xl shadow-2xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-cyan-400 transition-colors mb-6"
        >
          <FaArrowLeft /> Back to home
        </Link>

        <h2 className="text-3xl font-bold text-center text-white mb-2">Create Account</h2>
        <p className="text-gray-400 text-sm text-center mb-6">Join us today to get started</p>

        {statusMessage && (
          <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-sm text-emerald-400">
            <FaCheckCircle /> {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-3.5 text-gray-400 text-sm" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Email</label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3.5 text-gray-400 text-sm" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3.5 text-gray-400 text-sm" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full glass-input pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full rounded-xl bg-cyan-500 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" prefetch={true} className="text-cyan-400 hover:underline">
            Sign In
          </Link>
        </p>
      </GlassCard>
    </main>
  );
}