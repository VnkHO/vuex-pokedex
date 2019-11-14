import axios from 'axios';

// Get ID for One Pokemon
export const getID = ({ commit }: any, id: number) => {
  commit('GET_ID', id)
}

// Function to get all my pokemons
export const fetchPokemons = async ({ state, commit }: any): Promise<any> => {
  if (!state.pokemons['pokemons']) {
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    const getPokemons = [];
    const numberOfPokemons = 151;
    for (let i = 1; i <= numberOfPokemons; i++) {
      const response = await axios.get(`${URL}${i}`);
      const pokemons = await response.data
      const pokemonsTypes = pokemons.types
      if (typeof pokemonsTypes[1] !== 'undefined') {
        const swapOneToZero = pokemonsTypes[0].type.name
        pokemonsTypes[0].type.name = pokemonsTypes[1].type.name
        pokemonsTypes[1].type.name = swapOneToZero
      }
      getPokemons.push(pokemons);
    }
    commit('INIT_POKEMONS', getPokemons)
  }
}

// Get the value for filter
export const filteredPokemons = ({ commit }: any, searchWord: string) => {
  commit('FILTERED_POKEMON', searchWord)
}

// Function to get pokemon's species
export const fetchPokemonsSpecies = async ({ state, commit }: any): Promise<any> => {
  const { pokemonsSpecies, id } = state
  if (!pokemonsSpecies['pokemonsSpecies']) {
    const URL = "https://pokeapi.co/api/v2/pokemon-species/";
    const response = await axios.get(`${URL}${id}`)
    const data = await response.data
    commit('SET_POKEMON_SPECIES', data)
  }
}

// // Pagination
// async loadMorePokemon({ state, commit }: any) {
//   let newNumberOfPokemons = state.pokemons.length + 6;
//   const URL = "https://pokeapi.co/api/v2/pokemon/";
//   const getPokemons = [];
//   for (let i = 1; i <= newNumberOfPokemons; i++) {
//     const response = await axios.get(`${URL}${i}`);
//     const pokemons = await response.data
//     const pokemonsTypes = pokemons.types
//     if (typeof pokemonsTypes[1] !== 'undefined') {
//       const swapOneToZero = pokemonsTypes[0].type.name
//       pokemonsTypes[0].type.name = pokemonsTypes[1].type.name
//       pokemonsTypes[1].type.name = swapOneToZero
//     }
//     getPokemons.push(pokemons);
//   }
//   commit('INIT_POKEMONS', getPokemons)
// }