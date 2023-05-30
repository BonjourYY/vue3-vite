<script setup></script>

<template>
  <button @click="$router.replace({ path: '/login/1' })">Click to Nav1</button>
  <button @click="$router.replace({ path: '/login/2' })">Click to Nav2</button>
  <RouterView></RouterView>
  <RouterView name="age"></RouterView>
</template>

<style scoped></style>
