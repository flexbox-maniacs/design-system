<script setup lang="ts">
import Flexbox from "../flexbox/Flexbox.vue";
</script>

<template>
  <Flexbox align="center" class="stack">
    <slot />
  </Flexbox>
</template>

<style lang="scss">
@import "./Stack.scss";
</style>
