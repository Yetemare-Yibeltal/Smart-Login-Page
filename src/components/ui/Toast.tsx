"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  type?: "success" | "error";
  onClose: () => void;
}

export const Toast = ({ message, type = "success", onClose }: ToastProps) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-2xl ${
          type === "success"
            ? "border-emerald-500/30 bg-emerald-950/40 text-emerald-200"
            : "border-rose-500/30 bg-rose-950/40 text-rose-200"
        }`}
      >
        {type === "success" ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
        ) : (
          <AlertCircle className="h-5 w-5 text-rose-400" />
        )}
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 text-white/50 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};