import { Module } from 'vuex';

import * as getters from '@/store/modules/pokemon/getters';
import * as mutations from '@/store/modules/pokemon/mutations';
import * as actions from '@/store/modules/pokemon/actions';


const pokemons: Module<{}, any> = {
  namespaced: true,
  state: {
    pokemons: [],
    pokemonsSpecies: [],
    filteredPokemons: null,
    searchWord: '',
    id: 1
  },
  getters,
  mutations,
  actions
}

export default pokemons;