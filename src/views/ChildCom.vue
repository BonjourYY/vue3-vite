<!-- 组件 Props 和 组件 自定义事件 -->
<script setup>
let props = defineProps(['title']);
let emit = defineEmits(['enlarge-text']);
</script>

<template>
  <p class="text">我是子组件元素</p>
</template>

<style lang="scss" scoped></style>
