<template>
  <div id="Error" class="Error">
    <h1 class="Error-title--primary">Something went wrong</h1>
    <div class="Error-wrapper">
      <p class="Error-text--error">Error</p>
      <div class="Error-container">
        <div class="Error-text--div">4</div>
        <div class="Error-text--div">
          <span class="Error-text--span"></span>
        </div>
        <div class="Error-text--div">4</div>
      </div>
    </div>
    <p class="Error-title--secondary">Sorry, we can't find the page.</p>
    <a class="Error-link" @click="$router.go(-1)">Go back</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import "../Error404/Error404.scss";

export default {
  name: "Error404"
};
</script>

