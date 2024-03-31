import { useState, useEffect } from 'react';

function useAsideTop(asideHeight, initialTop = 57) {
  const [asideTop, setAsideTop] = useState(initialTop);

  useEffect(() => {
    const handleScroll = () => {
      const asideBottom = asideTop + asideHeight;
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (asideTop < initialTop && scrollPosition > asideTop) {
        // When the Aside reaches the top of the screen and scrolling down
        setAsideTop(screenHeight - asideHeight);
      } else if (asideBottom >= screenHeight && scrollPosition < asideTop) {
        // When the Aside reaches the bottom of the screen and scrolling up
        setAsideTop(initialTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [asideTop, asideHeight, initialTop]);

  return asideTop;
}

export default useAsideTop;
