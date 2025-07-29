import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { ApplicationLayout } from "@/components/ApplicationLayout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "stryyde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <Providers>
          <ApplicationLayout>{children}</ApplicationLayout>
        </Providers>
      </body>
    </html>
  );
}
