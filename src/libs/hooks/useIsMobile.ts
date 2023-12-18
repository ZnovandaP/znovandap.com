import { useState } from 'react';

const useIsMobile = () => {
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const breakpointsMobile = 800;

  if (typeof window !== 'undefined') {
    const handleResizeWindow = () => {
      if (window.innerWidth < breakpointsMobile) {
        setIsMobileViewport(true);
      } else {
        setIsMobileViewport(false);
      }
    };

    window.onresize = handleResizeWindow;
  }

  return { isMobileViewport };
};

export default useIsMobile;
