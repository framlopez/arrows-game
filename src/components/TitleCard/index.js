import React, { PureComponent } from "react";
import DownContainer3D from "../DownContainer3D";

export default class TitleCard extends PureComponent {
  render() {
    return (
      <DownContainer3D>
        <h1 className="app-title">Arrows</h1>
      </DownContainer3D>
    );
  }
}
