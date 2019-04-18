import React from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export class ArrowsUpDown extends React.Component {
  handleUp = () => {};

  handleDown = () => {};

  render() {
    return (
      <div className="ArrowsUpDown">
        <FaAngleUp onClick={this.handleUp} />
        <FaAngleDown onClick={this.handleDown} />
      </div>
    );
  }
}

export default ArrowsUpDown;
