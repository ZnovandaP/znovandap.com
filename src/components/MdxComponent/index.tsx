/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import CodeHighlighter from '../Code';

type MdxComponentProps = {
  children: string
};

export default function MdxComponent({ children }: MdxComponentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        remarkMdx,
        remarkParse,
      ]}
      rehypePlugins={[
        rehypeRaw,
        rehypeSanitize,
        rehypeHighlight,
      ]}
      components={{
        a: (props) => (
          <a className="text-sky-500 hover:text-sky-400 hover:underline cursor-pointer" {...props} />
        ),
        p: (props) => <div {...props} className="font-medium text-balance mt-6 hyphens-auto" />,
        h2: (props) => <h2 className="border-l-[6px] border-sky-500 pl-2 text-2xl text-balance mt-6 font-semibold" {...props} />,
        h3: (props) => <h3 className="border-l-4 border-emerald-300/80 pl-2 text-xl text-balance mt-6 font-semibold" {...props} />,
        ul: (props) => <ul className="pl-10 space-y-3 list-disc pb-5 mt-6" {...props} />,
        ol: (props) => <ol className="pl-10 space-y-3 list-decimal pb-5 mt-6" {...props} />,
        blockquote: (props) => (
          <blockquote
            className="pl-6 py-3 border-l-[5px] border-stone-700 border-l-sky-500 bg-stone-100 dark:bg-stone-800 rounded-lg text-sky-800 dark:text-sky-200"
            {...props}
          />
        ),
        table: (props) => (
          <div className="center">
            <table className="table w-full" {...props}>{children}</table>
          </div>
        ),
        th: (props) => <th className="border dark:border-stone-600 py-1 px-3 text-left">{props.children}</th>,
        td: (props) => <td className="border dark:border-stone-600  py-1 px-3">{props.children}</td>,
        code: (props: any) => <CodeHighlighter {...props} />,
        img: (props) => <img className="mx-auto block rounded-lg my-6" {...props} loading="lazy" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
