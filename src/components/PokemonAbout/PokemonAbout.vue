<template>
  <section class>
    <div class="pokemon-information__description">
      <p class="pokemon-information__description--flavor" ref="flavor">{{ description }}</p>
      <div class="pokemon-information__description-container--size">
        <div class="pokemon-information__description-size">
          <p class="pokemon-information__description-size--title">Height</p>
          <p
            class="pokemon-information__description-size--text"
          >{{ renderHeightInch }} ft. ({{ renderHeight }}m)</p>
        </div>
        <div class="pokemon-information__description-size">
          <p class="pokemon-information__description-size--title">Weight</p>
          <p
            class="pokemon-information__description-size--text"
          >{{ renderWeightLBS }} lbs. ({{ renderWeight }}kg)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { capitalizeFirstLetter } from "@/utils/Capitalize.ts";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("pokemons");

import "../PokemonAbout/PokemonAbout.scss";

export default {
  name: "PokemonAbout",
  data: function() {
    return {
      description: ""
    };
  },
  created() {
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
  },
  methods: {
    renderFlavor: function(this: any) {
      // Render description
      const pokemon = this.pokemonsSpecies;
      pokemon.flavor_text_entries.some((flavor: any) => {
        if (flavor.language.name === "en") {
          this.description = flavor.flavor_text;
          return;
        }
      });
    }
  },
  computed: {
    ...mapState(["pokemonsSpecies"]),
    ...mapGetters(["getPokemonById"]),
    renderHeight: function(this: any): number {
      const pokemon = this.getPokemonById[0];
      return pokemon.height / 10;
    },
    renderHeightInch: function(this: any): number {
      const pokemon = this.getPokemonById[0];
      // Convert to feet
      // (+ 0.0001 * 100) / 100 -> rounding to 2 decimal
      return Math.round((pokemon.height * 0.220462 + 0.0001) * 100) / 100;
    },
    renderWeight: function(this: any): number {
      const pokemon = this.getPokemonById[0];
      return pokemon.weight / 10;
    },
    renderWeightLBS: function(this: any): number {
      const pokemon = this.getPokemonById[0];

      // Convert to lbs
      // (+ 0.0001 * 100) / 100 -> rounding to 2 decimal
      return Math.round((pokemon.weight * 0.220462 + 0.0001) * 100) / 100;
    }
  },
  beforeMount(): void {
    // let self = this;
    this.$nextTick((): void => {
      this.renderFlavor();
      return;
    });
  }
};
</script>

