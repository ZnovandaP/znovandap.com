import * as React from 'react';
import FooterNavigation from './FooterNavigation';
import ProfileCard from './ProfileCard';

export default function BodyFooter() {
  return (
    <div className="flex flex-col gap-y-8 md:flex-row md:justify-between">
      <ProfileCard />

      <FooterNavigation />
    </div>
  );
}
