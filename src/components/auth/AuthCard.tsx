"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Github, Globe } from "lucide-react";
import { GlassInput } from "@/components/ui/GlassInput";

export const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl"
    >
      {/* Top Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          {isLogin
            ? "Enter your credentials to access your dashboard"
            : "Sign up today to get started with our platform"}
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="mb-8 flex rounded-xl bg-black/20 p-1 backdrop-blur-md">
        <button
          onClick={() => setIsLogin(true)}
          className={`relative w-1/2 py-2 text-sm font-medium transition-colors duration-300 ${
            isLogin ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {isLogin && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-lg bg-white/10 shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">Sign In</span>
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`relative w-1/2 py-2 text-sm font-medium transition-colors duration-300 ${
            !isLogin ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {!isLogin && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-lg bg-white/10 shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">Register</span>
        </button>
      </div>

      {/* Form Fields */}
      <form onSubmit={(e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          {!isLogin && (
            <motion.div
              key="name-input"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <GlassInput label="Full Name" icon={User} type="text" />
            </motion.div>
          )}
        </AnimatePresence>

        <GlassInput label="Email Address" icon={Mail} type="email" />
        <GlassInput label="Password" icon={Lock} type="password" />

        {isLogin && (
          <div className="mb-6 flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-0" />
              Remember me
            </label>
            <a href="#" className="hover:text-cyan-400 transition-colors">Forgot password?</a>
          </div>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40"
        >
          <span>{isLogin ? "Sign In" : "Create Account"}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </form>

      {/* Social Login Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-[1px] flex-1 bg-white/10" />
        <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* OAuth Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
          <Chrome className="h-4 w-4" /> Google
        </button>
        <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
          <Github className="h-4 w-4" /> GitHub
        </button>
      </div>
    </motion.div>
  );
};