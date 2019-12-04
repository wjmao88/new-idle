import { createContext, Dispatch } from "react";
import { GameState } from "./game/stateTypes";
import { GameStateAction } from "./game/actionTypes";

const GameContext = createContext<[GameState, Dispatch<GameStateAction>]>(
  [{} as GameState, () => {}]
);

export default GameContext;
