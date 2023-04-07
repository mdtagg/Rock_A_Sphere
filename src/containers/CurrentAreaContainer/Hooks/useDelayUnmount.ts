import { useState,useEffect } from 'react'

function useDelayUnmount(dropdown:boolean, delayTime:number) {
    const [ showDiv, setShowDiv ] = useState<boolean>(false);
    useEffect(() => {
      let timeoutId:number;
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