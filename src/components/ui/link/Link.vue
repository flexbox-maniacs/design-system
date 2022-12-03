<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Icon } from "../../..";

interface LinkProps {
  color?: string;
  href?: string;
  to?: string;
}

const props = defineProps<LinkProps>();

const linkComponent: Ref<string> = ref("");

if (props.href) {
  linkComponent.value = "a";
}

if (props.to) {
  linkComponent.value = "RouterLink";
}

const linkStyle: Ref<Array<string>> = ref([]);

if (props.color == "primary" || props.color == "secondary") {
  linkStyle.value.push("color: var(--" + props.color + ")");
}

if (props.color) {
  linkStyle.value.push("color:" + props.color);
}
</script>

<template>
  <component
    :is="linkComponent"
    :to="to"
    :href="href"
    class="link"
    :style="linkStyle"
  >
    <slot />
    <Icon v-if="href" name="open_in_new" class="link-new" />
  </component>
</template>

<style scoped lang="scss">
@import "./Link.scss";
</style>
