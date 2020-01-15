import React, { PureComponent } from "react";
import { Modal } from 'antd';
import { Context } from "../Aplication/context";
import ScoreTable from "../ScoreTable";
import CardWrapper from "../CardWrapper";

import './index.css';

export default class ScoreModal extends PureComponent {
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
    let shareURL = "http://twitter.com/share?";
    var params = {
      url: "https://framlopez.github.io/arrows-game", 
      text: `Mi nuevo score es: ${score.points} puntos`,
      via: "framlopez_",
      hashtags: "React,Antd"
    };
    for(var prop in params) shareURL += '&' + prop + '=' + encodeURIComponent(params[prop]);
    window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }

  get pointsText() {
    const { score } = this.context;

    if (score.points === 1) {
      return `${score.points} punto`;
    }
    return `${score.points} puntos`;
  }

  get content() {
    return (
      <div className="score-modal">
        <CardWrapper text={this.pointsText} />
        <ScoreTable />
      </div>
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
