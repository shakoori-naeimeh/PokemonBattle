import { useEffect, useState } from "react";
import { useGetPokemonsQuery, useGetPokemonQuery, useGetMoveQuery } from "../../features/pokemon/pokemoneApiSlice";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { setBattleGround } from "../../features/battleGround/battleGroundSlice";

export const useBattle = () => {
  const dispatch = useAppDispatch()
  const { data: pokemons, isLoading: pokemonsLoading, error: pokemonsError } = useGetPokemonsQuery();
  const { data: rightPokemon, isLoading: rightPokemonLoading, error: rightPokemonError } = useGetPokemonQuery(pokemons?.results[0]?.name!, { skip: pokemonsLoading });
  const { data: leftPokemon, isLoading: leftPokemonLoading, error: leftPokemonError } = useGetPokemonQuery(pokemons?.results[1]?.name!, { skip: pokemonsLoading });
  const { data: rightPokemonMove, isLoading: rightPokemonMoveLoading, error: rightPokemonMoveError } = useGetMoveQuery(rightPokemon?.moves[0]?.name!, { skip: rightPokemonLoading});
  const { data: leftPokemonMove, isLoading: leftPokemonMoveLoading, error: leftPokemonMoveError } = useGetMoveQuery(leftPokemon?.moves[0]?.name!, { skip: leftPokemonLoading});

  const [loading, setLoading] = useState("loading")
  useEffect(() => {
    if (rightPokemon && leftPokemon && rightPokemonMove && leftPokemonMove) {
      dispatch(setBattleGround({
        rightPokemon: {
          name: rightPokemon.name,
          frontSprite: rightPokemon.frontSprite,
          backSprite: rightPokemon.backSprite
        }, 
        leftPokemon: {
          name: leftPokemon.name,
          frontSprite: leftPokemon.frontSprite,
          backSprite: leftPokemon.backSprite
        },
        rightPokemonMove: rightPokemonMove,
        leftPokemonMove: leftPokemonMove,
        status: "ready"
      }))
      setLoading("done")
    }
  }, [rightPokemon, leftPokemon, rightPokemonMove, leftPokemonMove])

  return { loading }
}