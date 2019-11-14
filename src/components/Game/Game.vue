<template>
  <section class="game" id="game">
    <div v-if="start" class="game__starter">
      <h1 class="game__title">Pokememory !</h1>
      <h2 class="game__beta">BETA Version</h2>
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
        class="game__memory-card"
        :class="{isFlip: pokemon.uniqueId === selected}"
        v-for="(pokemon, index) in getPokemonGame"
        :key="index"
      >
        <figure
          class="game__memory-images"
          :data-id="pokemon.id"
          :data-index="index"
          @click="flipCard(pokemon, $event)"
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
      start: true,
      // isActive: false,
      selected: undefined,
      hasFlippedCard: false,
      firstCard: null,
      secondCard: null
    };
  },
  created(this: any) {
    this.$store.dispatch("pokemons/fetchPokemons");
  },
  methods: {
    flipCard: function(pokemon: any, event: any) {
      this.selected = pokemon.uniqueId;
      let hasFlippedCard = this.hasFlippedCard;
      let firstCard = this.firstCard;
      let secondCard = this.secondCard;
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = event.target;
        console.log("Has flipped card :", hasFlippedCard);
        console.log("firstCard :", firstCard);
      } else {
        hasFlippedCard = false;
        secondCard = event.target;
        console.log("ELLSE Has flipped card :", hasFlippedCard);
        console.log("firstCard :", firstCard);
        console.log("ELLLSE SECONDCARD :", secondCard);
      }
    }
  },
  computed: {
    ...mapGetters(["getPokemonGame"])
  }
};
</script>