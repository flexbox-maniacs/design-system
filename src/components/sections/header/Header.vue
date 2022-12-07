<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Icon } from "../../..";

interface HeaderProps {
  align?: "around" | "center" | "evenly" | "left" | "right";
  menuColor?: string;
  vertical?: boolean;
}

const props = defineProps<HeaderProps>();

const isMobile = window.innerWidth <= 768;

const headerClass: Ref<Array<string>> = ref([]);

if (props.align) {
  headerClass.value.push(`-align-${props.align}`);
}

if (props.vertical) {
  headerClass.value.push("-vertical");
}
</script>

<template>
  <header class="header" :class="headerClass">
    <slot />
    <Icon
      v-if="isMobile"
      :color="menuColor"
      name="menu"
      @click="$emit('openMenu')"
    />
  </header>
</template>

<style lang="scss">
@import "./Header.scss";
</style>
