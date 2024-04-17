import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export const mediaSize: Record<string, string> = {
  desktop: '(min-width: 992px)',
  mobile: '(max-width: 991px)' /**mobile width is 767px but we're using 991px**/,
  tablet: '(max-width: 991px)',
};



