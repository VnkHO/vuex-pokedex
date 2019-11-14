<template>
  <div class="pokemon" id="pokemon">
    <div class="pokemon-loading" v-if="getPokemonById.length === 0">
      <p class="pokemon-loading--load">Loooading ...</p>
      <div class="pokemon-refresh">
        <p
          class="pokemon-refresh--text"
        >Si vous avez rafraîchi la page, veuillez revenir sur le Pokedex</p>
        <router-link to="/pokedex" tag="p" class="pokemon-refresh--link">Retour Pokedex</router-link>
      </div>
    </div>

    <section class="pokemon-section" v-else>
      <article class="pokemon-article" :class="renderClass(getPokemonById[0].types[0].type.name)">
        <header class="pokemon-header">
          <router-link tag="a" class="pokemon-header__back" to="/pokedex">Pokédex</router-link>
        </header>
        <div class="pokemon-title__container">
          <h1 class="pokemon-title__primary">{{getPokemonById[0].name}}</h1>
          <PokemonOrder class="pokemon-Order" :pokemon="getPokemonById[0]" />
        </div>
        <PokemonImage class="pokemon-Image" :pokemon="getPokemonById[0]" />
        <div class="pokemon-information">
          <PokemonType class="pokemon-Type" :pokemon="getPokemonById[0]" />
          <nav class="pokemon-information__nav">
            <ul class="pokemon-information__nav-list">
              <li
                @click="renderAbout()"
                :class="{ navIsActive: showAbout}"
                class="pokemon-information__nav-list--item"
              >About</li>
              <li
                @click="renderProfile()"
                :class="{ navIsActive: showProfile}"
                class="pokemon-information__nav-list--item"
              >Profile</li>
              <li
                @click="renderStat()"
                :class="{ navIsActive: showStat}"
                class="pokemon-information__nav-list--item"
              >Base Stats</li>
              <li
                @click="renderMoves()"
                :class="{ navIsActive: showMoves}"
                class="pokemon-information__nav-list--item"
              >Moves</li>
            </ul>
          </nav>

          <transition name="slide-fade">
            <PokemonAbout v-show="showAbout" />
          </transition>

          <transition name="slide-fade">
            <PokemonStat v-if="showStat" :getPokemonById="getPokemonById[0]" />
          </transition>

          <transition name="slide-fade">
            <PokemonProfile v-show="showProfile" />
          </transition>

          <transition name="slide-fade">
            <PokemonMoves v-show="showMoves" />
          </transition>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("pokemons");

import PokemonOrder from "@/components/PokemonOrder/PokemonOrder.vue";
import PokemonImage from "@/components/PokemonImage/PokemonImage.vue";
import PokemonType from "@/components/PokemonType/PokemonType.vue";

import PokemonAbout from "@/components/PokemonAbout/PokemonAbout.vue";
import PokemonStat from "@/components/PokemonStat/PokemonStat.vue";
import PokemonProfile from "@/components/PokemonProfile/PokemonProfile.vue";
import PokemonMoves from "@/components/PokemonMoves/PokemonMoves.vue";

import "../Pokemon/Pokemon.scss";

export default {
  name: "Pokemon",
  components: {
    PokemonOrder,
    PokemonImage,
    PokemonType,
    PokemonAbout,
    PokemonStat,
    PokemonProfile,
    PokemonMoves
  },
  data() {
    return {
      showAbout: true,
      showStat: false,
      showProfile: false,
      showMoves: false
    };
  },
  created(this: any) {
    this.$store.dispatch("pokemons/getID", parseInt(this.$route.params.id), 10);
  },
  mounted(this: any): any {
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
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
    },
    renderAbout(this: any): void {
      this.showAbout = true;
      this.showStat = false;
      this.showProfile = false;
      this.showMoves = false;
    },
    renderStat(this: any): void {
      this.showAbout = false;
      this.showStat = true;
      this.showProfile = false;
      this.showMoves = false;
    },
    renderProfile(this: any): void {
      this.showAbout = false;
      this.showStat = false;
      this.showProfile = true;
      this.showMoves = false;
    },
    renderMoves(this: any): void {
      this.showAbout = false;
      this.showStat = false;
      this.showProfile = false;
      this.showMoves = true;
    }
  },
  computed: {
    ...mapState(["pokemonsSpecies", "getPokemonStat"]),
    ...mapGetters(["getPokemonById"])
  }
};
</script>