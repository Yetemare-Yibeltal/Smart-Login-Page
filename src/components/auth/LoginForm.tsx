"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { GlassInput } from "@/components/ui/GlassInput";
import { GlassButton } from "@/components/ui/GlassButton";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <GlassInput
        label="Email Address"
        icon={Mail}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <GlassInput
        label="Password"
        icon={Lock}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <GlassButton type="submit">Sign In</GlassButton>
    </form>
  );
};