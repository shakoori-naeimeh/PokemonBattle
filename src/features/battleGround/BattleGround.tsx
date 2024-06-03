import React from "react"
import { useBattle } from "../../app/hooks/useBattle"
import { useAppSelector } from "../../app/hooks/storeHooks"
import styled from '@emotion/styled'

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
`

const Power = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid green;
  background-color: lightgreen;
  border-radius: 26px;
  padding: 0px 25px;
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
  width: 300px;
  height: 300px; 
  padding-right: 100px;
`
const Button = styled.button`
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  padding: 0 25px;
}
`

export const BattleGround = () => {
  useBattle()
  const {leftPokemon, leftPokemonMove, rightPokemon, rightPokemonMove, winner, status}  = useAppSelector(state => state.battleGround)

  if (status === "loading")
    return <>loading...</> 
  
  return (
    <Container>
     <PokemonDetails>
      <Pokemon>
          <PokemonName>{rightPokemon?.name}</PokemonName>
          <Power>
            <p>{rightPokemonMove?.name}</p> <p>{rightPokemonMove?.power || 0}</p>
          </Power>
        </Pokemon>
        <PokemonImage src={rightPokemon?.frontSprite}/>
     </PokemonDetails>
     <PokemonDetails>
      <PokemonImage src={leftPokemon?.frontSprite}/>
      <Pokemon>
          <PokemonName>{leftPokemon?.name}</PokemonName>
          <Power>
            <p>{leftPokemonMove?.name}</p> <p>{leftPokemonMove?.power || 0}</p>
          </Power>
        </Pokemon>
     </PokemonDetails>
     <BattleLogContainer>
      <BattleLog>{winner}</BattleLog>
      <Button>Start Battle!</Button>
     </BattleLogContainer>

    </Container>
  )
}