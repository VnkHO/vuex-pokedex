<template>
  <section class="game" id="game">
    <div class="game__container-ennemy">Ennemy</div>
    <div class="game__container-player">Player</div>
  </section>
</template>

<script lang="ts">
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers(
  "pokemons"
);

import "../Game/Game.scss";

export default {
  name: "Game",
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
  }
};
</script>

