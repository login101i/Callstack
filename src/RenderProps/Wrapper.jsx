import React, { Component } from "react";

class Wrapper extends Component {
  state = {
    count: 0
  };

  inCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {this.props.render(this.state.count, this.inCount)}
      </div>
    );
  }
}

export default Wrapper;
