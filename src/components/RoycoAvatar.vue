<script setup>
import { computed, inject, ref } from "vue";

const props = defineProps({
  // 自定义大小
  size: {
    type: String,
    default: () => "40px",
  },
  // 自定义背景色
  bgColor: {
    type: String,
    default: () => "#004FFF",
  },
  imgUrl: {
    type: String,
  },
  userName: {
    type: String,
    default: () => "S A",
  },
});

// 获取父组件
const nsize = inject("size");
const nowSize = ref(null);

if (nsize) {
  nowSize.value = nsize;
} else {
  nowSize.value = props.size;
}

/**
 * 根据 username 获取姓&名首字母
 * @param {*} username
 */
const getInitials = (username) => {
  const usernameParts = username.split(" ");
  const initials = usernameParts.map((e) => e.slice(0, 1).toUpperCase());
  if (initials.length > 3) return initials.slice(0, 3).join("");
  return initials.join("");
};

const initials = computed(() => getInitials(props.userName));
</script>

<template>
  <div class="royco-avatar">
    <img v-if="imgUrl" :src="imgUrl" class="img" />
    <span v-else class="user-name">{{ initials }}</span>
  </div>
</template>

<style lang="scss" scoped>
.royco-avatar {
  font-size: v-bind("nowSize");
  width: v-bind("nowSize");
  height: v-bind("nowSize");
  background-color: v-bind("props.bgColor");
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .image {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .user-name {
    font-size: 0.5em;
    color: $basics-white;
  }
}
</style>
