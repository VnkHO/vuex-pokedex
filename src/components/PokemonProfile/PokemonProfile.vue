<template>
  <section class="pokemon-profile">
    <ul class="pokemon-profile__list-title">
      <li class="pokemon-profile__list-title--item" v-for="title in titles" :key="title">{{ title }}</li>
    </ul>
    <ul class="pokemon-profile__list-information">
      <li class="pokemon-profile__list-information--item">{{ genera }}</li>
      <li class="pokemon-profile__list-information--item">{{ catchRate }}</li>
      <li class="pokemon-profile__list-information--item">
        <p class="pokemon-profile__list-information--item--gender">
          <span
            class="pokemon-profile__list-information--item--female"
            :style="[genderRatioFemale === 50 ? {width: genderRatioFemale + '%'} : '',
            genderRatioFemale < 50 ? {width: genderRatioFemale + 12.5 + '%'} : '',
            genderRatioFemale > 50 ? {width: genderRatioFemale - 12.5 + '%'} : '']"
          >{{ genderRatioFemale }}%</span>
          <span
            class="pokemon-profile__list-information--item--male"
            :style="[genderRatioMale === 50 ? {width: genderRatioMale + '%'} : '',
            genderRatioMale < 50 ? {width: genderRatioMale + 12.5 + '%'} : '',
            genderRatioMale > 50 ? {width: genderRatioMale - 12.5 + '%'} : '']"
          >{{ genderRatioMale }}%</span>
        </p>
      </li>
      <li
        class="pokemon-profile__list-information--item"
        v-for="pokemon in eggGroups"
        :key="pokemon"
      >{{ pokemon }}</li>
      <li class="pokemon-profile__list-information--item">{{ hatchSteps }}</li>
      <li class="pokemon-profile__list-information--item">{{ evs[0] }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import {
  capitalizeFirstLetter,
  capitalizeFirstLetterAndJoin
} from "@/utils/Capitalize.ts";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("pokemons");

import "../PokemonProfile/PokemonProfile.scss";

export default {
  name: "PokemonProfile",
  data() {
    return {
      genera: "",
      titles: [
        "Genera",
        "Catch Rate",
        "Gender",
        "Egg Groups",
        "Hatch Steps",
        "EVs"
      ]
    };
  },
  created(this: any): void {
    this.$store.dispatch("pokemons/fetchPokemonsSpecies");
  },
  methods: {
    renderGenera: function(this: any): void {
      // Render Genera
      const pokemon = this.pokemonsSpecies;
      return pokemon.genera.some((genera: any) => {
        if (genera.language.name === "en") {
          this.genera = genera.genus;
          return;
        }
      });
    }
  },
  computed: {
    ...mapState(["pokemonsSpecies"]),
    ...mapGetters(["getPokemonById"]),
    genderRatioFemale(this: any): number {
      // Return female ratio
      const pokemon = this.pokemonsSpecies;
      const femaleRate = pokemon["gender_rate"];
      return 12.5 * femaleRate;
    },
    genderRatioMale(this: any): number {
      // Return male ratio
      const pokemon = this.pokemonsSpecies;
      const femaleRate = pokemon["gender_rate"];
      return 12.5 * (8 - femaleRate);
    },
    catchRate(this: any): number {
      const pokemon = this.pokemonsSpecies;
      // Percentage scale of catch rate
      return Math.round((100 / 255) * pokemon["capture_rate"]);
    },
    eggGroups(this: any): string {
      // Return egg groups
      const pokemon = this.pokemonsSpecies;
      return pokemon.egg_groups.map((egg: any) => {
        return capitalizeFirstLetter(egg.name);
      });
    },
    hatchSteps(this: any): number {
      // Return hatch steps
      const pokemon = this.pokemonsSpecies;
      return 255 * (pokemon.hatch_counter + 1);
    },
    evs(this: any): string {
      // Return Effort Value
      const pokemon = this.getPokemonById[0];
      const evs = pokemon.stats.filter((stat: any) => {
        if (stat.effort > 0) return true;
        return false;
      });
      return evs.map((stat: any) => {
        const statName = `${stat.effort} ${capitalizeFirstLetterAndJoin(
          stat.stat.name
        )}`;
        return statName;
      });
    }
  },
  beforeMount(this: any): void {
    // let self = this;
    this.$nextTick((): void => {
      this.renderGenera();
      return;
    });
  }
};
</script>

