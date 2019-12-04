
import { Reducer } from "react";
import { GameStateAction } from "./actionTypes";
import { GameState } from "./stateTypes";

const version = 1;

export const initializeGameState = (state?: GameState): GameState => {
  if (state && state.version === version) {
    return state;
  }
  return { 
    version,
    ticks: 0
  };
};

const gameStateReducer: Reducer<GameState, GameStateAction> = (
  state, 
  action,
) => {
  if (action.type === 'GameTickAction') {
    return { ...state, ticks: state.ticks + 1 }
  }
  return state
};

export default gameStateReducer;