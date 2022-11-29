<script setup lang="ts">
import { ref, type Ref } from "vue";

interface ColorProps {
  color: string;
  size?: number | string;
}

const props = defineProps<ColorProps>();

const colorClass: Ref<Array<string>> = ref([]);

if (props.size) {
  colorClass.value.push("-size-" + props.size);
}
</script>

<template>
  <div class="color" :class="colorClass" tabindex="0" />
</template>

<style scoped lang="scss">
.color {
  background-color: v-bind(color);
  border-radius: 100%;
  cursor: pointer;

  @for $size from 1 through 100 {
    &.-size-#{$size} {
      height: $size + px;
      width: $size + px;
    }

    &.-lg-size-#{$size} {
      height: $size + px;
      width: $size + px;
    }
  }

  &:focus,
  &:hover {
    box-shadow: var(--color-shadow);
    transform: scale(1.05);
  }
}
</style>
