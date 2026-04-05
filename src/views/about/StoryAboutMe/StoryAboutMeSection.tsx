import * as React from 'react';
import MdxComponent from '@/components/MdxComponent';
import Stepper from '@/components/Stepper';
import DATA_CAREER_EDUCATION from '@/constant/data-career-education';
import moment from 'moment';

export default function StoryAboutMeSection() {
  return (
    <section className="px-8 sm:py-0">
      <MdxComponent>
        {`Hi! I'm Zidane Novanda Putra, currently i live in Cimahi City, West Java, Indonesia 🇮🇩. Passionate in ***software engineering*** with strong focused on \`Fullstack Engineering\`. Lately, I’ve been really interested in the field of \`AI Engineering\`. I have a strong foundation in \`Typescript\`, \`PHP\` and \`Python\`. Collaborative team player dedicated to delivering efficient, scalable, and maintainable software solutions, *and accustomed to working in a hybrid environment.*

        My last education was a vocational high school majoring in \`Refrigeration Engineering\` in **2022** at ***SMK Negeri 1 Kota Cimahi (STMN Pembangunan Bandung)***. I started learning code since to code when I was in the 3rd grade of high school nearing graduation, until now. At that time I learned coding independently (autodidact) through learning resources from the internet and YouTube.

        As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every members input.

        This website is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.

        Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure, and I hope that someday we can work together on a great opportunity.`}
      </MdxComponent>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-8 text-stone-900 dark:text-stone-100">
          Career & Education Path
        </h3>
        <Stepper orientation="vertical">
          {
            DATA_CAREER_EDUCATION.map((item, index) => (
              <Stepper.Item
                key={index}
                title={`${item.title} - ${item.workingType}`}
                description={`${item.instance} | ${moment(item.startDate).format('LL')} - ${moment(item.endDate).format('LL')}`}
                icon={item.icon}
                status={item.status}
              >
                <div className="text-sm text-stone-600 dark:text-stone-400 text-balance">
                  <MdxComponent>
                    {item.description}
                  </MdxComponent>
                </div>
              </Stepper.Item>
            ))
          }
        </Stepper>
      </div>
    </section>
  );
}
