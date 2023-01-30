import { useState, useRef, useLayoutEffect } from 'react'

export default function useElementRect<T extends HTMLElement>() {
  const [rect, setRect] = useState<DOMRect>()

  //const ref = useCallback((node: HTMLElement) => {
  //  if (node !== null) {
  //    setRect(node.getBoundingClientRect());
  //  }
  //}, []);

  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    function updateSize() {
      if (ref) setRect(ref?.current?.getBoundingClientRect())
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    new ResizeObserver(updateSize).observe(ref?.current as HTMLElement)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return { rect, ref }
}
