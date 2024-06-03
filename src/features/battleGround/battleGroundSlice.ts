import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MoveDetails {
  name: string
  power: number
}

export interface Pokemon {
  name: string
  frontSprite: string
  backSprite: string
}

export interface BattleGroundState {
  rightPokemon?: Pokemon
  leftPokemon?: Pokemon
  rightPokemonMove?: MoveDetails
  leftPokemonMove?: MoveDetails
  winner?: string
  status: "loading" | "ready"
}

const initialState: BattleGroundState = {
  rightPokemon: undefined,
  leftPokemon: undefined,
  rightPokemonMove: undefined,
  leftPokemonMove: undefined,
  winner: "",
  status: "loading"
}


export const battleGroundSlice = createSlice({
  name: 'battleGround',
  initialState,
  reducers: {
    setBattleGround: (state, action: PayloadAction<BattleGroundState>) => {
      state.rightPokemon = action.payload.rightPokemon;
      state.leftPokemon = action.payload.leftPokemon;
      state.rightPokemonMove = action.payload.rightPokemonMove;
      state.leftPokemonMove = action.payload.leftPokemonMove;
      state.status = action.payload.status;
    },
  },
})

export const { setBattleGround } = battleGroundSlice.actions

export default battleGroundSlice.reducer