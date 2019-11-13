<template>
  <section class="game" id="game">
    <div v-if="start" class="game__starter">
      <h1 class="game__title">Pokememory !</h1>
      <div class="game__starter-container">
        <p class="game__starter-text">Pokemomry est un jeu de mémoire.</p>
        <p
          class="game__starter-text"
        >Il faut retrouver toutes les paires de cartes pokemon identiques pour pouvoir gagner le jeu du Pokememory !</p>
        <p class="game__starter-text">Bonne chance à vous !</p>
        <div class="game__starter-container-btn">
          <button @click.prevent="start = !start" class="game__starter-btn">Start !</button>
        </div>
      </div>
    </div>
    <section v-else class="game__memory-game">
      <article
        ref="card"
        class="game__memory-card"
        v-for="(pokemon, index) in getPokemonGame"
        :key="index"
      >
        <figure
          class="game__memory-images"
          :data-id="pokemon.id"
          :data-index="index"
          @click.prevent="check(pokemon, $event)"
        >
          <img class="game__memory-card--front" :src="pokemon.image" :alt="pokemon.image" />
          <img
            class="game__memory-card--back"
            src="@/assets/images/pokemon_card.png"
            alt="Pokemon Back Face"
          />
        </figure>
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers(
  "pokemons"
);

import Loader from "@/components/Loader/Loader.vue";

import "../Game/Game.scss";

export default {
  name: "Game",
  components: {
    Loader
  },
  data() {
    return {
      start: true
    };
  },
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
  },
  methods: {
    check: function(pokemon: any, event: any) {
      console.log("pokemon :", pokemon);
      console.log("event :", event);
    }
  },
  computed: {
    ...mapGetters(["getPokemonGame"])
  }
};
</script>