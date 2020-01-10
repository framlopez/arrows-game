import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";
import DownContainer3D from "../DownContainer3D";
import TimerClock from "../TimerClock";
import ActionButton from "../ActionButton";

export default class ActionsBar extends PureComponent {
  static contextType = Context;
  render() {
    const { status, resetTimer } = this.context;
    return (
      <div className="toolbar">
        <div class="left-content">
          <DownContainer3D>
            <TimerClock />
          </DownContainer3D>
        </div>
        <div class="right-content">
          {/* <ActionButton onClickHandler={startTimer} disabled={status.run || !status.ready} text="start" /> */}
          <DownContainer3D>
            <ActionButton onClickHandler={resetTimer} disabled={!status.run && status.ready} text="restart" />
          </DownContainer3D>
        </div>
      </div>
    );
  }
}
