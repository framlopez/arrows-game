import React from "react";

export const initialState = {
  initialGameStatus: {
    ready: true,
    run: false,
  },
  initialGameScore: {
    successCount: 0,
    errorCount: 0,
    allCount: 0,
    points: 0,
  },
  initialGameTimer: 10,
};

export const Context = React.createContext(
  initialState,
);