<template>
  <div id="Home" class="Home">
    <HomeScreen />
    <!-- <Home /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HomeScreen from "@/components/Home/Home.vue";

export default {
  name: "Home",
  components: { HomeScreen }
};
</script>