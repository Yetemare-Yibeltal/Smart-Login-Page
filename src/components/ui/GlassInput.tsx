"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export const GlassInput: React.FC<GlassInputProps> = ({
  label,
  icon: Icon,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-5">
      <div
        className={`relative flex items-center rounded-xl border bg-white/[0.03] px-4 py-3.5 backdrop-blur-md transition-all duration-300 ${
          isFocused
            ? "border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.15)] bg-white/[0.06]"
            : "border-white/10 hover:border-white/20"
        }`}
      >
        <Icon className={`mr-3 h-5 w-5 transition-colors duration-300 ${isFocused ? "text-cyan-400" : "text-gray-400"}`} />
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          placeholder=" "
          className="peer w-full bg-transparent text-sm text-white outline-none placeholder:text-transparent"
        />
        <label
          className={`pointer-events-none absolute left-12 top-3.5 text-sm text-gray-400 transition-all duration-200 peer-focus:-translate-y-2.5 peer-focus:text-xs peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-300`}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-rose-400 ml-1">{error}</p>}
    </div>
  );
};