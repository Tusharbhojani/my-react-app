import React, { useState } from "react";
import useScreen from "./useScreen";

export default function Component() {
  const [count, setCount] = useState(0);
  const width = useScreen();
  console.log({ width, count });
  return (
    <div>
      <button className="border p-2 rounded" onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
    </div>
  );
}
