import React, { PureComponent } from "react";

export default class UpContainer3D extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
