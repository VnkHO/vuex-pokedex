<template>
  <div id="home" class="home">
    <router-link class="router" tag="div" to="/pokedex">Pokedex</router-link>
    <router-link class="router" tag="div" to="/game">Game</router-link>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("pokemons");

export default {
  name: "homescreen",
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
  },
  computed: {
    ...mapGetters(["all_pokemons"])
  }
};
</script>


<style scoped>
.router {
  margin: 5rem;
  font-size: 4rem;
  background: var(--red);
  text-align: center;
  padding: 2rem;
  color: var(--white);
}

h1 {
  text-align: center;
  margin: 5rem 0;
  font-size: 8rem;
}
</style>