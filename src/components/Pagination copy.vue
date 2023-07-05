<script setup>
import { computed } from 'vue';

const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: true,
    default: () => 3,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});
// 循环开始的页码
const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons;
  }

  return props.currentPage - 1;
});

// 循环列表
const pages = computed(() => {
  const range = [];
  for (let i = startPage; i.value < array.length; index++) {
    const element = array[index];
  }
});
</script>

<template>
  <ul>
    <li>
      <button type="button">First</button>
    </li>
    <li>
      <button type="button">Previous</button>
    </li>
    <li>
      <button type="button">First</button>
    </li>
    <li>
      <button type="button">Next</button>
    </li>
    <li>
      <button type="button">Last</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
