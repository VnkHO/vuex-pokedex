<template>
  <section class="pokemon-moves">
    <h6 class="pokemon-moves__title">Moves</h6>
    <ul class="pokemon-moves__list">
      <li class="pokemon-moves__list--item" v-for="move in moves" :key="move">{{ move }}</li>
    </ul>
    <h6 class="pokemon-moves__title">Abilities</h6>
    <ul class="pokemon-abilities__list">
      <li
        class="pokemon-moves__list--item"
        v-for="ability in abilities"
        :key="ability"
      >{{ ability }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { capitalizeFirstLetter } from "@/utils/Capitalize.ts";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("pokemons");

import "../PokemonMoves/PokemonMoves.scss";

export default {
  name: "PokemonMoves",
  created() {
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
  },
  computed: {
    ...mapState(["pokemonsSpecies"]),
    ...mapGetters(["getPokemonById"]),
    abilities(this: any): String[] {
      const pokemon = this.getPokemonById[0];
      return pokemon.abilities.map((ability: any) => {
        return capitalizeFirstLetter(ability.ability.name);
      });
    },
    moves(this: any): String[] {
      const pokemon = this.getPokemonById[0];
      return pokemon.moves
        .map((move: any) => {
          return capitalizeFirstLetter(move.move.name);
        })
        .slice(0, 4);
    }
  },
  beforeMount(): void {
    // let self = this;
    // this.$nextTick((): void => {
    //   this.renderFlavor();
    //   return;
    // });
  }
};
</script>

