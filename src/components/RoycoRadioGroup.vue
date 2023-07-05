<script setup>
import RoycoRadio from './RoycoRadio.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue']);

const updateInput = ($event) => {
  emit('update:modelValue', $event);
};
</script>

<template>
  <div class="royco-radio-group">
    <RoycoRadio
      v-for="({ label, value, disabled }, index) in options"
      :label="label"
      :value="value"
      :disabled="props.disabled ? props.disabled : disabled"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="updateInput"
      :key="index"></RoycoRadio>
  </div>
</template>

<style lang="scss" scoped>
.royco-radio-group {
  display: inline-flex;
  align-items: center;
  gap: 24px;
}
</style>
