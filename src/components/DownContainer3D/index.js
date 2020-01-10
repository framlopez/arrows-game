import React, { PureComponent } from "react";

export default class DownContainer3D extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="down-card-3d-border">
        <div className="down-card-3d">
          {children}
        </div>
      </div>
    );
  }
}
