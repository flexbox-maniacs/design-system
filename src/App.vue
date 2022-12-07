<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import { Header, Button, Stack } from ".";
import { changeTheme, getBrowserTheme } from "@scripts";

const icon: Ref<string | undefined> = ref("");

const router = useRoute();

function themeHandler() {
  changeTheme;
  icon.value = changeTheme().icon;
}

onMounted(() => {
  getBrowserTheme;
  icon.value = getBrowserTheme().icon;
});

const dsTitle = computed<string>(() => {
  if (router.name == "readme") {
    return "design system readme";
  } else return "design system";
});
</script>
<template>
  <Header align="center" vertical>
    <Stack>
      <Button
        v-if="$route.name !== 'playground'"
        icon="dashboard"
        var="text-color"
        :to="{ name: 'playground' }"
      />
      <Button
        v-if="$route.name !== 'home'"
        icon="house"
        var="text-color"
        :to="{ name: 'home' }"
      />
      <Button var="text-color" :icon="icon" @click="themeHandler" />
    </Stack>

    <div>
      <h1 v-text="dsTitle" />
    </div>
  </Header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@theme";
</style>
