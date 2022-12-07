<script setup lang="ts">
import { Icon } from "../../..";

interface SidebarProps {
  closeColor?: string;
  isSidebarOpen?: boolean;
}

defineProps<SidebarProps>();

defineEmits(["closeSidebar"]);

const isMobile = window.innerWidth <= 768;
</script>

<template>
  <div v-show="isSidebarOpen" class="overlay" @click="$emit('closeSidebar')" />
  <aside v-show="isSidebarOpen" class="sidebar">
    <slot />
    <Icon
      v-if="isMobile"
      :color="closeColor"
      name="close"
      class="close"
      @click="$emit('closeSidebar')"
    />
  </aside>
</template>

<style lang="scss">
@import "./Sidebar.scss";
</style>
