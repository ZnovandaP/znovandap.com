import * as React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { ButtonLink } from '@/components/Button/Button';

export default function Epilog() {
  return (
    <div className="center flex-col gap-6 mt-8">
      <p
        className="text-balance text-center font-medium"
      >
        You can see more of my projects by clicking the button below, do you interesting?
      </p>

      <ButtonLink
        href="/projects"
        text="More projects"
        icon={<BsArrowRight />}
      />
    </div>
  );
}
