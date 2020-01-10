import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";

export default class TimerClock extends PureComponent {
  static contextType = Context;

  componentDidUpdate() {
    const { timer, stopTimer, status } = this.context;

    if (timer === 0 && status.run) {
      stopTimer();
    }
  }

  render() {
    const { timer } = this.context;

    return (
      <div>
        {timer}
      </div>
    );
  }
}
