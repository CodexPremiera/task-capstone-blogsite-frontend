import { useState, useEffect } from 'react';

const useHeaderScroll = (headerHeight) => {
  const [headerTranslateY, setHeaderTranslateY] = useState(0);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollDown = (currentScrollTop > lastScrollTop);
      const translateY = isScrollDown ? (0 - headerHeight) : 0;
      setHeaderTranslateY(translateY);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  return headerTranslateY;
};

export default useHeaderScroll;
