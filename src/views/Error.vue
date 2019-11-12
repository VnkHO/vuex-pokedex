<template>
  <Error404 />
</template>

<script lang="ts">
import Vue from "vue";

import Error404 from "@/components/Error404/Error404.vue";

export default Vue.extend({
  name: "Error",
  components: {
    Error404
  }
});
</script>

