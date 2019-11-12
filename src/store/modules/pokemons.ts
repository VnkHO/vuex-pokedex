import axios from 'axios';

import { PokemonState, Pokemon } from '@/models/pokemon.ts';
import { Module } from 'vuex';

const pokemons: Module<{}, any> = {
  namespaced: true,

  state: {
    pokemons: [],
    pokemonsSpecies: [],
    filteredPokemons: null,
    searchWord: '',
    id: 1
  },

  getters: {
    // Get Pokemons for Pokedex
    getPokedex(state: any) {
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
    },
    // Get the current pokemon when clicked on Pokedex
    getPokemonById(state: any) {
      const id = parseInt(state.id)
      return state.pokemons.filter((pokemon: any) => {
        const pokemonId = parseInt(pokemon.id)
        return pokemonId === id
      })
    },

    // Get the current pokemon id + 1
    getPokemonByIdPlusOne(state: any) {
      const id = parseInt(state.id) + 1
      const latestId = (state.pokemons.length - 1)
      if (id !== latestId) {
        return state.pokemons.filter((pokemon: any) => {
          const pokemonId = parseInt(pokemon.id)
          return pokemonId === id
        })
      }
    },
    // Get the current pokemon id - 1
    getPokemonByIdMinusOne(state: any) {
      const id = parseInt(state.id) - 1
      if (id !== 1) {
        return state.pokemons.filter((pokemon: any) => {
          const pokemonId = parseInt(pokemon.id)
          return pokemonId === id
        })
      }
    },
    filtersPokemons: (state: any) => state.filteredPokemons,
  },
  mutations: {
    INIT_POKEMONS: (state: any, pokemons: any) => state.pokemons = pokemons,
    GET_ID: (state: any, id: number) => state.id = id,
    SET_POKEMON_SPECIES: (state: any, pokemonsSpecies: any) => state.pokemonsSpecies = pokemonsSpecies,
    FILTERED_POKEMON(state: any, searchWord: string) {
      if (!(searchWord) || searchWord === '{}') {
        state.searchWord = null
        state.filteredPokemons = null
      } else {
        state.searchWord = searchWord
        searchWord = searchWord.trim().toLowerCase()
        state.filteredPokemons = state.pokemons.filter((pokemon: any) => {
          return pokemon.name.toLowerCase().includes(searchWord)
        })
      }
    }
  },

  actions: {

    // Get ID for One Pokemon
    getID({ commit }: any, id: number) {
      commit('GET_ID', id)
    },
    // Function to get all my pokemons
    async fetchPokemons({ state, commit }: any): Promise<any> {
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
    },

    // Get the value for filter
    filteredPokemons({ commit }: any, searchWord: string) {
      commit('FILTERED_POKEMON', searchWord)
    },

    // Function to get pokemon's species
    async fetchPokemonsSpecies({ state, commit }: any) {
      const { pokemonsSpecies, id } = state
      if (!pokemonsSpecies['pokemonsSpecies']) {
        const URL = "https://pokeapi.co/api/v2/pokemon-species/";
        const response = await axios.get(`${URL}${id}`)
        const data = await response.data
        commit('SET_POKEMON_SPECIES', data)
      }
    },
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
  }
}

export default pokemons;