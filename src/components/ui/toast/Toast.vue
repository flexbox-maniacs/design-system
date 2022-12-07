<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, type Ref } from "vue";
import { Icon } from "../../..";

interface ToastProps {
  label?: string | object;
  variant: "danger" | "info" | "success" | "warning";
}

const props = defineProps<ToastProps>();

const toastClass: Ref<Array<string>> = ref([]);

if (props.variant) {
  toastClass.value.push(`-${props.variant}`);
}

const iconName = computed<string | undefined>(() => {
  const icons = {
    danger: "error_outline",
    info: "info",
    success: "check_circle",
    warning: "warning_amber",
  };

  return icons[props.variant];
});
</script>

<template>
  <div class="toast" :class="toastClass">
    <Icon v-if="props.variant" :name="iconName" />
    {{ label }}
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "./Toast.scss";
</style>
