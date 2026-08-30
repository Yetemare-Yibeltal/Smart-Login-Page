import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { AuthCard } from "@/components/auth/AuthCard";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center p-4">
      <AmbientBackground />
      <AuthCard />
    </main>
  );
}