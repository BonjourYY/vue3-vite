<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate(() => {
  console.log('beforeRouteUpdate');
});
</script>

<template>
  <p>Login Page</p>
</template>

<style lang="scss" scoped>
p {
  font-size: 20px;
  color: yellowgreen;
}
</style>
