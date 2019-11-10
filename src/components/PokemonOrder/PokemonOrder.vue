<template>
  <div class>
    <p class v-if="orderPokemon() === 1">{{ `#00${pokemon.id}` }}</p>
    <p class v-if="orderPokemon() === 2">{{ `#0${pokemon.id}` }}</p>
    <p class v-if="orderPokemon() === 3">{{ `#${pokemon.id}` }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "PokemonOrder",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    orderPokemon(this: any): any {
      return this.pokemon.id.toString().length;
    }
  }
};
</script>

