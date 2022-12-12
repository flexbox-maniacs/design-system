<script setup lang="ts">
import Flexbox from "../flexbox/Flexbox.vue";

interface StackProps {
  align?: "baseline" | "center" | "end" | "start" | "stretch";
}

withDefaults(defineProps<StackProps>(), {
  align: "center",
});
</script>

<template>
  <Flexbox :align="align" class="stack">
    <slot />
  </Flexbox>
</template>

<style lang="scss">
@import "./Stack.scss";
</style>
