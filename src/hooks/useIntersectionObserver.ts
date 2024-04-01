import { useEffect, useRef } from "react";

function useIntersectionObserver({ callback }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(callback);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, []);

  return { intersectionTargetRef: targetRef };
}

export default useIntersectionObserver;
