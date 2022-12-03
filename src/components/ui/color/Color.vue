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
@import "./Color.scss";
</style>
