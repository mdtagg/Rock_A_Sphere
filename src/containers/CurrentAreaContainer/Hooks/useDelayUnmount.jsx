import { useState,useEffect } from 'react'

function useDelayUnmount(dropdown, delayTime) {
    const [ showDiv, setShowDiv ] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (dropdown && !showDiv) {
        setShowDiv(true);
      } else if (!dropdown && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); 
      }
      return () => clearTimeout(timeoutId);
    }, [dropdown,delayTime, showDiv]);
    return showDiv;
  }

export { useDelayUnmount }