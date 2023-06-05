<script setup>
const response = await fetch('/data', { method: 'GET' });
const result = await response.json();
console.log(result);
</script>

<template>
  <p>JackFan</p>
  <img src="/favicon.ico" alt="icon" />
</template>

<style lang="scss" scoped></style>
