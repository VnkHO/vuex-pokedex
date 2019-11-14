<template>
  <div class>
    <p
      v-for="(pokemon, index) in typePokemon"
      :key="pokemon"
      :class="renderClass(index)"
    >{{ pokemon }}</p>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("pokemons");

import { capitalizeFirstLetter } from "@/utils/Capitalize.ts";

export default {
  name: "PokemonType",
  methods: {
    renderClass: function(this: any, id: number): string {
      const pokemons = this.getPokemonById[0];
      const type = pokemons.types[id].type.name;
      return `
          'bug': ${type} === 'bug',
          'dark': ${type} === 'dark',
          'dragon': ${type} === 'dragon',
          'electric': ${type} === 'electric',
          'fairy': ${type} === 'fairy',
          'fighting': ${type} === 'fighting',
          'fire': ${type} === 'fire',
          'flying': ${type} === 'flying',
          'ghost': ${type} === 'ghost',
          'grass': ${type} === 'grass',
          'ground': ${type} === 'ground',
          'ice': ${type} === 'ice',
          'normal': ${type} === 'normal',
          'poison': ${type} === 'poison',
          'psychic': ${type} === 'psychic',
          'rock': ${type} === 'rock',
          'steel': ${type} === 'steel',
          'water': ${type} === 'water',
        `;
    }
  },
  computed: {
    ...mapGetters(["getPokemonById"]),
    typePokemon(this: any): string {
      const pokemons = this.getPokemonById[0];
      return pokemons.types.map((type: any) =>
        capitalizeFirstLetter(type.type.name)
      );
    }
  }
};
</script>

