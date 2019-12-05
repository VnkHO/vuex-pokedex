<template>
  <div id="home" class="home">
    <router-link class="home__router home__router--pokedex" tag="a" to="/pokedex">
      <p class="home__router--link home__router--link--pokedex">Pokedex</p>
      <div class="home__marker home__marker--pokedex"></div>
      <span class="home__beacon home__beacon--pokedex"></span>
    </router-link>
    <!-- <router-link class="home__router home__router--game" tag="div" to="/game">
      <p class="home__router--link home__router--link--game">Game</p>
      <div class="home__marker home__marker--game"></div>
      <span class="home__beacon home__beacon--game"></span>
    </router-link>-->
  </div>
</template>

<script lang="ts">
import "../Home/Home.scss";

export default {
  name: "homescreen"
};
</script>


<style scoped>
</style>