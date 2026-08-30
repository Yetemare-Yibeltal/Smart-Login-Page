"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassButton } from "@/components/ui/GlassButton";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <AmbientBackground />
      <GlassCard className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-2">Reset Password</h2>
        <p className="text-xs text-gray-400 text-center mb-6">
          Enter your registered email to receive a recovery link.
        </p>

        {submitted ? (
          <div className="text-center text-sm text-cyan-400">
            Check your email inbox for password reset instructions.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <GlassInput
              label="Email Address"
              icon={Mail}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <GlassButton type="submit">Send Reset Link</GlassButton>
          </form>
        )}
      </GlassCard>
    </main>
  );
}