<script setup></script>

<template>
  <RouterLink :to="{ path: '/name' }">姓名</RouterLink>
  <br />
  <RouterLink :to="{ path: '/hobby' }">爱好</RouterLink>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>

<style scoped></style>
