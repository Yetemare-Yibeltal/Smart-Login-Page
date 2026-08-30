import { AuthCard } from "@/components/auth/AuthCard";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <AmbientBackground />
      <AuthCard />
    </main>
  );
}