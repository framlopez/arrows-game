import React, { PureComponent } from "react";
import cookie from 'react-cookies';
import { initialState, Context } from "./context";
import PageTitle from "../PageTitle";
import ActionsBar from "../ActionsBar";
import Game from "../Game";
import Onboarding from "../Onboarding";
import ScoreModal from "../ScoreModal";
import ScoreCards from "../ScoreCards";
import ContactFooter from "../ContactFooter";

import './index.css';

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
    const { score } = this.state;

    if (score.points > cookie.load('best_score') || !cookie.load('best_score')) {
      cookie.save('best_score', score.points);
    }

    clearInterval(this.timer);
    this.setState({
      status: initialGameStatus,
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
    const { status } = this.state;
    const contextValue = {
      ...this.state,
      resetTimer: this.resetTimer,
      startTimer: this.startTimer,
      stopTimer: this.stopTimer,
      updateScore: this.updateScore,
    };
    
    return (
      <Context.Provider value={contextValue}>
        <div className="aplication">
          <PageTitle />
          <ActionsBar />
          <Game />
          <ScoreCards />
          <Onboarding />
          <ScoreModal visible={!status.run && !status.ready} />
          <ContactFooter />
        </div>
      </Context.Provider>
    );
  }
}
