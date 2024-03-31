import { useState, useEffect } from 'react';

function useWindowResize(threshold) {
  const [isThresholdMet, setIsThresholdMet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsThresholdMet(window.innerWidth > threshold);
    };

    // Initial resize
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  return isThresholdMet;
}

export default useWindowResize;
