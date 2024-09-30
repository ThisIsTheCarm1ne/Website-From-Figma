import { useState, useEffect } from 'react';

export default function isMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Checks if the window width is <= 720px
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    // Initial check
    checkScreenWidth();

    // Add a resize listener
    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return isMobile;
}
