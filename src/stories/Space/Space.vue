<script setup>
import { computed } from "vue";

const props = defineProps({
  fill: {
    type: Boolean,
    default: true,
  },
  // 排列方式
  direction: {
    type: String,
    default: "horizontal",
    validator: (value) => ["horizontal", "vertical"].includes(value),
  },
  // 是否换行
  wrap: {
    type: Boolean,
    default: false,
  },
  // 对齐方式
  align: {
    type: String,
    default: "start",
    validator: (value) =>
      ["start", "center", "end", "baseline"].includes(value),
  },
  // 间距大小
  space: {
    type: Number,
    default: 8,
  },
});

const display = computed(() => (props.fill ? "flex" : "inline-flex"));

const flexDirection = computed(() =>
  props.direction === "vertical" ? "column" : "row"
);

const alignItems = computed(() => {
  const alignMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
  };
  return alignMap[props.align] || "flex-start";
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
  justify-content: v-bind("alignItems");
  gap: v-bind("gap");
}
</style>
