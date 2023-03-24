import { useState,useEffect } from 'react'

function useDelayUnmount(dropdown, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (dropdown && !showDiv) {
        setShowDiv(true);
      } else if (!dropdown && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [dropdown,delayTime, showDiv]);
    return showDiv;
  }

export { useDelayUnmount }