<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import { Header, Button, Stack } from ".";

const icon: Ref<string | undefined> = ref("");

function changeTheme() {
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
    icon.value = "dark_mode";
  } else localStorage.setItem("theme", "dark"), (icon.value = "light_mode");

  document.documentElement.setAttribute(
    "theme",
    localStorage.getItem("theme") || "{}"
  );
}

if (localStorage.getItem("theme") == "dark") {
  icon.value = "light_mode";
} else localStorage.setItem("theme", "light"), (icon.value = "dark_mode");

document.documentElement.setAttribute(
  "theme",
  localStorage.getItem("theme") || "{}"
);

const router = useRoute();

const dsTitle = computed<string>(() => {
  if (router.name == "readme") {
    return "design system readme";
  } else return "design system";
});
</script>
<template>
  <Header align="center" vertical>
    <Stack gap="1rem">
      <Button
        v-if="$route.name === 'readme'"
        icon="house"
        var="text-color"
        to="/"
      />
      <Button var="text-color" :icon="icon" @click="changeTheme" />
    </Stack>

    <div>
      <h2 v-text="dsTitle" />
    </div>
  </Header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@theme";
</style>
