<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import Link from "../link/Link.vue";

interface CardProps {
  bodyAlign?: "left" | "center" | "right";
  href?: string;
  plain?: boolean;
  subtitle?: string;
  title?: string;
  titleAlign?: "left" | "center" | "right";
  to?: string | object;
}

const props = defineProps<CardProps>();

const cardComponent = computed(() => {
  if (props.href || props.to) {
    return Link;
  } else return "div";
});

const cardClass: Ref<Array<string>> = ref([]);

if (props.plain) {
  cardClass.value.push("-plain");
}

const cardTitleClass: Ref<Array<string>> = ref([]);

if (props.titleAlign) {
  cardTitleClass.value.push(`-align-${props.titleAlign}`);
}

const cardBodyClass: Ref<Array<string>> = ref([]);

if (props.bodyAlign) {
  cardBodyClass.value.push(`-align-${props.bodyAlign}`);
}
</script>

<template>
  <component
    :is="cardComponent"
    :to="to"
    :href="href"
    class="card"
    :class="cardClass"
  >
    <div v-if="title || subtitle" class="card-head">
      <h3
        v-if="title"
        class="card-title"
        :class="cardTitleClass"
        v-text="title"
      />
      <p v-if="subtitle || $slots.subtitle" class="card-subtitle">
        {{ subtitle }}
        <slot name="subtitle" />
      </p>
    </div>
    <div v-if="$slots.default" class="card-body" :class="cardBodyClass">
      <slot />
    </div>
  </component>
</template>

<style scoped lang="scss">
@import "./Card.scss";
</style>
