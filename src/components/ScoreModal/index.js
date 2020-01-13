import React, { PureComponent, Fragment } from "react";
import { Modal } from 'antd';
import { Context } from "../Aplication/context";
import ScoreTable from "../ScoreTable";
import CardWrapper from "../CardWrapper";

export default class Onboarding extends PureComponent {
  constructor(props) {
    super(props);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }
  
  static contextType = Context;

  onCancelHandler() {
    const { resetTimer } = this.context;
    resetTimer();
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
      okText: 'Continuar',
      visible: visible,
      centered: true,
      closable: false,
      onOk: this.onCancelHandler,
      onCancel: this.onCancelHandler,
    };
    return (
      <Modal {...modalProps}>
        {this.content}
      </Modal>
    );
  }
}
