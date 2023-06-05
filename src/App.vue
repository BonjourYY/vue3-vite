<script setup></script>

<template>
  <RouterLink :to="{ path: '/name' }">Go to UserName</RouterLink>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>

<style scoped></style>
