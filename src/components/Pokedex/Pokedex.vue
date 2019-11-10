<template>
  <div id="pokedexList" class="pokedexList">
    <h2 class="pokedexList-title">Pokedex</h2>
    <FilterPokemons
      class="pokedexList-input--filter"
      aria-placeholder="Search your pokemon..."
      placeholder="Search your pokemon..."
    />
    <div v-if="pokemons.length === 0">Loading....</div>
    <section v-else class="pokedexList-section">
      <article
        v-for="(pokemon, index) in (pokemons)"
        class="pokedexList-container"
        :key="pokemon.name"
        :class="[
          `pokedexList-container__animation--${index + 1}`,
          renderClass(pokemon.types[0].type.name)
          ]"
      >
        <router-link
          class="pokedexList-link"
          :to="{path: `/pokedex/pokemon/${pokemon.name}/${pokemon.id}`,
          }"
        >
          <div class="pokedexList-information__container">
            <h4 class="pokedexList-information__title">{{ pokemon.name }}</h4>
            <PokemonType class="pokedexList-Type" :pokemon="pokemon" />
            <PokemonOrder class="pokedexList-Order" :pokemon="pokemon" />
          </div>
          <PokemonImage :pokemon="pokemon" class="pokedexList-Image" />
        </router-link>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";

import FilterPokemons from "@/components/FilterPokemons/FilterPokemons.vue";

import PokemonType from "@/components/PokemonType/PokemonType.vue";
import PokemonOrder from "@/components/PokemonOrder/PokemonOrder.vue";
import PokemonImage from "@/components/PokemonImage/PokemonImage.vue";

import "../Pokedex/Pokedex.scss";

export default {
  name: "pokedex",
  components: {
    FilterPokemons,
    PokemonType,
    PokemonOrder,
    PokemonImage
  },
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
  },
  methods: {
    renderClass: function(type: any): string {
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
    ...mapState("pokemons", ["pokemons"])
  }
};
</script>
