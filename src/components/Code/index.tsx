import * as React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { dracula as themeColor } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ButtonCopy from '../Button/ButtonCopy';

const languages = {
  javascript: 'javascript',
  typescript: 'typescript',
  diff: 'diff',
  tsx: 'tsx',
  css: 'css',
  bash: 'bash',
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.diff, diff);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
SyntaxHighlighter.registerLanguage(languages.css, css);
SyntaxHighlighter.registerLanguage(languages.bash, bash);

type CodeHighlighterProps = {
  className: string
  children: any
};

export default function CodeHighlighter({
  className = '', children, ...other
}: CodeHighlighterProps) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <div className="relative mt-6">
      <SyntaxHighlighter
        {...other}
        language={match ? match[1] : 'typescript'}
        style={themeColor}
        customStyle={{
          borderRadius: '.75rem',
          padding: '1.25rem',
          fontSize: '1rem',
          fontWeight: 500,
        }}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
      <ButtonCopy code={children.toString()} />
    </div>
  ) : (
    <code className="font-medium bg-stone-300/80 text-sky-600 dark:text-sky-400 dark:bg-stone-700 py-1 px-2 rounded-md text-[14px]">
      {children}
    </code>
  );
}
