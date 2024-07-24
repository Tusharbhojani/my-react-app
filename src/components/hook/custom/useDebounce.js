import { useRef } from "react";

export default function useDebounce(fn, delay = 1000) {
  const interval = useRef();

  console.log("this is a debounce function");

  return (args) => {
    clearTimeout(interval.current);

    interval.current = setTimeout(() => {
      fn(args);
    }, delay);
  };
}
