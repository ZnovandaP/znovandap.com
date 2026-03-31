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
  SiReacthookform,
  SiCypress,
  SiStorybook,
  SiTestinglibrary,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiSupabase,
  SiNestjs,
  SiVuedotjs,
  SiPhp,
  SiRedis,
  SiFirebase,
  SiNodedotjs,
  SiScikitlearn,
} from 'react-icons/si';

type StackProps = {
  [key: string]: {
    name: string;
    icon: React.JSX.Element | string,
    type: 'framework' | 'language' | 'library' | 'tool' | 'database' | 'other' | 'socmed' | 'cloud' | 'runtime';
  }
}

const Icons: StackProps = {
  instagram: {
    name: 'Instagram',
    icon: <SiInstagram className="text-[#E4405F]" />,
    type: 'socmed',
  },
  nodejs: {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-[#339933]" />,
    type: 'language',
  },
  linkedin: {
    name: 'LinkedIn',
    icon: <SiLinkedin />,
    type: 'socmed',
  },
  github: {
    name: 'Github',
    icon: <SiGithub />,
    type: 'socmed',
  },
  git: {
    name: 'Git',
    icon: <SiGit className="text-[#F05032]" />,
    type: 'tool',
  },
  javascript: {
    name: 'JavaScript',
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    type: 'language',
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript className="text-[#3178C6]" />,
    type: 'language',
  },
  html: {
    name: 'HTML',
    icon: <SiHtml5 className="text-[#E34F26]" />,
    type: 'language',
  },
  mdx: {
    name: 'MDX',
    icon: <SiMdx className="text-[#F5C518]" />,
    type: 'language',
  },
  css: {
    name: 'CSS',
    icon: <SiCss3 className="text-[#1572B6]" />,
    type: 'language',
  },
  sass: {
    name: 'SASS',
    icon: <SiSass className="text-[#CC6699]" />,
    type: 'language',
  },
  bootstrap: {
    name: 'Bootstrap',
    icon: <SiBootstrap className="text-[#7952B3]" />,
    type: 'framework',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    type: 'framework',
  },
  react: {
    name: 'React',
    icon: <SiReact className="text-[#61DAFB]" />,
    type: 'library',
  },
  nextjs: {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    type: 'framework',
  },
  reactrouter: {
    name: 'React Router',
    icon: <SiReactrouter className="text-[#CA4245]" />,
    type: 'library',
  },
  reactquery: {
    name: 'React Query',
    icon: <SiReactquery className="text-[#FF4154]" />,
    type: 'library',
  },
  axios: {
    name: 'Axios',
    icon: <SiAxios className="text-[#5A29E4]" />,
    type: 'library',
  },
  swr: {
    name: 'SWR',
    icon: <SiSwr />,
    type: 'library',
  },
  mui: {
    name: 'MUI',
    icon: <SiMui className="text-[#007FFF]" />,
    type: 'library',
  },
  framermotion: {
    name: 'Framer Motion',
    icon: <SiFramer />,
    type: 'library',
  },
  vite: {
    name: 'Vite',
    icon: <SiVite className="text-[#646CFF]" />,
    type: 'tool',
  },
  webpack: {
    name: 'Webpack',
    icon: <SiWebpack className="text-[#8DD6F9]" />,
    type: 'tool',
  },
  pwa: {
    name: 'PWA',
    icon: <SiPwa className="text-[#8b5cf6]" />,
    type: 'other',
  },
  jest: {
    name: 'Jest',
    icon: <SiJest className="text-[#C21325]" />,
    type: 'library',
  },
  jasmine: {
    name: 'Jasmine',
    icon: <SiJasmine className="text-[#8A4182]" />,
    type: 'library',
  },
  cypress: {
    name: 'Cypress',
    icon: <SiCypress className="text-[#69D3A7]" />,
    type: 'tool',
  },
  reacttestinglibrary: {
    name: 'React Testing Library',
    icon: <SiTestinglibrary className="text-[#E33332]" />,
    type: 'library',
  },
  storybook: {
    name: 'Storybook',
    icon: <SiStorybook className="text-[#FF4785]" />,
    type: 'tool',
  },
  codeceptjs: {
    name: 'CodeceptJS',
    icon: <SiCodeceptjs className="text-[#F6E05E]" />,
    type: 'framework',
  },
  redux: {
    name: 'Redux',
    icon: <SiRedux className="text-[#764ABC]" />,
    type: 'library',
  },
  reacthookform: {
    name: 'React Hook Form',
    icon: <SiReacthookform className="text-[#ec4899]" />,
    type: 'library',
  },
  zustand: {
    name: 'Zustand',
    icon: '🐻',
    type: 'library',
  },
  nextauth: {
    name: 'NextAuth',
    icon: '🛡️',
    type: 'library',
  },
  laravel: {
    name: 'Laravel',
    icon: <SiLaravel className="text-[#FF2D20]" />,
    type: 'framework',
  },
  python: {
    name: 'Python',
    icon: <SiPython className="text-[#3776AB]" />,
    type: 'language',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-[#336791]" />,
    type: 'database',
  },
  docker: {
    name: 'Docker',
    icon: <SiDocker className="text-[#2496ED]" />,
    type: 'tool',
  },
  supabase: {
    name: 'Supabase',
    icon: <SiSupabase className="text-[#18B294]" />,
    type: 'cloud',
  },
  nestjs: {
    name: 'NestJS',
    icon: <SiNestjs className="text-[#E0234E]" />,
    type: 'framework',
  },
  vue: {
    name: 'Vue',
    icon: <SiVuedotjs className="text-[#4FC08D]" />,
    type: 'framework',
  },
  php: {
    name: 'PHP',
    icon: <SiPhp className="text-[#777BB4]" />,
    type: 'language',
  },
  redis: {
    name: 'Redis',
    icon: <SiRedis className="text-[#DC382C]" />,
    type: 'database',
  },
  firebase: {
    name: 'Firebase',
    icon: <SiFirebase className="text-[#FF422C]" />,
    type: 'cloud',
  },
  tensorflow: {
    name: 'TensorFlow',
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    type: 'framework',
  },
  keras: {
    name: 'Keras',
    icon: <SiKeras className="text-[#D00000]" />,
    type: 'framework',
  },
  opencv: {
    name: 'OpenCV',
    icon: <SiOpencv className="text-[#8C8397]" />,
    type: 'library',
  },
  scikitlearn: {
    name: 'Scikit-Learn',
    icon: <SiScikitlearn className="text-[#F7931E]" />,
    type: 'library',
  },
};

export default Icons;
