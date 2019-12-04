import React, { useEffect, useReducer } from 'react';
import gameStateReducer, { initializeGameState } from 'app/game/gameStateReducer';
import GameContext from 'app/GameContext';
import { GameState } from './game/stateTypes';

const gameStateKey = 'gameState';

const saveGame = (gameState: GameState) => {
  const data = JSON.stringify(gameState);
  return window.localStorage.setItem(gameStateKey, data);
};

const loadGame = () => {
  const saved = window.localStorage.getItem(gameStateKey);
  if (saved) {
    return JSON.parse(saved) as GameState;
  } 
};

const loaded = loadGame();

const GameStateProvider: React.FC = ({ children }) => {
  const gameStateData = useReducer(
    gameStateReducer, 
    loaded,
    initializeGameState
  );

  const [ gameState, dispatch ] = gameStateData;
  
  useEffect(() => {
    const interval = window.setInterval(() => {
      dispatch({
        type: 'GameTickAction'
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [])
  
  useEffect(() => {
    if (gameState.ticks % 3 === 0) {
      saveGame(gameState);
    }
  }, [gameState])

  return (
    <GameContext.Provider value={gameStateData}>
      { children }
    </GameContext.Provider>
  );
};

export default GameStateProvider;