<script setup lang="ts">
import { ref, type Ref } from "vue";

interface ContainerProps {
  align?: string;
}

const props = defineProps<ContainerProps>();

const containerClass: Ref<Array<string>> = ref([]);

if (props.align === "left" || props.align === "right") {
  containerClass.value.push(`-align-${props.align}`);
}
</script>

<template>
  <div class="container" :class="containerClass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1140px;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    left: 20px;
    right: 20px;
  }

  &.-align {
    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }
  }

  &:not(.-align-left, .-align-right) {
    text-align: center;
  }
}
</style>
