import Link from "next/link";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <AmbientBackground />
      <GlassCard className="max-w-xl p-10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          <ShieldCheck className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-3">
          Smart Auth Glass
        </h1>
        <p className="text-sm text-gray-300 mb-8 leading-relaxed">
          Full-stack authentication system built with Next.js, Framer Motion glassmorphism design, and Prisma ORM.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
          >
            Sign In <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            Create Account
          </Link>
        </div>
      </GlassCard>
    </main>
  );
}