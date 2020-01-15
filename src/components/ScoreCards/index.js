import React, { PureComponent } from "react";
import cookie from 'react-cookies';
import { Context } from "../Aplication/context";
import CardWrapper from "../CardWrapper";

import './index.css';

export default class ScoreCards extends PureComponent {
  static contextType = Context;

  render() {
    const { score } = this.context;
    return (
      <div className="score-cards">
        <CardWrapper title="Mejor puntaje" iconType="crown" text={cookie.load('best_score') || "-"} />
        <CardWrapper title="Puntaje partida" iconType="caret-right" text={score.points} />
      </div>
    );
  }
}
