import React, { PureComponent, Fragment } from "react";
import { Modal } from 'antd';
import { Context } from "../Aplication/context";
import ScoreTable from "../ScoreTable";
import CardWrapper from "../CardWrapper";

export default class Onboarding extends PureComponent {
  constructor(props) {
    super(props);
    this.onResetGame = this.onResetGame.bind(this);
    this.onShareGame = this.onShareGame.bind(this);
  }
  
  static contextType = Context;

  onResetGame() {
    const { resetTimer } = this.context;
    resetTimer();
  }

  onShareGame() {
    const { score } = this.context;
    window.open(`https://twitter.com/intent/tweet?text=Este es mi último score: ${score.points}`);
  }

  get content() {
    const { score } = this.context;
    return (
      <Fragment>
        <CardWrapper title="Puntaje partida" iconType="caret-right" text={score.points} />
        <ScoreTable />
      </Fragment>
    );
  }
  
  render() {
    const { visible } = this.props;
    const modalProps = {
      title: 'Resultados',
      okText: 'Compartir',
      cancelText: 'Volver a jugar',
      visible: visible,
      centered: true,
      closable: false,
      onOk: this.onShareGame,
      onCancel: this.onResetGame,
    };
    return (
      <Modal {...modalProps}>
        {this.content}
      </Modal>
    );
  }
}
