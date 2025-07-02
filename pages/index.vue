<script lang="ts">
import {defineComponent} from 'vue'
import TestFile from "~/pages/TestFile.vue";

export default defineComponent({
name: "index",
  components: {TestFile}
})
</script>

<template>
  <body>
  <NuxtLink to="/TestFile">This is a nuxt link</NuxtLink>
  </body>

</template>

<style scoped>

</style>