<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Icon } from "../../..";

interface HeaderProps {
  align?: string;
  menuColor?: string;
  vertical?: boolean;
}

const props = defineProps<HeaderProps>();

const isMobile = window.innerWidth <= 768;

const headerClass: Ref<Array<string>> = ref([]);

if (
  props.align === "around" ||
  props.align === "center" ||
  props.align === "evenly" ||
  props.align === "left" ||
  props.align === "right"
) {
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
@import "../../../assets/scss/breakpoints.scss";

.header {
  align-items: center;
  background-color: var(--body, #fff);
  display: flex;
  max-width: 1280px;
  gap: var(--gap, 1rem);
  justify-content: var(--header-align, space-between);
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 1;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    bottom: calc(var(--spacing, 5rem) / 4);
    left: 1rem;
    right: 1rem;
    top: calc(var(--spacing, 5rem) / 4);
  }

  &.-align {
    &-around {
      --header-align: space-around;
    }

    &-center {
      --header-align: center;
    }

    &-evenly {
      --header-align: space-evenly;
    }

    &-left {
      --header-align: flex-start;
    }

    &-right {
      --header-align: flex-end;
    }
  }

  &.-vertical {
    flex-direction: column;
  }

  .icon {
    font-size: 32px;
  }
}
</style>
