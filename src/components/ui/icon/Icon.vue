``
<script setup lang="ts">
import { computed, ref, type Ref } from "vue";

interface IconProps {
  brand?: boolean;
  color?: string;
  name?: string;
  type?: string;
}

const props = defineProps<IconProps>();

const iconClass: Ref<Array<string>> = ref([]);

const iconColor: Ref<string | undefined> = ref("");

if (props.brand) {
  iconClass.value.push(`fa-brands fa-${props.name}`);
}

if (props.color === "primary" || props.color === "secondary") {
  iconClass.value.push(`-${props.color}`);
} else iconColor.value = props.color;

if (props.type === "rounded" || props.type === "filled") {
  iconClass.value.push(`material-icons-${props.type}`);
} else iconClass.value.push("material-icons-outlined");

const iconName = computed<string | null | undefined>(() => {
  if (!props.brand) {
    return props.name;
  } else return null;
});
</script>

<template>
  <i
    class="icon"
    :class="iconClass"
    :style="{ color: iconColor }"
    v-text="iconName"
  />
</template>

<style scoped lang="scss">
@import "./Icon.scss";
</style>
