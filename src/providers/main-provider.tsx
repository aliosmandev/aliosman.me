"use client";

import NavbarLayout from "@/components/layouts/navbar";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Toaster />
        <main className="text-foreground bg-background h-screen font-light flex items-center flex-col md:gap-y-20 gap-y-10">
          <NavbarLayout />
          <div className="w-full max-w-3xl px-6">{children}</div>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
