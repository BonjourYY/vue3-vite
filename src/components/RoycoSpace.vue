<script setup>
import { computed } from "vue";

const props = defineProps({
  fill: {
    type: Boolean,
    default: () => true,
  },
  // 排列方式
  direction: {
    type: String,
    default: () => "horizontal",
    validator: (value) => ["horizontal", "vertical"].includes(value),
  },
  // 是否换行
  wrap: {
    type: Boolean,
    default: () => false,
  },
  // 对齐方式
  align: {
    type: String,
    default: () => "start",
    validator: (value) =>
      ["start", "center", "end", "baseline"].includes(value),
  },
  // 间距大小
  space: {
    type: Number,
    default: () => 8,
  },
});

const display = computed(() => (props.fill ? "flex" : "inline-flex"));

const flexDirection = computed(() => {
  switch (props.direction) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      return "horizontal";
  }
});

const alignItems = computed(() => {
  switch (props.align) {
    case "satrt":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "baseline":
      return "baseline";
    default:
      return "flex-start";
  }
});

const flexWrap = computed(() => (props.wrap ? "wrap" : "nowrap"));

const gap = computed(() => `${props.space}px`);
</script>

<template>
  <div class="royco-space">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.royco-space {
  display: v-bind("display");
  flex-direction: v-bind("flexDirection");
  flex-wrap: v-bind("flexWrap");
  align-items: v-bind("alignItems");
  gap: v-bind("gap");
}
</style>
