import Link from 'next/link';
import * as React from 'react';

type ButtonLinkProps = {
  href: string
  target?: string
  icon?: React.ReactElement
  text: string
};

type ButtonProps = {
  icon?: React.ReactElement
  text: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
};

export function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group center bg-stone-100 dark:bg-stone-900 px-12 py-2 rounded-tl-full rounded-br-full font-medium ring-2 ring-stone-500/70 hover:scale-105 active:scale-95 transition-all duration-300"
    >
      {text}

      {icon && (
        <span className="text-xl ml-4 group-hover:-rotate-45 transition-all duration-300">
          {icon}
        </span>
      )}
    </button>
  );
}

export function ButtonLink({
  text, icon, href, target,
}: ButtonLinkProps) {
  return (
    <Link
      className="group center bg-stone-100 dark:bg-stone-900 px-12 py-2 rounded-tl-full rounded-br-full font-medium ring-2 ring-stone-500/70 hover:scale-105 active:scale-95 transition-all duration-300"
      href={href}
      target={target}
    >
      {text}

      {icon && (
        <span className="text-xl ml-4 group-hover:-rotate-45 transition-all duration-300">
          {icon}
        </span>
      )}
    </Link>
  );
}
