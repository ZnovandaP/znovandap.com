import * as React from 'react';

type ButtonSubmitProps = {
  text: string
  disabled?: boolean
  icon?: React.ReactElement
};

export default function ButtonSubmit({ text, disabled = false, icon }: ButtonSubmitProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="center gap-2 px-4 py-3 text-stone-100 bg-emerald-600 hover:text-stone-600 hover:bg-transparent hover:ring-2 hover:ring-emerald-600 dark:hover:text-stone-100 rounded-lg font-medium transition-all duration-300"
    >
      {icon || null}
      {text}
    </button>
  );
}
