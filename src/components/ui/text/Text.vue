<script setup lang="ts">
import { ref, type Ref } from "vue";

interface TextProps {
  bold?: boolean;
  color?: string;
  strong?: boolean;
}

const props = defineProps<TextProps>();

const textClass: Ref<Array<string>> = ref([]);

if (props.bold) {
  textClass.value.push("-bold");
}

const textStyle: Ref<Array<string>> = ref([]);

if (props.color === "primary" || props.color === "secondary") {
  textClass.value.push(`-${props.color}`);
} else textStyle.value.push(`color: ${props.color}`);

if (props.strong) {
  textClass.value.push("-strong");
}
</script>

<template>
  <span class="text" :class="textClass" :style="textStyle">
    <slot />
  </span>
</template>

<style scoped lang="scss">
@import "./Text.scss";
</style>
