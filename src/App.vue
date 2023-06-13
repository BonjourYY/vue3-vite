<script setup></script>

<template>
  <RouterLink :to="{ path: '/name' }">姓名v23</RouterLink>
  <br />
  <RouterLink :to="{ path: '/hobby' }">爱好v23</RouterLink>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>

<style scoped></style>
