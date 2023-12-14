'use client';

import * as React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  React.useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return null;
}
