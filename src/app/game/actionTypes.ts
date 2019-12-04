
export type GameTickAction = {
  type: 'GameTickAction',
}

export type IncreaseBuildingMax = {
  type: 'IncreaseBuildingMaxAction'
  buildingId: number,
  increment: number,
}

export type GameStateAction = 
  | GameTickAction
  | IncreaseBuildingMax