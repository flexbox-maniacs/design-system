<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Container, Flexbox } from "..";
import ComponentShowcase from "@/components/ComponentShowcase.vue";
import readme from "../readme.json";

const currentTitle: Ref<string> = ref("");

const selectedProp: Ref<any> = ref([]);

const componentChanged: Ref<boolean> = ref(true);

function changeTitle(g: number, c: number) {
  if (currentTitle.value != readme[g].components[c].component) {
    currentTitle.value = readme[g].components[c].component;
    componentChanged.value = true;
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
          :component-changed="componentChanged"
          :title="currentTitle"
          :props="selectedProp"
          @prop-changed="componentChanged = false"
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
