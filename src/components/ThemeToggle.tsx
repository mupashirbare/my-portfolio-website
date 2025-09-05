import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-border bg-background"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-md border border-border bg-background hover:bg-accent/10 transition-all duration-300 flex items-center justify-center group hover:scale-105"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 text-accent rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 text-accent rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
};

export default ThemeToggle;