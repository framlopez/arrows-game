import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";
import TimerClock from "../TimerClock";
import ActionButton from "../ActionButton";

import './index.css';

export default class ActionsBar extends PureComponent {
  static contextType = Context;
  render() {
    const { status, resetTimer } = this.context;
    return (
      <div className="actions-bar">
        <div class="actions-bar__left">
          <TimerClock />
        </div>
        <div class="actions-bar__right">
          <ActionButton type="danger" disabled={!status.run && status.ready} size="large" onClickHandler={resetTimer} iconType="reload" text="Reiniciar" />
        </div>
      </div>
    );
  }
}
