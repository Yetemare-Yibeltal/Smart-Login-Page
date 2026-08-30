import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <AmbientBackground />
      <GlassCard className="w-full max-w-md text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Email Verified</h2>
        <p className="text-xs text-gray-400 mb-6">
          Your email address has been successfully verified.
        </p>
        <Link
          href="/login"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg"
        >
          Continue to Sign In
        </Link>
      </GlassCard>
    </main>
  );
}