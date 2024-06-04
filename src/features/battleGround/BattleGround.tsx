import React from "react"
import { useBattle } from "../../app/hooks/useBattle"
import { useAppDispatch, useAppSelector } from "../../app/hooks/storeHooks"
import styled from '@emotion/styled'
import { battleIsOver } from "./battleGroundSlice"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 16px;
  padding: 10px 41px;
  margin-top: 100px;
`
const PokemonDetails= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Pokemon = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 16px;
  height: 50px;
  align-items: center;
  padding: 10px 10px;
`
const PokemonName = styled.h2`
  padding-right: 100px;
  text-transform: capitalize;
`

const Power = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid green;
  background-color: lightgreen;
  border-radius: 26px;
  padding: 0px 25px;
`
const PowerName = styled.p`
  padding-right: 8px;
  text-transform: capitalize;
`

const PokemonImage = styled.img`
  width: 300px
`
const BattleLogContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const BattleLog = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 16px;
  width: 550px;
  height: 150px; 
  padding: 10px;
  margin-right: 10px;
`
const Button = styled.button`
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  padding: 0 25px;
`

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
      {
        players.map(player => {
          return (
            <PokemonDetails>
              <Pokemon>
                  <PokemonName>{player.name}</PokemonName>
                  <Power>
                    <PowerName>{player.move}:</PowerName> <p>{player.power || 0}</p>
                  </Power>
                </Pokemon>
                <PokemonImage src={player.frontSprite}/>
            </PokemonDetails>
          )
        })
      }
     <BattleLogContainer>
      <BattleLog>{status === "done" ? log : ""}</BattleLog>
      <Button onClick={() => dispatch(battleIsOver())}>Start Battle!</Button>
     </BattleLogContainer>

    </Container>
  )
}