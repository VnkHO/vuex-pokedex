<template>
  <div class>
    <p class v-if="typePokemon(0)">{{ typePokemon(0).type.name }}</p>
    <p class v-if="typePokemon(1)">{{ typePokemon(1).type.name}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "PokemonType",
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    typePokemon(this: any, id: number): any {
      return this.pokemon.types[id];
    }
  }
};
</script>

