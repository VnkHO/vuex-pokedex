<template>
  <div class="pokemon" id="pokemon">
    <section>
      <h1>Bulbasaur</h1>
    </section>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";

import "../Pokemon/Pokemon.scss";

export default {
  name: "Pokemon",
  created(this: any) {
    this.$store.dispatch("pokemons/getID", parseInt(this.$route.params.id), 10);
  },
  mounted() {
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
  },
  computed: {
    ...mapState("pokemons", ["pokemonsSpecies"]),
    pokemon() {
      return this.$store.getters["pokemons/getPokemonById"];
      return this.$store.getters["pokemons/getSidePokemonById"];
    }
  }
};
</script>

