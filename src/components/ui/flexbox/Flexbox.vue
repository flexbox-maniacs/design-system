``
<script setup lang="ts">
import { ref, type Ref } from "vue";

interface FlexboxProps {
  align?: string;
  class?: string;
  column?: boolean;
  gap?: string;
  justify?: string;
  wrap?: boolean;
}

const props = defineProps<FlexboxProps>();

const flexboxClass: Ref<Array<string>> = ref(["flexbox"]);

if (
  props.align === "baseline" ||
  props.align === "center" ||
  props.align === "end" ||
  props.align === "start" ||
  props.align === "stretch"
) {
  flexboxClass.value.push(`-align-${props.align}`);
}

if (props.class) {
  flexboxClass.value.unshift(props.class);
}

if (props.column) {
  flexboxClass.value.push("-column");
}

if (
  props.justify === "around" ||
  props.justify === "between" ||
  props.justify === "center" ||
  props.justify === "evenly"
) {
  flexboxClass.value.push(`-justify-${props.justify}`);
}

if (props.wrap) {
  flexboxClass.value.push("-wrap");
}

const flexboxStyle: Ref<Array<string>> = ref([]);

if (props.gap) {
  flexboxStyle.value.push("--flex-gap:" + props.gap);
}
</script>

<template>
  <div :class="flexboxClass" :style="flexboxStyle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/scss/breakpoints.scss";

.flexbox {
  align-items: var(--flex-align);
  display: flex;
  gap: var(--flex-gap, 1rem);
  justify-content: var(--flex-justify);

  &.-align {
    &-baseline {
      --flex-align: baseline;
    }

    &-center {
      --flex-align: center;
    }

    &-end {
      --flex-align: flex-end;
    }

    &-start {
      --flex-align: flex-start;
    }

    &-stretch {
      --flex-align: stretch;
    }
  }

  &.-column {
    @include min($desktop) {
      flex-direction: column;
    }
  }

  &.-justify {
    &-around {
      --flex-justify: space-around;
    }

    &-between {
      --flex-justify: space-between;
    }

    &-center {
      --flex-justify: center;
    }

    &-end {
      --flex-justify: flex-end;
    }

    &-evenly {
      --flex-justify: space-evenly;
    }

    &-start {
      --flex-justify: flex-start;
    }
  }

  :not(.-wrap) {
    flex-wrap: nowrap;
  }

  &.-wrap {
    flex-wrap: wrap;
  }
}
</style>
