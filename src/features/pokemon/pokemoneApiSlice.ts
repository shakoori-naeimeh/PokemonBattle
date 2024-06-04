import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoveDetails } from '../shared.types';

const baseUrl = 'https://pokeapi.co/api/v2/'

interface PokemonUrl {
  name: string;
  url: string;
}

interface PokemonQueryResult {
  paginationMetaData: {
    count: number
    next: string
    previouse: string
  }
  results: PokemonUrl[]
}

interface PokemonDetails {
  name: string
  baseStats: number
  frontSprite: string
  backSprite: string
  primaryType: string
  moves: MoveUrl[]
}

interface MoveUrl {
  name: string
  url: string
}

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonQueryResult, void>({
      query: () => 'pokemon',
    }),
    getPokemon: builder.query<PokemonDetails, string>({
      query: (name) => `pokemon/${name}/`,
      transformResponse: (response: any) => {
        return {
          name: response.name,
          baseStats: response.stats[0].base_stat,
          frontSprite: response.sprites.front_default,
          backSprite: response.sprites.back_default,
          primaryType: response.types[0].type.name,
          moves: response.moves.map((move: any) => move.move)
        }
      }
    }),
    getMove: builder.query<MoveDetails, string>({
      query: (name) => `move/${name}/`,
      transformResponse: (response: any) => {
        return {
          name: response.name,
          power: response.power
        }
      }
    })
  }),
});


export const { useGetPokemonsQuery, useGetPokemonQuery, useGetMoveQuery } = pokemonApi;

export default pokemonApi;