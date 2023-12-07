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
  return (
    <button
      type="button"
      className="flex items-center gap-2 justify-center px-4 py-2 min-w-full hover:scale-110 active:scale-95 transition-all"
      onClick={() => setTheme(theme)}
    >
      <span className="text-xl">
        {icon}
      </span>
      {label}

      {currentTheme.includes(theme) && (
      <div className="ping relative w-2 h-2 bg-green-500 rounded-full" />
      )}
    </button>
  );
}
