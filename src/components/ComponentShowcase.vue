<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Card } from "..";

interface ComponentShowcaseProps {
  title: string;
  props: Array<any>;
}
const props = defineProps<ComponentShowcaseProps>();

const selectedProp: Ref<string> = ref("");

const propType: Ref<string> = ref("");

const propOptions: Ref<string> = ref("");

const propExplanation: Ref<string> = ref("");

const index: Ref<number> = ref(0);

function onClick(i: number) {
  index.value = i;

  selectedProp.value = props.props[i].prop;
  propType.value = props.props[i].type;
  propOptions.value = props.props[i].options;
  propExplanation.value = props.props[i].explanation;
}
</script>

<template>
  <div class="component-showcase">
    <Card :title="title">
      <template #subtitle>
        <ul class="prop-list">
          <li
            v-for="(prop, i) in props.props"
            class="prop"
            @click="onClick(i)"
            tabindex="0"
            v-text="prop.prop"
          />
        </ul>
      </template>
      <Card v-if="selectedProp" :title="`${selectedProp} (${propType})`" plain>
        <template #subtitle>
          <ul class="options-list">
            <li
              v-for="item in props.props[index].options"
              v-text="item"
              class="option"
            />
          </ul>
        </template>
        {{ propExplanation }}
      </Card>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.component-showcase {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2em;
  }

  .prop-list {
    list-style: none;
  }
  .prop {
    cursor: pointer;
    &::after,
    &:focus {
      border-radius: 1px;
      border-bottom: {
        width: 2px;
        style: solid;
      }
    }

    &:after {
      transform: scaleX(0);
      content: "";
      display: block;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    h4 {
      cursor: pointer;
    }
  }
  .options-list {
    li {
      display: contents;
    }
    li + li::before {
      content: "|";
    }
  }
}
</style>
