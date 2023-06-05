<script setup>
const response = await fetch('/data', { method: 'GET' });
const result = await response.json();
console.log(result);
</script>

<template>
  <div class="body">
    <div class="about">
      <p class="red">我是谁</p>
    </div>
  </div>
  <img src="../assets/image/bmw.png" alt="" />
  <img src="/src/assets/image/bmw.png" alt="" />
  <img src="/favicon.ico" alt="" />
</template>

<style lang="scss" scoped></style>
