import React, { useRef, useEffect } from "react";
import { useForceUpdate } from "../../hooks/useForceUpdate";

const RerenderCounter = () => {
  const count = useRef(0);
  const { forceUpdate } = useForceUpdate();

  useEffect(() => {
    count.current += 1;
  });

  return (
    <div>
      <div>
        <span>Count of re-render: {count.current}</span>
      </div>
      <button onClick={forceUpdate}>Force re-render</button>
    </div>
  );
};

export default RerenderCounter;
