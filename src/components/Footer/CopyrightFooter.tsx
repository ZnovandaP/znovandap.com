import * as React from 'react';

export default function CopyrightFooter() {
  return (
    <section>
      <h3 className="text-balance text-center text-lg font-medium text-stone-800 dark:text-stone-50">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Zidane Novanda Putra, All rights reserved
      </h3>
    </section>
  );
}
