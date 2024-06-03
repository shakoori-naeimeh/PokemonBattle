import React from "react"
import { useBattle } from "../../app/hooks/useBattle"
import { useAppSelector } from "../../app/hooks/storeHooks"

export const BattleGround = () => {
  const { loading } = useBattle()
  const battleGround  = useAppSelector(state => state.battleGround)

  if (loading === "loading")
    return <>loading...</> 
  
  return (
    <>Helloooooooo!!</>
  )
}