<script setup lang="ts">
import Flexbox from "../flexbox/Flexbox.vue";

interface StackProps {
  align?: string;
  column?: boolean;
  gap?: string;
  justify?: string;
}

defineProps<StackProps>();
</script>

<template>
  <Flexbox
    :align="align"
    :column="column"
    :gap="gap"
    :justify="justify"
    class="stack"
  >
    <slot />
  </Flexbox>
</template>

<style lang="scss">
@import "../../../assets/scss/breakpoints.scss";

.stack {
  --flex-align: var(--stack-align);
  --flex-justify: var(--stack-justify);
  --flex-gap: var(--stack-gap);

  --stack-gap: var(--spacing);

  &.-align {
    &-baseline,
    &-center,
    &-end,
    &-start,
    &-stretch {
      > * {
        align-items: var(--stack-align);
      }
    }
  }

  &.-justify {
    &-baseline,
    &-center,
    &-end,
    &-start,
    &-stretch {
      > * {
        justify-content: var(--stack-justify);
      }
    }
  }

  > * {
    align-items: var(--stack-align);
    display: flex;
    flex-basis: 100%;
    justify-content: var(--stack-justify);
  }
}
</style>
