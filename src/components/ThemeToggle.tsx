"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ThemeIcon } from "@/components/icons/ThemeIcon";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group z-50 -m-2.5 p-2.5"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <ThemeIcon className="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-zinc-900 lg:dark:fill-white" />
    </button>
  );
}
