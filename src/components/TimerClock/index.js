import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";
import { TimePicker } from 'antd';
import moment from 'moment';

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
      <div className="app-time-clock">
        <TimePicker inputReadOnly={true} value={moment(timer, 'ss')} size="large" />
        <div className="app-time-clock-mask" />
      </div>
    );
  }
}
