import * as React from 'react'
import { MdWork, MdSchool } from 'react-icons/md';

type CareerEducation = {
  title: string;
  description: string;
  instance: string;
  icon: React.JSX.Element;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'pending';
  workingType: 'Full-time' | 'Part-time' | 'Freelance' | 'Internship' | 'Student';
}

const DATA_CAREER_EDUCATION: CareerEducation[] = [
  {
    title: 'Fullstack Engineer',
    instance: 'PT. Inovasi Niaga Integrasi - WZ Technology',
    description: `Key & Responsibility, including following:
      - Participated daily standup meeting for updating progress.
      - Participated sprint planning meeting for planning sprint goals.
      - Participated sprint review meeting for reviewing sprint goals.
      - Participated sprint retrospective meeting for reviewing sprint goals and improving process per qurter.
      - Participated in development including create and develop new module and bug fix existing module.
    `,
    status: 'completed',
    workingType: 'Full-time',
    startDate: '2025-01-27',
    endDate: '2025-07-28',
    icon: <MdWork/>
  },
  {
    title: 'Fullstack Engineer',
    instance: 'PT. Inovasi Niaga Integrasi - WZ Technology',
    description: `Key & Responsibility, including following:
      - Learning, exploring about technology that use in company including hard skills and soft skills.
      - Participated daily standup meeting for updating progress.
      - Participated sprint planning meeting for planning sprint goals.
      - Participated sprint review meeting for reviewing sprint goals.
      - Participated sprint retrospective meeting for reviewing sprint goals and improving process per qurter.
      - Participated in development including create and develop new module and bug fix existing module.
    `,
    status: 'completed',
    workingType: 'Internship',
    startDate: '2024-07-28',
    endDate: '2025-01-27',
    icon: <MdWork />,
  },
  {
    title: 'Frontend Engineer',
    instance: 'Maxximum.id',
    description: `Key & Responsibility, including following:
      - Catch up with UI/UX designer for understanding about design and user experience.
      - Convert design into code using \`Next.js\` and \`TypeScript\`.
      - Discuss with backend engineer for understanding about API and data structure.
    `,
    status: 'completed',
    workingType: 'Freelance',
    startDate: '2024-06-01',
    endDate: '2024-07-27',
    icon: <MdWork />,
  },
  {
    title: 'Refrigeration and Air Conditioning Engineering',
    instance: 'SMK Negeri 1 Kota Cimahi',
    description: `Key & Responsibility, including following:
      - Learning, exploring about basic electricity.
      - Learning, exploring about basic Tecnical Drawing for engineering.
      - Learning, exploring about basic welding.
      - Learning, exploring about basic pipe fitting.
      - Learning, exploring about basic system refrigeration and air conditioning engineering.
      - Learning about common tools and equipment for engineering.
      - Learning about common subject like a high school subject.
    `,
    status: 'completed',
    workingType: 'Student',
    startDate: '2019-07-15',
    endDate: '2022-05-31',
    icon: <MdSchool />,
  }
]

export default DATA_CAREER_EDUCATION