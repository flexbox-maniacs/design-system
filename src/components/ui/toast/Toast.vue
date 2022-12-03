<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, type Ref } from "vue";
import { Icon } from "../../..";

interface ToastProps {
  text?: string | object;
  variant?: string;
}

const props = defineProps<ToastProps>();

const toastClass: Ref<Array<string>> = ref([]);

if (
  props.variant === "danger" ||
  props.variant === "info" ||
  props.variant === "success" ||
  props.variant === "warning"
) {
  toastClass.value.push(`-${props.variant}`);
}

const iconName = computed<string | undefined>(() => {
  if (props.variant === "danger") {
    return "error_outline";
  }

  if (props.variant === "info") {
    return "info";
  }

  if (props.variant === "success") {
    return "check_circle";
  }

  if (props.variant === "warning") {
    return "warning_amber";
  }
});
</script>

<template>
  <div class="toast" :class="toastClass">
    <Icon v-if="props.variant" :name="iconName" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "./Toast.scss";
</style>
