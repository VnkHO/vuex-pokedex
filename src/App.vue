<template>
  <router-view />
</template>

<script lang="ts">
import Vue from "vue";

import Starter from "@/views/Starter.vue";
import Home from "@/views/Home.vue";
import Game from "@/views/Game.vue";
import Pokedex from "@/views/Pokedex.vue";
import Pokemon from "@/views/Pokemon.vue";
import Error404 from "@/views/Error.vue";

import "./assets/styles/styles.scss";

export default Vue.extend({
  name: "app",
  components: {
    Starter,
    Home,
    Game,
    Pokedex,
    Pokemon,
    Error404
  }
});
</script>