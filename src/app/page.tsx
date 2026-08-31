import { Sidebar } from "@/components/dashboard/Sidebar";
import { UserNav } from "@/components/dashboard/UserNav";
import { GlassCard } from "@/components/ui/GlassCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 p-8 text-white">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Overview</h1>
            <p className="text-xs text-gray-400">Welcome to your secure control panel.</p>
          </div>
          <UserNav />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-sm font-medium text-gray-400">Total Sessions</h3>
            <p className="mt-2 text-3xl font-bold text-cyan-400">1,248</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-sm font-medium text-gray-400">Security Score</h3>
            <p className="mt-2 text-3xl font-bold text-emerald-400">98%</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-sm font-medium text-gray-400">Active Tokens</h3>
            <p className="mt-2 text-3xl font-bold text-violet-400">3</p>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}