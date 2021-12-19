import { useState, useEffect } from "react";

export const useWindow = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => setWindowDimensions(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const getWindowDimensions = () => {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
