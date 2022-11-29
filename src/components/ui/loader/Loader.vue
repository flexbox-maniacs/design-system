<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  size: Number,
  lg: Number,
});

const loaderClass = ref([]);
const isMobile = window.innerWidth <= 768;

if (props.lg && !isMobile) {
  loaderClass.value.push("-lg-size-" + props.lg);
}

if (props.size) {
  loaderClass.value.push("-size-" + props.size);
}
</script>

<template>
  <div class="loader" :class="loaderClass" />
</template>

<style scoped lang="scss">
.loader {
  animation: spin 1s ease-in-out infinite;
  border: {
    color: transparent;
    radius: 100%;
    style: solid;
    top-color: var(--primary);
  }

  @for $size from 1 through 999 {
    &.-lg-size-#{$size} {
      border-width: calc($size / 15) + px;
      height: $size + px;
      width: $size + px;
    }

    &.-size-#{$size} {
      border-width: calc($size / 10) + px;
      height: $size + px;
      width: $size + px;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
