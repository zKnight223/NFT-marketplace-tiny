import { useLayoutEffect, useState } from "react";
import { breakpoints } from "assets/theme";

type Size = {
  width: number;
  height: number;
  state: string;
  isMobile: () => boolean;
};

export default function useWindowSize() {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
    state: "xs",
    isMobile: () => true,
  });
  useLayoutEffect(() => {
    function updateSize() {
      let state: string = "xs";
      if (window.innerWidth > breakpoints.lx) {
        state = "lx";
      } else if (window.innerWidth > breakpoints.lg) {
        state = "lg";
      } else if (window.innerWidth > breakpoints.md) {
        state = "md";
      } else if (window.innerWidth > breakpoints.sm) {
        state = "sm";
      }
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        state,
        isMobile: () => window.innerWidth <= breakpoints.sm,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
