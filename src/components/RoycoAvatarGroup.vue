<script setup>
import { onMounted, ref, provide } from "vue";

const props = defineProps({
  // 自定义大小
  size: {
    type: String,
  },
  // 最大显示个数
  max: {
    type: Number,
    default: () => 2,
  },
});

// 通过父组件统一控制所有祖先组件的size属性
provide("size", props.size);

const overstep = ref(0);
const roycoAvatarGroup = ref(null);

onMounted(() => {
  // 获取 roycoAvatarGroup DOM 子元素数量
  const avatarsArray = Array.from(roycoAvatarGroup.value.children);
  // 根据数量计算得出 overstep 的值
  avatarsArray.forEach((child, index) => {
    if (index >= props.max) {
      child.style.display = "none";
      overstep.value += 1;
    }
  });
});
</script>

<template>
  <div class="royco-avatar-group" ref="roycoAvatarGroup">
    <slot></slot>
    <div
      class="more-avatar"
      :style="{ display: overstep > 1 ? 'flex' : 'none' }">
      <span> +{{ overstep - 1 }} </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-avatar-group {
  display: flex;
  align-items: center;
  font-size: v-bind("props.size");
  ::v-slotted(.royco-avatar) {
    border: 2px solid #fff;
  }
  ::v-slotted(.royco-avatar:not(:first-child)) {
    margin-left: -10px;
  }
  .more-avatar {
    justify-content: center;
    align-items: center;
    width: v-bind("props.size?props.size:'40px'");
    height: v-bind("props.size?props.size:'40px'");
    border-radius: 50%;
    margin-left: -10px;
    font-size: 0.5em;
    background-color: $gray-600;
    color: $basics-white;
    border: 2px solid #fff;
  }
}
</style>
