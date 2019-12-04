import React, { useContext } from 'react';
import GameContext from 'app/GameContext';

const ControlsBar = () => {
  const [ gameState ] = useContext(GameContext);
  return (
    <div>
      idling bar { gameState.ticks }
    </div>
  );
};

export default ControlsBar;