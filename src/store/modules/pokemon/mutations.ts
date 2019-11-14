export const INIT_POKEMONS = (state: any, pokemons: any) => state.pokemons = pokemons
export const GET_ID = (state: any, id: number) => state.id = id
export const SET_POKEMON_SPECIES = (state: any, pokemonsSpecies: any) => state.pokemonsSpecies = pokemonsSpecies
export const FILTERED_POKEMON = (state: any, searchWord: string) => {
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
