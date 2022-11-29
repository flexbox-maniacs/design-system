<script setup lang="ts">
import { Container, Flexbox } from "..";
import readme from "../readme.json";
import ComponentShowcase from "@/components/ComponentShowcase.vue";
import { ref, type Ref } from "vue";

const currentTitle: Ref<string> = ref("");

const selectedProp: Ref<any> = ref([]);

function changeTitle(g: number, c: number) {
  if (currentTitle.value != readme[g].components[c].component) {
    currentTitle.value = readme[g].components[c].component;
  } else currentTitle.value = "";

  selectedProp.value = readme[g].components[c].props;
}
</script>

<template>
  <div id="read-me">
    <Container>
      <section>
        <Flexbox justify="around">
          <div v-for="(group, g) in readme">
            <h3 class="group" v-text="group.type" />
            <div v-for="(component, c) in group.components" class="component">
              <h4 @click="changeTitle(g, c)">
                {{ component.component }}
                <span v-if="component.wip">(WIP)</span>
              </h4>
            </div>
          </div>
        </Flexbox>
      </section>
      <section>
        <ComponentShowcase
          v-show="currentTitle"
          :title="currentTitle"
          :props="selectedProp"
        />
      </section>
    </Container>
  </div>
</template>

<style scoped lang="scss">
#read-me {
  .group {
    margin-bottom: calc(var(--spacing) / 10);
  }
  .component {
    cursor: pointer;
    margin-top: calc(var(--spacing) / 24);
  }
}
</style>
