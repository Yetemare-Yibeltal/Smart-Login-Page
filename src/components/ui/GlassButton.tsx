"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "relative flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold transition-all duration-300 backdrop-blur-md";
  
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
    secondary:
      "border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.08]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};