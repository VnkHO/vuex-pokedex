import Vue from 'vue';
import Vuex from 'vuex';


import pokemons from '@/store/modules/pokemons.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemons
  },
})