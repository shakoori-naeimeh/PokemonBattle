import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { MoveDetails } from '../shared.types'

interface PokemonPlayer {
  name: string
  frontSprite: string
  backSprite: string
  move: string
  power: number
}

interface BattleGroundState {
  players: PokemonPlayer[]
  log?: string
  status: "loading" | "ready" | "done"
}

const initialState: BattleGroundState = {
  players: [],
  log: "",
  status: "loading"
}

const generateLog = (players: PokemonPlayer[]) => {
  if (players[1].power === players[0].power ) {
    return "Draw"
  } else if (players[1].power > players[0].power) {
      return  `${players[1].name} lands a decisive blow with ${players[1].move} knocking out ${players[0].name}!`
  } else {
      return  `${players[0].name} lands a decisive blow with ${players[1].move} knocking out ${players[1].name}!`
  }
}

export const battleGroundSlice = createSlice({
  name: 'battleGround',
  initialState,
  reducers: {
    setBattleGround: (state, action: PayloadAction<BattleGroundState>) => {
      state.players[0] = action.payload.players[0]
      state.players[1] = action.payload.players[1]
      state.log = generateLog(action.payload.players)
      state.status = action.payload.status;
    },
    battleIsOver: (state) => { state.status = "done" } 
  },
})

export const { setBattleGround, battleIsOver } = battleGroundSlice.actions

export default battleGroundSlice.reducer