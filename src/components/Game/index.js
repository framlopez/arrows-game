import React, { PureComponent } from "react";
import { Context } from "../Aplication/context";

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
        icon: 'https://img.icons8.com/plasticine/100/000000/expand-arrow.png',
      },
      {
        id: 'top',
        icon: 'https://img.icons8.com/plasticine/80/000000/collapse-arrow.png',
      },
      {
        id: 'left',
        icon: 'https://img.icons8.com/plasticine/100/000000/left-squared.png',
      },
      {
        id: 'right',
        icon: 'https://img.icons8.com/plasticine/100/000000/right-squared.png',
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
    const { status, isKeyDown, lastId, startTimer } = this.context;
    const firstItemId = listItems[0].id;

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
    const { updateScore, score } = this.context;
    const { listItems } = this.state;
    listItems.shift();
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
    const { isKeyDown, status } = this.context;
    const { listItems, keyDownSuccess } = this.state;
    const defaultClassName = 'default';
    const actionClassName = keyDownSuccess ? 'success' : 'error';
    return (
      <div className="app-game">
        {listItems.map((item, key) => {
          const className = (key === 0 && isKeyDown && status.run) ? actionClassName : defaultClassName;
          return <img className={className} src={item.icon} width="100" height="100" alt="" />;
        })}
      </div>
    );
  }
}
