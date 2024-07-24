import React, { useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";

export default function Component() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  function printLog(message) {
    console.log("count = " + message);
  }

  const printLogDebounced = useDebounce(printLog, 1000);
  const printLogDebounced2 = useDebounce(printLog, 2000);


  useEffect(()=>{
    printLogDebounced(count)
  }, [count])

  useEffect(()=>{
    printLogDebounced2(count2)
  }, [count2])

  return (
    <div>
      <button
        className="border p-2 rounded"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase Count {count}
      </button>

      <button
        className="border p-2 rounded"
        onClick={() => setCount2((prev) => prev + 1)}
      >
        Increase Count {count2}
      </button>
    </div>
  );
}
