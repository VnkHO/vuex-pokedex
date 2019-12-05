<template>
  <main id="pokedexStarter" class="pokedexStarter">
    <section class="pokedexStarter-section">
      <div class="pokedexStarter-top">
        <div class="pokedexStarter-top__power"></div>
        <div class="pokedexStarter-top__menu">
          <span class="pokedexStarter-top__menu--button"></span>
          <span class="pokedexStarter-top__menu--button"></span>
          <span class="pokedexStarter-top__menu--button"></span>
        </div>
      </div>

      <div class="pokedexStarter-mid pokedexStarter-mid_animation">
        <div class="pokedexStarter-mid__screen">
          <span class="pokedexStarter-mid__screen--circle"></span>
          <!-- <span class='pokedex__mid-screen--reflection'></span> -->
          <div class="pokedexStarter-mid__cta">
            <button class="pokedexStarter-mid__cta--pokedex">
              <router-link tag="a" class="pokedexStarter-mid__cta--pokedex--link" to="/home">Enter</router-link>
              <!-- <router-link
                class="pokedexStarter-mid__cta--pokedex--link"
                :to="{ name: 'pokedex', params: { pokemons: pokemons }}"
              >Pokedex</router-link>-->
            </button>

            <!-- <button class="pokedexStarter-mid__cta--game">Game</button> -->
          </div>
        </div>
      </div>

      <div class="pokedexStarter-bottom">
        <div class="pokedexStarter-bottom__button"></div>
        <div class="pokedexStarter-bottom__bar"></div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import "../Starter/Starter.scss";

export default {
  name: "Starter"
};
</script>

