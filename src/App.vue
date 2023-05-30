<script setup></script>

<template>
  <button @click="$router.replace({ path: '/user/age' })">Click to Nav</button>
  <RouterView></RouterView>
</template>

<style scoped></style>
