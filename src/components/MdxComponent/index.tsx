/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Image from 'next/image';
import CodeHighlighter from '../Code';

type MdxComponentProps = {
  children: string
};

export default function MdxComponent({ children }: MdxComponentProps) {
  return (
    <Markdown
      remarkPlugins={[
        remarkGfm,
        remarkMdx,
        remarkParse,
      ]}
      rehypePlugins={[
        rehypeRaw,
        rehypeSanitize,
      ]}
      components={{
        a: (props) => (
          <a
            className="text-sky-500 hover:text-sky-400 hover:underline cursor-pointer"
            target="_blank"
            {...props}
          />
        ),
        p: (props) => <div {...props} className="font-medium mt-6 hyphens-auto" />,
        h2: (props) => <h2 className="border-l-[6px] border-sky-500 pl-2 text-2xl text-balance mt-6 font-semibold" {...props} />,
        h3: (props) => <h3 className="border-l-4 border-emerald-300/80 pl-2 text-xl text-balance mt-6 font-semibold" {...props} />,
        h4: (props) => <h4 className="text-lg text-balance mt-6 font-semibold" {...props} />,
        ul: (props) => <ul className="pl-10 space-y-3 list-disc pb-5 mt-6 font-medium" {...props} />,
        ol: (props) => <ol className="pl-10 space-y-3 list-decimal pb-5 mt-6 font-medium" {...props} />,
        blockquote: (props) => (
          <blockquote
            className="pl-6 py-3 border-l-[5px] border-stone-700 border-l-sky-500 bg-stone-100 dark:bg-stone-800 rounded-lg text-sky-800 dark:text-sky-200"
            {...props}
          />
        ),
        th: (props) => <th className="border border-stone-500 dark:border-stone-600 py-1 px-3 text-left">{props.children}</th>,
        td: (props) => <td className="border border-stone-500 dark:border-stone-600  py-1 px-3">{props.children}</td>,
        code: ({
          children, className, node, ...props
        }) => (
          <CodeHighlighter
            {...props}
            children={children}
            className={className as string}
          />
        ),
        img: (props) => (
          <Image
            src={props.src as string}
            alt={props.alt as string}
            width={850}
            height={850}
            className="mx-auto block rounded-lg my-6"
            loading="lazy"
          />
        ),
        // pre: ({inlin})=>
      }}
    >
      {children}
    </Markdown>
  );
}
