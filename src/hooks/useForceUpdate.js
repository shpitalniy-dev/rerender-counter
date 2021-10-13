import { useState } from "react";

export const useForceUpdate = () => {
  const [state, setState] = useState();

  const forceUpdate = () => setState(performance.now());

  return { forceUpdate };
};
