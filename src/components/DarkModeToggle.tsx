
'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} />
          <span className="text-sm font-medium">Light</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span className="text-sm font-medium">Dark</span>
        </>
      )}
    </button>
  );
}
