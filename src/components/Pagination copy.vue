<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  // 数据总条数
  total: {
    type: Number,
    required: true,
    default: () => {
      return 80;
    },
  },
  // 每页数据条数
  pageSize: {
    type: Number,
    required: true,
    default: () => {
      return 10;
    },
  },
});

const emits = defineEmits(['changePage']);

// 动态计算总页数
const pages = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});

console.log(pages.value);

const currentPage = ref(4);

const list = computed(() => {
  const result = [];
  // 当总页数小于等于5
  if (pages.value <= 5) {
    for (let i = 1; i <= pages.value; i++) {
      result.push(i);
    }
  } else if (currentPage.value <= 2) {
    // 当前页处于前两位，展示前5个页码
    for (let i = 1; i <= 5; i++) {
      result.push(i);
    }
  } else if (currentPage.value >= pages.value - 1) {
    // 当前页处于后两位，展示后5个页码
    for (let i = pages.value - 4; i <= pages.value; i++) {
      result.push(i);
    }
  } else {
    // 当前页处于中间位置，以中间位置为中间点，展示左右两边
    for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
      result.push(i);
    }
  }
  return result;
});

const changePage = (type) => {
  if (type === false) {
    if (currentPage.value === 1) {
      return;
    }
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  } else if (type === true) {
    if (currentPage.value === pages.value) {
      return;
    }
    if (currentPage.value < pages.value) {
      currentPage.value += 1;
    }
  } else {
    currentPage.value = type;
  }
  emits('changePage', currentPage.value);
};

console.log(list.value);
</script>

<template>
  <div class="pagination">
    <span href="" @click="changePage(false)">上一页</span>
    <span>...</span>
    <span href="" :class="{ active: currentPage === item }" @click="changePage(item)" v-for="(item, index) in list" :key="index">{{ item }}</span>
    <span>...</span>
    <span href="" :class="{ disabled: currentPage === pages }" @click="changePage(true)">下一页</span>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  > span {
    padding: 5px;
  }
  > span.active {
    color: red;
  }
  > span.disabled {
    cursor: not-allowed;
    opacity: 0.4;
    &:hover {
      color: #333;
    }
  }
}
</style>
