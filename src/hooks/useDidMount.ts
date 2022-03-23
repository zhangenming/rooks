import { useEffect } from "react";

/**
 * useDidMount hook
 * Calls a function on mount
 *
 * @param {Function} callback Callback function to be called on mount
 */
function useDidMount(callback: () => void): void {
  useEffect(() => {
    callback?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { useDidMount };
