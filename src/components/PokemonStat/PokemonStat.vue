
<template>
  <section class="pokemon-information__stat">
    <ul class="pokemon-information__stat-list">
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">HP</span>
        <span class="pokemon-information__stat-list--stat">{{ hp }}</span>
        <span
          :style="{width: widthHp + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">Attack</span>
        <span class="pokemon-information__stat-list--stat">{{ attack }}</span>
        <span
          :style="{width: widthAttack + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">Defense</span>
        <span class="pokemon-information__stat-list--stat">{{ defense }}</span>
        <span
          :style="{width: widthDefense + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">Sp.Atk</span>
        <span class="pokemon-information__stat-list--stat">{{ specialAttack }}</span>
        <span
          :style="{width: widthSpecialAttack + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">Sp.Def</span>
        <span class="pokemon-information__stat-list--stat">{{ specialDefense }}</span>
        <span
          :style="{width: widthSpecialDefense + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
      <li class="pokemon-information__stat-list--item">
        <span class="pokemon-information__stat-list--title">Speed</span>
        <span class="pokemon-information__stat-list--stat">{{ speed }}</span>
        <span
          :style="{width: widthSpeed + 'px'}"
          :class="getPokemonById.types[0].type.name"
          class="pokemon-information__stat-list--bar"
        ></span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import pokemons from "../../store/modules/pokemons";

import "../PokemonStat/PokemonStat.scss";

export default {
  name: "PokemonStat",
  props: {
    getPokemonById: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      hp: 0,
      widthHp: 0,
      attack: 0,
      widthAttack: 0,
      defense: 0,
      widthDefense: 0,
      speed: 0,
      widthSpeed: 0,
      specialAttack: 0,
      widthSpecialAttack: 0,
      specialDefense: 0,
      widthSpecialDefense: 0
    };
  },
  created() {
    this.$nextTick((): void => {
      this.renderStat();
      return;
    });
    const widthHp = setInterval(() => {
      if (this.widthHp < this.hp) {
        this.widthHp += 1;
      } else {
        clearInterval(widthHp);
      }
    }, 10);
    const widthAttack = setInterval(() => {
      if (this.widthAttack < this.attack) {
        this.widthAttack += 1;
      } else {
        clearInterval(widthAttack);
      }
    }, 10);
    const widthDefense = setInterval(() => {
      if (this.widthDefense < this.defense) {
        this.widthDefense += 1;
      } else {
        clearInterval(widthDefense);
      }
    }, 10);
    const widthSpecialAttack = setInterval(() => {
      if (this.widthSpecialAttack < this.specialAttack) {
        this.widthSpecialAttack += 1;
      } else {
        clearInterval(widthSpecialAttack);
      }
    }, 10);
    const widthSpecialDefense = setInterval(() => {
      if (this.widthSpecialDefense < this.specialDefense) {
        this.widthSpecialDefense += 1;
      } else {
        clearInterval(widthSpecialDefense);
      }
    }, 10);
    const widthSpeed = setInterval(() => {
      if (this.widthSpeed < this.speed) {
        this.widthSpeed += 1;
      } else {
        clearInterval(widthSpeed);
      }
    }, 10);
  },
  methods: {
    renderStat(this: any) {
      const pokemon = this.getPokemonById;
      pokemon.stats.map((stat: any) => {
        switch (stat.stat.name) {
          case "hp":
            return (this.hp = stat["base_stat"]);
            break;
          case "attack":
            return (this.attack = stat["base_stat"]);
            break;
          case "defense":
            return (this.defense = stat["base_stat"]);
            break;
          case "speed":
            return (this.speed = stat["base_stat"]);
            break;
          case "special-attack":
            return (this.specialAttack = stat["base_stat"]);
            break;
          case "special-defense":
            return (this.specialDefense = stat["base_stat"]);
            break;
        }
      });
    }
  }
};
</script>


