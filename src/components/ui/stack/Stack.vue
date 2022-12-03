<script setup lang="ts">
import Flexbox from "../flexbox/Flexbox.vue";

interface StackProps {
  align?: string;
  column?: boolean;
  gap?: string;
  justify?: string;
}

defineProps<StackProps>();
</script>

<template>
  <Flexbox
    :align="align"
    :column="column"
    :gap="gap"
    :justify="justify"
    class="stack"
  >
    <slot />
  </Flexbox>
</template>

<style lang="scss">
@import "./Stack.scss";
</style>
