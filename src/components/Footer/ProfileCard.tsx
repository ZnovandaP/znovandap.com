import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import cn from '@/libs/utils/cn';

export default function ProfileCard() {
  return (
    <div className="center flex-col gap-6 sm:flex-row">
      <ProfileCard.ProfilePicture />
      <ProfileCard.ProfileContact />
    </div>
  );
}

type ProfilePictureProps = {
  className?: string
};
export function ProfilePicture({ className = '' }: ProfilePictureProps) {
  return (
    <Link href="/about">
      <div className={cn(
        'group w-28 h-28 rounded-full p-[6px] bg-stone-50',
        className,
      )}
      >
        <Image
          src="/author_fill.webp"
          alt="Zidane Novanda Putra"
          width={500}
          height={500}
          className="grayscale w-full h-full object-cover object-center rounded-full group-hover:grayscale-0"
        />
      </div>
    </Link>
  );
}

function ProfileContact() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl text-sky-800 dark:text-sky-500 font-semibold  text-center sm:text-left">
        Contact me via
      </p>

      <div className="flex flex-col gap-3">
        <ProfileCard.ProfileLinkContact
          href="mailto:znovandaputra@gmail.com"
          icon={<SiGmail className="text-[#EA4335]" />}
          text="znovandaputra@gmail.com"
        />

        <ProfileCard.ProfileLinkContact
          href="https://www.linkedin.com/in/zidane-novanda-putra-58a9b3227/"
          icon={<SiLinkedin className="text-[#0A66C2]" />}
          text="Zidane Novanda Putra"
        />
      </div>
    </div>
  );
}

type ProfileLinkContactProps = {
  href: string
  icon: React.ReactElement
  text: string
};

function ProfileLinkContact({ href, icon, text }: ProfileLinkContactProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-4 text-lg font-medium text-stone-700 dark:text-stone-50"
    >
      {icon}
      <span className="underline decoration-cyan-600 underline-offset-[6px] decoration-wavy">
        {text}
      </span>
    </Link>
  );
}

ProfileCard.ProfilePicture = ProfilePicture;
ProfileCard.ProfileContact = ProfileContact;
ProfileCard.ProfileLinkContact = ProfileLinkContact;
