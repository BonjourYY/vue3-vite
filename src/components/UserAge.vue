<script setup>
defineProps(['age']);
</script>

<template>
  <p>Age:{{ age }}</p>
</template>

<style lang="scss" scoped>
p {
  font-size: 20px;
  color: yellowgreen;
}
</style>
