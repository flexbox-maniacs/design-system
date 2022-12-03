<script setup lang="ts">
import { ref, type Ref } from "vue";

interface CellProps {
  lg?: number | string;
  size?: number | string;
}

const props = defineProps<CellProps>();

const isMobile = window.innerWidth <= 768;

const cellClass: Ref<Array<string>> = ref([]);

if (props.lg && !isMobile) {
  cellClass.value.push("-lg-size-" + props.lg);
}

if (props.size && !isMobile) {
  cellClass.value.push("-size-" + props.size);
}
</script>

<template>
  <div class="cell" :class="cellClass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "./Cell.scss";
</style>
