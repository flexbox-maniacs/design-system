<script setup lang="ts">
import { ref, type Ref } from "vue";

interface CardProps {
  bodyAlign?: string;
  href?: string;
  plain?: boolean;
  subtitle?: string;
  title?: string;
  titleAlign?: string;
  to?: string | object;
}

const props = defineProps<CardProps>();

const cardComponent: Ref<string> = ref("");

if (props.href) {
  cardComponent.value = "a";
}

if (props.to) {
  cardComponent.value = "RouterLink";
} else cardComponent.value = "div";

const cardClass: Ref<Array<string>> = ref([]);

if (props.plain) {
  cardClass.value.push("-plain");
}

const cardTitleClass: Ref<Array<string>> = ref([]);

if (
  props.titleAlign === "left" ||
  props.titleAlign === "center" ||
  props.titleAlign === "right"
) {
  cardTitleClass.value.push(`-align-${props.titleAlign}`);
}

const cardBodyClass: Ref<Array<string>> = ref([]);

if (
  props.bodyAlign === "left" ||
  props.bodyAlign === "center" ||
  props.bodyAlign === "right"
) {
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
    <div class="card-head">
      <h3
        v-if="title"
        class="card-title"
        :class="cardTitleClass"
        v-text="title"
      />
      <p v-if="subtitle || $slots.subtitle" class="card-subtitle">
        <slot name="subtitle" v-if="$slots.subtitle" />
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
