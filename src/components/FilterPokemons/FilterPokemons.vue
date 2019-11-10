<template>
  <input type="search" v-model="searchWord" />
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "FilterPokemons",
  computed: {
    searchWord: {
      get(this: any): any {
        return this.$store.getters.searchWord;
      },
      set(this: any, value: string): any {
        this.$store.dispatch("filteredPokemons", value);
      }
    }
  }
};
</script>