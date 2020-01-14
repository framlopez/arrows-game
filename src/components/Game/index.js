import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";

import './index.css';

export default class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.randomOption = this.randomOption.bind(this);
    this.doneProccess = this.doneProccess.bind(this);
    this.errorProccess = this.errorProccess.bind(this);
    this.doneProccessKeyDown = this.doneProccessKeyDown.bind(this);
    this.errorProccessKeyDown = this.errorProccessKeyDown.bind(this);
    this.successPoint = 1;
    this.errorPoint = -2;
    this.options = [
      {
        id: 'bottom',
        icon: 'https://framlopez.github.io/arrows-game/down-arrow-key.png',
      },
      {
        id: 'top',
        icon: 'https://framlopez.github.io/arrows-game/up-arrow-key.png',
      },
      {
        id: 'left',
        icon: 'https://framlopez.github.io/arrows-game/left-arrow-key.png',
      },
      {
        id: 'right',
        icon: 'https://framlopez.github.io/arrows-game/right-arrow-key.png',
      }
    ];
    this.state = {
      listItems: [
        this.randomOption(),
        this.randomOption(),
        this.randomOption(),
        this.randomOption(),
        this.randomOption(),
        this.randomOption(),
      ],
      keyDownSuccess: null,
    };
  }

  static contextType = Context;

  componentDidUpdate() {
    const { listItems } = this.state;
    const { status, isKeyDown, lastId, startTimer, score } = this.context;
    const firstItemId = listItems[score.successCount].id;

    if (lastId === null || !status.ready) return null;
    if (!status.run) startTimer();

    if (firstItemId === lastId) {
      if (isKeyDown) {
        this.doneProccessKeyDown();
      } else {
        this.doneProccess();
      }
    } else {
      if (isKeyDown) {
        this.errorProccessKeyDown();
      } else {
        this.errorProccess();
      }
    }
  }

  randomOption() {
    const randomNumber = Math.floor(Math.random() * this.options.length);
    return this.options[randomNumber];
  }

  doneProccess() {
    const { listItems } = this.state;
    const { updateScore, score } = this.context;
    this.setState({
      listItems: [
        ...listItems,
        this.randomOption(),
      ],
      keyDownSuccess: null,
    });
    updateScore({
      ...score,
      points: score.points + this.successPoint,
      successCount: score.successCount + 1,
    });
  }

  errorProccess() {
    const { updateScore, score } = this.context;
    this.setState({
      keyDownSuccess: null,
    });
    updateScore({
      ...score,
      points: score.points + this.errorPoint,
      errorCount: score.errorCount + 1,
    });
  }

  doneProccessKeyDown() {
    this.setState({
      keyDownSuccess: true,
    });
  }

  errorProccessKeyDown() {
    this.setState({
      keyDownSuccess: false,
    });
  }
  
  render() {
    const { listItems, keyDownSuccess } = this.state;
    const { isKeyDown, status, score } = this.context;
    const defaultClassName = 'arrow-key';
    const defaultStatusClassName = keyDownSuccess ? `${defaultClassName}--success` : `${defaultClassName}--error`;
    return (
      <div className="game">
        <div className="game__container" style={{ left: `${score.successCount * -100}px` }}>
          {listItems.map((item, key) => {
            const statusClassName = (key === score.successCount && isKeyDown && status.run) && defaultStatusClassName;
            return <img className={`${defaultClassName} ${statusClassName}`} src={item.icon} alt="" />;
          })}
        </div>
      </div>
    );
  }
}
