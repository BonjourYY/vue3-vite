<script setup>
defineProps({ item: { type: Array, default: () => [] } });

const increment = () => ({ name: "JackFan" });
</script>

<template>
  <button @click="increment()"></button>
</template>

<style lang="scss" scoped></style>
