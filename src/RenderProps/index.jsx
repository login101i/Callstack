import React from "react";

import Wrapper from "./Wrapper";
import Component1 from "./Component1";
import Component2 from "./Component2";

const RenderProps = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Wrapper
        render={(count, inCount) => {
          return <Component1 count={count} inCount={inCount} />;
        }}
      />
      <Wrapper
        render={(count, inCount) => {
          return <Component2 count={count} inCount={inCount} />;
        }}
      />
    </div>
  );
};

export default RenderProps;
