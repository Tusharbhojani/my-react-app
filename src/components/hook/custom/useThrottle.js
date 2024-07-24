import { useEffect, useRef } from "react";

export default function useThrottle(func, delay) {
  const shouldWait = useRef(false);
  const interval = useRef();
  const savedArgs = useRef(null);

  function timeoutFunction() {
    if(savedArgs.current != null){
        func(...savedArgs.current);
        savedArgs.current = null;
        interval.current = setTimeout(timeoutFunction, delay);
    }else{
        shouldWait.current = false;
    }
  }

  return (...args) => {
    console.log(shouldWait, args);
    if (shouldWait.current) {
        savedArgs.current = args;
      return;
    }
    func(...args);
    shouldWait.current = true;
    interval.current = setTimeout(timeoutFunction, delay);
  };
}
