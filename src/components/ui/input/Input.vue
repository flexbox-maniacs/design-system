``
<script setup lang="ts">
import { ref, type Ref } from "vue";

interface InputProps {
  type: string;
  value?: string;
  name?: string;
  src?: string;
}

const props = defineProps<InputProps>();

const inputClass: Ref<Array<string>> = ref([]);

if (props.type) {
  inputClass.value.push(`-${props.type}`);
}
</script>

<template>
  <input
    :type="type"
    :value="value"
    :name="name"
    :src="src"
    class="input"
    :class="inputClass"
  />
  <!-- <input type="button" value="" />
  <input type="checkbox" name="" id="" />
  <input type="color" name="" id="" />
  <input type="date" name="" id="" />
  <input type="datetime" name="" id="" />
  <input type="datetime-local" name="" id="" />
  <input type="email" name="" id="" />
  <input type="file" name="" id="" />
  <input type="image" src="" alt="" />
  <input type="month" name="" id="" />
  <input type="number" name="" id="" />
  <input type="password" name="" id="" />
  <input type="radio" name="" id="" />
  <input type="range" name="" id="" />
  <input type="reset" value="" />
  <input type="submit" value="" />
  <input type="search" name="" id="" />
  <input type="text" name="" id="" />
  <input type="tel" name="" id="" />
  <input type="time" name="" id="" />
  <input type="url" name="" id="" />
  <input type="week" name="" id="" /> -->
</template>

<style scoped lang="scss">
input {
  font-family: inherit;
  background-color: var(--contrast-1);
  border: unset;
  padding: 0.75em;
}
</style>
