import React, { useEffect, useState } from "react";

export function LearnContext() {
  const [count, setCount] = useState(2);
  const [count2, setCount2] = useState(1);
  var x;

  useEffect(() => {
  }, []);

  console.log(count, count2, x);
  // set time is renders in their snapshots
  // setTimeout(() => {
  //   console.log("inside settimeout : ", count, count2);
  // }, 3000);

  useEffect(() => {
    // as per my observation the use effect is not forming the closer, it always refers to the original values
    console.log("inside use effect : ", count, count2);

    return () => {
      console.log("cleanup function: ", count, count2);
    }

  }, [count]);

  return (
    <div>
      {console.log("render: ", count, count2)}
      <div className="">
        <p className="p-2">count1 : {count}</p>
        <p className="p-2">count2 : {count2}</p>
        <p className="p-2">x : {x}</p>
      </div>

      <button
        className="border p-2 rounded mt-3 mb-10"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase Count 1
      </button>

      <button
        className="border p-2 rounded mt-3 mb-10"
        onClick={() => {setCount2((prev) => prev + 1);x = x+ 1}}
      >
        Increase Count 2
      </button>
    </div>
  );
}
