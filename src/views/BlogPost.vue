<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
});
const emit = defineEmits(['update:title', 'update:name']);
</script>

<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
</template>

<style lang="scss" scoped></style>
