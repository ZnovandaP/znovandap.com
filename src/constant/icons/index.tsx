import * as React from 'react';

import {
  SiCss3,
  SiFramer,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGit,
  SiAxios,
  SiBootstrap,
  SiWebpack,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJasmine,
  SiCodeceptjs,
  SiPwa,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiSwr,
  SiMdx,
} from 'react-icons/si';

type StacksProps = {
  [key: string]: React.JSX.Element | string
};

const Icons: StacksProps = {
  Instagram: <SiInstagram className="text-[#E4405F]" />,
  LinkedIn: <SiLinkedin />,
  Github: <SiGithub />,
  Git: <SiGit className="text-[#F05032]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  MDX: <SiMdx className="text-[#F5C518]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  Saas: <SiSass className="text-[#CC6699]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  TailwindCSS: <SiTailwindcss className="text-[#06B6D4]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  'NEXT.JS': <SiNextdotjs />,
  ReactRouter: <SiReactrouter className="text-[#CA4245]" />,
  ReactQuery: <SiReactquery className="text-[#FF4154]" />,
  Axios: <SiAxios className="text-[#5A29E4]" />,
  SWR: <SiSwr />,
  MUI: <SiMui className="text-[#007FFF]" />,
  FramerMotion: <SiFramer />,
  Vite: <SiVite className="text-[#646CFF]" />,
  Webpack: <SiWebpack className="text-[#8DD6F9]" />,
  PWA: <SiPwa className="text-[#5A0FC8]" />,
  Jest: <SiJest className="text-[#C21325]" />,
  Jasmine: <SiJasmine className="text-[#8A4182]" />,
  CodeceptJs: <SiCodeceptjs className="text-[#F6E05E]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  Zustand: '🐻',
};

export default Icons;
