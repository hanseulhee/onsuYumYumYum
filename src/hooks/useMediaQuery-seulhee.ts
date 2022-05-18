import { useEffect, useState } from "react";

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    function updateTarget(e: MediaQueryListEvent) {
      setTargetReached(e.matches);
    }

    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width]);

  return targetReached;
};
