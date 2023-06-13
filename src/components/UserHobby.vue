<script setup>
import Page from '@/components/Pagination copy.vue';
const changePageHandler = (currentPage) => {
  console.log(currentPage);
};
</script>

<template>
  <p>Movie,Swim</p>
  <Page @change-page="changePageHandler" :total="12" :page-size="2" />
</template>

<style lang="scss" scoped></style>
