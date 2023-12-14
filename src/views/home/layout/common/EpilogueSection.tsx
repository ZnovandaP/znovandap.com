import { ButtonLink } from '@/components/Button/Button';
import * as React from 'react';

type EpilogueSectionProps = {
  href: string
  textButton: string
  icon: React.ReactElement
  paragraph: string
};
export default function EpilogueSection({
  href, textButton, icon, paragraph,
}: EpilogueSectionProps) {
  return (
    <div data-aos="fade-up" className="center flex-col gap-6 mt-8">
      <p
        className="text-balance text-center font-medium"
      >
        {paragraph}
      </p>

      <ButtonLink
        href={href}
        text={textButton}
        icon={icon}
      />
    </div>
  );
}
