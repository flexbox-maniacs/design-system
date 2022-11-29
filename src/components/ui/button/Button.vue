<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { Icon, Link } from "../../..";

interface ButtonProps {
  brand?: boolean;
  color?: string;
  endingIcon?: string;
  fill?: boolean;
  href?: string;
  icon?: string;
  label?: string;
  startingIcon?: string;
  submit?: boolean;
  to?: string | object;
  uppercase?: boolean;
  var?: string;
}

const props = defineProps<ButtonProps>();

const btnComponent = computed<string | object>(() => {
  if (props.href) {
    return Link;
  }

  if (props.to) {
    return "RouterLink";
  } else return "button";
});

const btnClass: Ref<Array<string>> = ref([]);

if (props.fill) {
  btnClass.value.push("-fill");
}

if (props.uppercase) {
  btnClass.value.push("-uppercase");
}

const btnStyle: Ref<Array<string>> = ref([]);

if (props.color) {
  btnStyle.value.push(`color: ${props.color}`);
}

if (props.var) {
  btnStyle.value.push(`var(--${props.var})`);
}
</script>

<template>
  <component
    :is="btnComponent"
    class="btn"
    :class="btnClass"
    :href="href"
    :style="btnStyle"
    :to="to"
    :type="submit ? 'submit' : null"
  >
    <span class="btn-label">
      <Icon
        v-if="icon || startingIcon"
        :name="icon || startingIcon"
        :brand="brand"
      />
      {{ label }}
      <Icon v-if="endingIcon" :name="endingIcon" />
    </span>
  </component>
</template>

<style lang="scss">
.btn {
  display: inline-flex;
  background-color: unset;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border: {
    color: currentColor;
    style: solid;
    width: 1px;
    radius: 6px;
  }
  padding: {
    bottom: 0.5em;
    left: 1em;
    right: 1em;
    top: 0.5em;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  &:not(.-fill):hover {
    background-color: currentColor;

    .btn-label,
    .icon {
      color: var(--input-hover, #fff);
    }
  }

  &.-fill {
    background-color: currentColor;

    &:not(:disabled):hover {
      opacity: 0.8;
    }

    .btn-label,
    .icon {
      color: var(--input-hover);
    }
  }

  &.-uppercase {
    text-transform: uppercase;
  }

  .btn-label {
    align-items: center;
    column-gap: 0.15em;
    display: inline-flex;
  }

  .icon {
    font-size: 1.2em;
  }
}
</style>
