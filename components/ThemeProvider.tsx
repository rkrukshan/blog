"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
type ThemeProviderProps = React.ComponentProps<typeof NextThemeProvider>;

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
