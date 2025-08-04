"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ThemeIcon } from "@/components/icons/ThemeIcon";
import { NavbarItem } from "@/components/ui/Navbar";

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
    <NavbarItem
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group z-50"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <ThemeIcon className="-m-0.5 h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-zinc-900 lg:dark:fill-white" />
    </NavbarItem>
  );
}
