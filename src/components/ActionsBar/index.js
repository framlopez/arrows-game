import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";
import TimerClock from "../TimerClock";
import ActionButton from "../ActionButton";

export default class ActionsBar extends PureComponent {
  static contextType = Context;
  render() {
    const { status, resetTimer } = this.context;
    return (
      <div className="app-toolbar">
        <div class="app-toolbar__left">
          <TimerClock />
        </div>
        <div class="app-toolbar__right">
          <ActionButton type="danger" disabled={!status.run && status.ready} size="large" onClickHandler={resetTimer} iconType="reload" text="Reiniciar" />
          <ActionButton type="default" size="large" onClickHandler={() => { console.log('share action'); }} iconType="share-alt" text="Compartir" />
        </div>
      </div>
    );
  }
}
