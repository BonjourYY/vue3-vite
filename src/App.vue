<script setup>
import { ref } from "vue";
import RoycoCheckboxGroup from "./components/RoycoCheckboxGroup.vue";
import RoycoCheckbox from "./components/RoycoCheckbox.vue";

const options = ref([
  { value: "apple", label: "苹果", checked: true },
  { value: "banana", label: "香蕉", checked: false },
]);
const result = ref(["apple"]);
const result1 = ref(false);
</script>

<template>
  <RoycoCheckboxGroup :options="options" v-model="result"></RoycoCheckboxGroup>
  <RoycoCheckbox v-model="result1"></RoycoCheckbox>
  {{ result }}
  {{ result1 }}
</template>

<style scoped></style>
