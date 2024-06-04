import { useEffect, useState } from "react";
import { useGetPokemonsQuery, useGetPokemonQuery, useGetMoveQuery } from "../../features/pokemon/pokemoneApiSlice";
import { useAppDispatch } from "./storeHooks";
import { setBattleGround } from "../../features/battleGround/battleGroundSlice";

export const useBattle = () => {
  const dispatch = useAppDispatch()
  const { data: pokemons, isLoading: pokemonsLoading, error: pokemonsError } = useGetPokemonsQuery();
  const { data: rightPokemon, isLoading: rightPokemonLoading, error: rightPokemonError } = useGetPokemonQuery(pokemons?.results[0]?.name!, { skip: pokemonsLoading });
  const { data: leftPokemon, isLoading: leftPokemonLoading, error: leftPokemonError } = useGetPokemonQuery(pokemons?.results[1]?.name!, { skip: pokemonsLoading });
  const { data: rightPokemonMove, error: rightPokemonMoveError } = useGetMoveQuery(rightPokemon?.moves[0]?.name!, { skip: rightPokemonLoading});
  const { data: leftPokemonMove, error: leftPokemonMoveError } = useGetMoveQuery(leftPokemon?.moves[0]?.name!, { skip: leftPokemonLoading});

  const [error, setError] = useState("")

  useEffect(() => {
    if (rightPokemon && leftPokemon && rightPokemonMove && leftPokemonMove) {
      const playerOne = {
        name: rightPokemon.name,
        frontSprite: rightPokemon.frontSprite,
        backSprite: rightPokemon.backSprite,
        move: rightPokemonMove.name,
        power: rightPokemonMove.power,
      }
      const playerTwo = {
        name: leftPokemon.name,
        frontSprite: leftPokemon.frontSprite,
        backSprite: leftPokemon.backSprite,
        move: leftPokemonMove.name,
        power: leftPokemonMove.power,
      }

      dispatch(setBattleGround({
        players: [playerOne, playerTwo],
        status: "ready"
      }))
    } else if (pokemonsError || rightPokemonError || leftPokemonError || rightPokemonMoveError || leftPokemonMoveError) {
      setError("Couldn't set up the battle ground. Please try again later!")
    }
  }, [rightPokemon, leftPokemon, rightPokemonMove, leftPokemonMove, pokemonsError, rightPokemonError, leftPokemonError, rightPokemonMoveError, leftPokemonMoveError])

  return { error }
}