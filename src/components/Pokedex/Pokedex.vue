<template>
  <div id="pokedexList" class="pokedexList">
    <header class="pokedexList__header">
      <router-link tag="a" class="pokedexList__back" to="/home"></router-link>
      <h1 class="pokedexList-title">Pokedex</h1>
    </header>
    <FilterPokemons
      class="pokedexList-input--filter"
      aria-placeholder="Search your pokemon..."
      placeholder="Search your pokemon..."
    />
    <div class="pokedexList-Loader" v-if="getPokedex.length === 0">
      <Loader />
    </div>
    <section v-else class="pokedexList-section">
      <article
        v-for="(pokemon, index) in (filtersPokemons || getPokedex)"
        class="pokedexList-container"
        :key="pokemon.name"
        :class="[
          pokemon.types[0].type.name,
          `pokedexList-container__animation--${index + 1}`
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers(
  "pokemons"
);

import FilterPokemons from "@/components/FilterPokemons/FilterPokemons.vue";

import PokemonType from "@/components/PokemonType/PokemonType.vue";
import PokemonOrder from "@/components/PokemonOrder/PokemonOrder.vue";
import PokemonImage from "@/components/PokemonImage/PokemonImage.vue";

import Loader from "@/components/Loader/Loader.vue";

import "../Pokedex/Pokedex.scss";

export default {
  name: "pokedex",
  components: {
    FilterPokemons,
    PokemonType,
    PokemonOrder,
    PokemonImage,
    Loader
  },
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
  },
  computed: {
    ...mapGetters(["getPokedex", "filtersPokemons"])
  }
};
</script>
