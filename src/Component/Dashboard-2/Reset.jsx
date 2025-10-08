import React from "react";

const Reset = ({ datareset }) => {
  const resetItems = () => {
    datareset();
  };
  return <button onClick={resetItems}>Reset</button>;
};

export default Reset;
