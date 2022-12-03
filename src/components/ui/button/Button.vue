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
@import "./Button.scss";
</style>
