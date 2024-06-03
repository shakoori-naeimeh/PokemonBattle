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
  log?: string
  status: "loading" | "ready" | "done"
}

const initialState: BattleGroundState = {
  rightPokemon: undefined,
  leftPokemon: undefined,
  rightPokemonMove: undefined,
  leftPokemonMove: undefined,
  log: "",
  status: "loading"
}

interface generateLogProps {
  rightPokemonName: string | undefined
  leftPokemonName: string | undefined
  rightPokemonMove: MoveDetails | undefined
  leftPokemonMove: MoveDetails | undefined
}

const generateLog = ({rightPokemonName, leftPokemonName, rightPokemonMove, leftPokemonMove}: generateLogProps) => {
  if (!rightPokemonName || !leftPokemonName || !rightPokemonMove || !leftPokemonMove) 
    return ""

  if (leftPokemonMove.power === rightPokemonMove.power ) {
    return "Draw"
  } else if (leftPokemonMove.power > rightPokemonMove.power) {
      return  `${leftPokemonName} lands a decisive blow with ${leftPokemonMove.name} knocking out ${rightPokemonName}!`
  } else {
      return  `${rightPokemonName} lands a decisive blow with ${rightPokemonMove.name} knocking out ${leftPokemonName}!`
  }
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
      state.log = generateLog({
        rightPokemonName: action.payload.rightPokemon?.name, 
        leftPokemonName: action.payload.leftPokemon?.name,
        rightPokemonMove: action.payload?.rightPokemonMove, 
        leftPokemonMove: action.payload?.leftPokemonMove
      })
      state.status = action.payload.status;
    },
    battleIsOver: (state) => { state.status = "done" } 
  },
})

export const { setBattleGround, battleIsOver } = battleGroundSlice.actions

export default battleGroundSlice.reducer