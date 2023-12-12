import * as React from 'react';

import CardProjects from './CardProjects';
import Epilog from './Epilog';
import Prologue from './Prologue';

export default function LastProjects() {
  return (
    <section className="px-8 sm:pt-0 pb-8 rounded-2xl bg-gradient-to-t from-sky-600/30 from-5% via-sky-600/5 via-30% ">
      <Prologue />

      <CardProjects />

      <Epilog />
    </section>
  );
}
