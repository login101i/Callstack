import React from "react";

const Component1 = (props) => {
  console.log("hello from com1");
  return (
    <>
      <button onClick={props.inCount}>{props.count}</button>
    </>
  );
};

export default Component1;
