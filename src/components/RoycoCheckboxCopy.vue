<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  label: {
    type: String,
    default: () => '',
  },
  modelValue: {
    type: Boolean,
    default: () => false,
  },
});

const emit = defineEmits(['update:modelValue']);

const updateInput = ($event) => {
  emit('update:modelValue', $event);
};
</script>

<template>
  <div class="royco-checkbox">
    <input v-bind="$attrs" :checked="modelValue" @change="updateInput" type="checkbox" />
    <label :for="$attrs.id">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped></style>
