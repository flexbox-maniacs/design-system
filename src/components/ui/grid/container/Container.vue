<script setup lang="ts">
import { ref, type Ref } from "vue";

interface ContainerProps {
  align?: "left" | "right";
}

const props = defineProps<ContainerProps>();

const containerClass: Ref<Array<string>> = ref([]);

if (props.align) {
  containerClass.value.push(`-align-${props.align}`);
}
</script>

<template>
  <div class="container" :class="containerClass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "./Container.scss";
</style>
