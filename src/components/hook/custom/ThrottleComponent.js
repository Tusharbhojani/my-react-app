import React, { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

export default function ThrottleComponent() {
  const [input, setInput] = useState();
  const [throttleInput, setThrottleInput] = useState();


  function updateThrottleInput(value){
    setThrottleInput(value)
  }

  const throttleFunction = useThrottle(updateThrottleInput, 2000)

  useEffect(() => {
    throttleFunction(input)
  }, [input]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="border p-2 m-2 rounded"
      />

      <p>Input value: {input}</p>
      <p>Throttle value: {throttleInput}</p>
    </div>
  );
}
