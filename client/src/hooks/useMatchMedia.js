import { useState, useEffect } from "react";

const useMatchMedia = (mediaQuery) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia(`${mediaQuery}`);
    setMatches(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setMatches(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    // clean up after ourselves
    return () => {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  });

  return matches;
};

export default useMatchMedia;
