<template>
  <figure class>
    <img class :src="renderFrontDefaultImage()" :alt="pokemon.name" />
  </figure>
</template>

<script lang="ts">
export default {
  name: "PokemonImage",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    renderFrontDefaultImage(this: any): any {
      return this.pokemon.sprites.front_default;
    }
  }
};
</script>

