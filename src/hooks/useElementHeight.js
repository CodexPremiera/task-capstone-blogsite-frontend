import { useState, useEffect, useRef } from 'react';

function useElementHeight() {
  const [elementHeight, setElementHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    // Update the height of the element after it has been rendered
    if (elementRef.current) {
      setElementHeight(elementRef.current.clientHeight);
    }
  }, []); // Only run once after initial render to get the height

  return [elementHeight, elementRef];
}

export default useElementHeight;