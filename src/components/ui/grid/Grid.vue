<script setup lang="ts"></script>

<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/scss/breakpoints.scss";

.grid {
  display: flex;
  column-gap: calc(var(--spacing, 5rem) / 2);
  align-items: center;

  @include max($desktop) {
    flex-direction: column;
  }
}
</style>
