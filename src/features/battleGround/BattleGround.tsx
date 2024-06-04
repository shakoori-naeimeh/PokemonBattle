import React from "react"
import { useBattle } from "../../app/hooks/useBattle"
import { useAppDispatch, useAppSelector } from "../../app/hooks/storeHooks"
import { battleIsOver } from "./battleGroundSlice"
import {Container, PokemonContainer, Pokemon, PokemonName, Power, PowerName, PokemonImage, BattleLogContainer, BattleLog, Button} from "./BattleGroundStyles"

export const BattleGround = () => {
  const dispatch = useAppDispatch()

  const { error } = useBattle()
  const { players, status, log }  = useAppSelector(state => state.battleGround)

  if (status === "loading")
    return <> Loading ... </>
 
  if (!!error)
    return <> {error} </> 
  
  return (
    <Container>
      <PokemonContainer>
        <Pokemon>
          <PokemonName>{players[0].name}</PokemonName>
          <Power>
            <PowerName>{players[0].move}:</PowerName> <p>{players[0].power || 0}</p>
          </Power>
        </Pokemon>
        <PokemonImage src={players[0].frontSprite}/>
      </PokemonContainer>
      <PokemonContainer>
        <PokemonImage src={players[1].frontSprite}/>
        <Pokemon>
          <PokemonName>{players[1].name}</PokemonName>
          <Power>
            <PowerName>{players[1].move}:</PowerName> <p>{players[1].power || 0}</p>
          </Power>
        </Pokemon>
      </PokemonContainer>
      <BattleLogContainer>
        <BattleLog>{status === "done" ? log : ""}</BattleLog>
        <Button onClick={() => dispatch(battleIsOver())}>Start Battle!</Button>
      </BattleLogContainer>
    </Container>
  )
}