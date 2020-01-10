import React, { PureComponent } from "react";
import { initialState, Context } from "./context";
import TitleCard from "../TitleCard";
import ActionsBar from "../ActionsBar";
import Game from "../Game";
import ScoreCard from "../ScoreCard";

export default class Aplication extends PureComponent {
  constructor(props) {
    super(props);
    this.resetTimer = this.resetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.updateScore = this.updateScore.bind(this);
    
    const { initialGameStatus, initialGameScore, initialGameTimer } = initialState;

    this.state = {
      status: initialGameStatus,
      score: initialGameScore,
      timer: initialGameTimer,

      lastId: null,
      isKeyDown: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      let lastId;
      switch (event.which) {
        case 37: {
          lastId = 'left';
          break;
        }
        case 38: {
          lastId = 'top';
          break;
        }
        case 39: {
          lastId = 'right';
          break;
        }
        case 40: {
          lastId = 'bottom';
          break;
        }      
        default:
          return null;
      }
      this.setState({
        lastId,
        isKeyDown: true,
      });
    });

    document.addEventListener("keyup", () => {
      this.setState((state) => ({
        score: {
          ...state.score,
          allCount: state.status.run ? state.score.allCount + 1 : state.score.allCount,
        },
        isKeyDown: false,
      }));
    });
  }

  resetTimer() {
    const { initialGameStatus, initialGameScore, initialGameTimer } = initialState;
    this.stopTimer();
    this.setState({
      gameStatus: initialGameStatus,
      timer: initialGameTimer,
      score: initialGameScore,
      lastId: null,
    })
  }

  startTimer() {
    this.setState({
      status: {
        run: true,
        ready: true,
      },
    })
    
    this.timer = setInterval(() => {
      this.setState((state) => ({
        timer: state.timer - 1,
      }));
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      status: {
        run: false,
        ready: false,
      },
      lastId: null,
    })
  }

  updateScore(score) {
    this.setState((state) => ({
      score,
      lastId: null,
    }));
  }
  
  render() {
    const contextValue = {
      ...this.state,
      resetTimer: this.resetTimer,
      startTimer: this.startTimer,
      stopTimer: this.stopTimer,
      updateScore: this.updateScore,
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="app-container">
          <TitleCard />
          <ActionsBar />
          <Game />
          <ScoreCard />
        </div>
      </Context.Provider>
    );
  }
}
