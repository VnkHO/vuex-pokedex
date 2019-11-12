<template>
  <div id="home" class="home">
    <PokedexStarter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokedexStarter from "@/components/Starter/Starter.vue";

export default Vue.extend({
  name: "Starter",
  components: {
    PokedexStarter
  }
});
</script>

