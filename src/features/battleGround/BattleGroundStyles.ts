import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 16px;
  padding: 10px 41px;
  margin-top: 100px;
`
export const PokemonContainer= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Pokemon = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 16px;
  height: 50px;
  align-items: center;
  padding: 10px 10px;
`
export const PokemonName = styled.h2`
  padding-right: 100px;
  text-transform: capitalize;
`
export const Power = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid green;
  background-color: lightgreen;
  border-radius: 26px;
  padding: 0px 25px;
`
export const PowerName = styled.p`
  padding-right: 8px;
  text-transform: capitalize;
`
export const PokemonImage = styled.img`
  width: 300px
`
export const BattleLogContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 16px;
  width: 550px;
  height: 150px; 
  padding: 20px;
  margin-right: 10px;
`
export const Button = styled.button`
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid;
  padding: 0 25px;
`