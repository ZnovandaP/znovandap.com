'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

type NextThemeProviderProps = {
  children: React.ReactNode
};

export default function NextThemeProvider({ children }: NextThemeProviderProps) {
  return (
    <ThemeProvider
      enableSystem
      attribute="class"
      defaultTheme="system"
      storageKey="ZNOVANDAP_THEME"
      themes={['light', 'dark']}
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
