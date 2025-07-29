import { ThemeToggle } from "@/components/ThemeToggle";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ThemeToggle />
      {children}
    </main>
  );
}
