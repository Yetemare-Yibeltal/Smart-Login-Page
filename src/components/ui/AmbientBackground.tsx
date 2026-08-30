"use client";

import { motion } from "framer-motion";

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Dynamic Blurred Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/40 to-cyan-500/30 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 50, -80, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 80, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-blue-600/30 to-teal-400/20 blur-[110px]"
      />
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};