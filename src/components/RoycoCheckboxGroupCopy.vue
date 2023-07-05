<script setup>
import { ref } from 'vue';
import RoycoCheckboxCopy from './RoycoCheckboxCopy.vue';

defineOptions({
  inheritAttrs: true,
});

const props = defineProps({
  options: {
    type: Array,
  },
  name: {
    type: String,
  },
  modelValue: {
    type: Array,
  },
});

const emit = defineEmits(['update:modelValue']);

const result = ref([]);
const updateInput = ($event) => {
  console.dir($event.target);
  if ($event.target.checked) {
    result.value.push($event.target.value);
  } else {
    // Find Target Index
    const index = result.value.indexOf($event.target.value);
    // Remove Target
    if (index !== -1) {
      // 删除单个元素
      result.value.splice(index, 1);
    }
  }
  console.log(result.value);
  emit('update:modelValue', result.value);
};
</script>

<template>
  <div class="royco-checkboxgroup">
    <RoycoCheckboxCopy v-for="({ label, value }, index) in options" :label="label" :value="value" name="fruit" :id="value" @update:modelValue="updateInput"></RoycoCheckboxCopy>
  </div>
</template>

<style lang="scss" scoped></style>
