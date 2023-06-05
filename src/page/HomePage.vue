<script setup></script>

<template>
  <button @click="$router.replace({ path: '/name' })">Click to Name</button>
  <button @click="$router.replace({ path: '/login/1' })">Click to Login</button>
  <RouterView></RouterView>
  <RouterView name="age"></RouterView>
</template>

<style scoped>
.slide-left-enter-from {
  transform: translateX(100px);
}
.slide-left-leave-to {
  transform: translateX(-100px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter-from {
  transform: translateX(-100px);
}
.slide-right-leave-to {
  transform: translateX(100px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-out;
}
</style>
