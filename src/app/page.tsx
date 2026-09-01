import Link from "next/link";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { GlassCard } from "@/components/ui/GlassCard";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 text-white overflow-hidden">
      <AmbientBackground />

      <GlassCard className="w-full max-w-xl text-center p-10 backdrop-blur-2xl border border-white/10 bg-white/5 rounded-3xl shadow-2xl relative z-10">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FaShieldAlt className="h-8 w-8" />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white mb-4">
          Smart Auth Glass
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Full-stack authentication system built with Next.js, Framer Motion glassmorphism design, and Prisma ORM.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            prefetch={true}
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Sign In <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/register"
            prefetch={true}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            Create Account
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}