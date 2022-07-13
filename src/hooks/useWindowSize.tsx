import { useEffect, useState } from "react";

export function useCurrentWidth() {
  const [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const resizeListener = () => {
      setCurrentWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return currentWindowSize;
}
