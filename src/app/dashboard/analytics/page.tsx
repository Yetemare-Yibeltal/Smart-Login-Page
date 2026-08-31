import { Sidebar } from "@/components/dashboard/Sidebar";
import { GlassCard } from "@/components/ui/GlassCard";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">Authentication Metrics</h1>
        <GlassCard>
          <p className="text-sm text-gray-400">User login activity and telemetry charts.</p>
          <div className="mt-6 h-64 w-full rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
            <span className="text-xs text-gray-500">[ Dynamic Analytics Visualization ]</span>
          </div>
          
        </GlassCard>
      </main>
    </div>
  );
}
