import React, { PureComponent } from "react";
import UpContainer3D from "../UpContainer3D";

export default class ActionButton extends PureComponent {
  render() {
    const { disabled, onClickHandler, text } = this.props;
    return (
      <UpContainer3D>
        <button disabled={disabled} onClick={onClickHandler}>{text}</button>
      </UpContainer3D>
    );
  }
}
