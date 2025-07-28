import * as React from 'react';
import Author from './Author';
import Introduction from './Introduction';

export default function Prologue() {
  return (
    <section className="p-8 pb-0 sm:py-0 sm:-mt-8 md:mt-0">
      <Author />
      <Introduction />
    </section>
  );
}
