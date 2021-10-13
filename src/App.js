import React from "react";
import ParentRerenderCounter from "./components/parentRerenderCounter";
import RerenderCounter from "./components/rerenderCounter";

function App() {

  return (
    <>
      <RerenderCounter />
      <ParentRerenderCounter />
    </>
  );
}

export default App;
