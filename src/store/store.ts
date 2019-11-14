import Vue from 'vue';
import Vuex from 'vuex';


import pokemons from '@/store/modules/pokemon/pokemons.ts';
import game from '@/store/modules/game/game.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemons,
    game
  },
})