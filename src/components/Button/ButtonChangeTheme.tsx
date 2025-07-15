import cn from '@/libs/utils/cn';
import * as React from 'react';

type ButtonChangeThemeProps = {
  currentTheme:string
  theme: string
  setTheme: (theme: string) => void
  icon: React.ReactNode
  label: string
};

export default function ButtonChangeTheme({
  theme, setTheme, icon, label, currentTheme,
}: ButtonChangeThemeProps) {
  const isActive = currentTheme.includes(theme);
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center gap-4 px-5 py-2 min-w-full hover:translate-x-2 active:scale-95 transition-all',
        isActive && '',
      )}
      onClick={() => setTheme(theme)}
    >
      <span className="text-xl">
        {icon}
      </span>
      {label}

      {isActive && (
      <div className="ping relative w-2 h-2 bg-green-500 rounded-full ml-auto" />
      )}
    </button>
  );
}
