``
<script setup lang="ts">
import { ref, type Ref } from "vue";

interface FlexboxProps {
  align?: "baseline" | "center" | "end" | "start" | "stretch";
  column?: boolean;
  gap?: string;
  justify?: "around" | "between" | "center" | "evenly";
}

const props = defineProps<FlexboxProps>();

const flexboxClass: Ref<Array<string>> = ref([""]);

if (props.align) {
  flexboxClass.value.push(`-align-${props.align}`);
}

if (props.column) {
  flexboxClass.value.push("-column");
}

if (props.justify) {
  flexboxClass.value.push(`-justify-${props.justify}`);
}

const flexboxStyle: Ref<Array<string>> = ref([]);

if (props.gap) {
  flexboxStyle.value.push("--flex-gap:" + props.gap);
}
</script>

<template>
  <div class="flexbox" :class="flexboxClass" :style="flexboxStyle">
    <slot />
  </div>
</template>

<style lang="scss">
@import "./Flexbox.scss";
</style>
