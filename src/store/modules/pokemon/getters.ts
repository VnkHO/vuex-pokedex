import { PokedexInfo, Pokemon } from '@/models/pokemon.ts';
import { randomNumber } from '@/utils/Random.ts';
import { shuffle } from '@/utils/Shuffle.ts';

// Get Pokemons for Pokedex
export const getPokedex = (state: any): any => {
  return state.pokemons.map((pokemon: any) => {
    const pokedexInfo = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,
      sprites: {
        front_default: pokemon.sprites.front_default
      }
    }
    return pokedexInfo
  })
}

export const filtersPokemons = (state: any) => state.filteredPokemons,

// Get the current pokemon when clicked on Pokedex
export const getPokemonById = (state: any): any => {
  const id = parseInt(state.id)
  return state.pokemons.filter((pokemon: any) => {
    const pokemonId = parseInt(pokemon.id)
    return pokemonId === id
  })
}

// Generate 6 unique random numbers and shuffle it
export const getPokemonGame = (state: any): any => {
  const { pokemons } = state
  if (pokemons.length !== 0) {

    // Get 6 unique random numbers
    const result: any[] = [];
    const numbersArr: any[] = [];

    pokemons.map((pokemon: any, index: number) => {
      const pokemonInfo = {
        uniqueId: index,
        id: pokemon.id,
        image: pokemon.sprites.front_default
      }
      numbersArr.push(pokemonInfo)
    })

    if (numbersArr.length === pokemons.length) {
      while (result.length < 6) {
        const randomIndex = randomNumber(numbersArr.length)
        result.push(numbersArr[randomIndex]);
        numbersArr.splice(randomIndex, 1);
      }
    }

    // Deep clone object
    const newResult = JSON.parse(JSON.stringify(result));
    for (let i in newResult) {
      newResult[i].uniqueId += 200
    }

    // Shuffle
    const myPokemons = [...result, ...newResult]
    return shuffle(myPokemons);
  }
}

// Get the current pokemon id + 1
// export const getPokemonByIdPlusOne = (state: any) => {
//   const id = parseInt(state.id) + 1
//   const latestId = (state.pokemons.length - 1)
//   if (id !== latestId) {
//     return state.pokemons.filter((pokemon: any) => {
//       const pokemonId = parseInt(pokemon.id)
//       return pokemonId === id
//     })
//   }
// }

// Get the current pokemon id - 1
// export const getPokemonByIdMinusOne = (state: any) => {
//   const id = parseInt(state.id) - 1
//   if (id !== 1) {
//     return state.pokemons.filter((pokemon: any) => {
//       const pokemonId = parseInt(pokemon.id)
//       return pokemonId === id
//     })
//   }
// }
