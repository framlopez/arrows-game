import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";
import cookie from 'react-cookies';
import CardWrapper from "../CardWrapper";

export default class ScoreCards extends PureComponent {
  static contextType = Context;

  render() {
    const { score } = this.context;
    return (
      <div className="app-score-cards">
        <CardWrapper title="Mejor puntaje" iconType="crown" text={cookie.load('best_score') || "-"} />
        <CardWrapper title="Puntaje partida" iconType="caret-right" text={score.points} />
      </div>
    );
  }
}
