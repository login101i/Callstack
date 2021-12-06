import React from "react";

const Component2 = (props) => {
  console.log("hello from comp2");
  return (
    <button onClick={props.inCount}>
      <div>{props.count}</div>
    </button>
  );
};

export default Component2;
