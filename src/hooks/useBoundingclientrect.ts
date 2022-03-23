import type { MutableRefObject } from "react";
import { useState, useCallback } from "react";
import { useDidMount } from "./useDidMount";
import { useMutationObserver } from "./useMutationObserver";

/**
 * @param element HTML element whose boundingclientrect is needed
 * @returns ClientRect
 */
function getBoundingClientRect(
  element: HTMLElement
): ClientRect | DOMRect | null {
  return element.getBoundingClientRect();
}

/**
 * useBoundingclientRect hook
 *
 * @param ref The React ref whose ClientRect is needed
 * @returns ClientRect
 */
function useBoundingclientrect(
  ref: MutableRefObject<HTMLElement | null>
): ClientRect | DOMRect | null {
  const [value, setValue] = useState<ClientRect | DOMRect | null>(null);

  const update = useCallback(() => {
    setValue(ref.current ? getBoundingClientRect(ref.current) : null);
    // Using ref in dependencies is both harmless and necessary.
    // It's a way to make sure that we don't skip dep check in this function. So if we
    // ever add a new variable in this function, eslint will prompt use to confirm whether it
    // is a dependency or not.
  }, [ref]);

  useDidMount(() => {
    update();
  });

  useMutationObserver(ref, update);

  return value;
}

export { useBoundingclientrect };
