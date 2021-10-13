import React from "react";
import RerenderCounter from "../rerenderCounter";
import { useForceUpdate } from "../../hooks/useForceUpdate";

function ParentRerenderCounter() {
  const { forceUpdate } = useForceUpdate();

  return (
    <div>
      <RerenderCounter />
      <div>
        <button onClick={forceUpdate}>
          Re-render parent component
        </button>
      </div>
    </div>
  );
}

export default ParentRerenderCounter;
