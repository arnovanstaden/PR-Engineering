import { useEffect } from 'react';

interface useFreezeScrollingReturn {
  freezeScrolling: () => void;
  unfreezeScrolling: () => void;
}

/**
 * Custom hook to freeze scrolling on the document body.
 * @param enabled - Optional flag to enable or disable freezing scrolling. If not provided, scrolling will be frozen by default.
 * @returns An object containing the `freezeScrolling` and `unfreezeScrolling` functions.
 */
const useFreezeScrolling = (enabled?: boolean): useFreezeScrollingReturn => {
  const freezeScrolling = () => document.body.classList.add('freezeScrolling');
  const unfreezeScrolling = () => document.body.classList.remove('freezeScrolling');

  useEffect(() => {
    if (!enabled) return;
    freezeScrolling;
    return () => unfreezeScrolling();
  }, []);

  return { freezeScrolling, unfreezeScrolling };
};

export default useFreezeScrolling;
