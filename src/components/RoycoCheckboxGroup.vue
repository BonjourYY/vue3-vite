<script setup>
import { ref, computed, onMounted, watch } from "vue";
import RoycoSpace from "./RoycoSpace.vue";
import RoycoCheckbox from "./RoycoCheckbox.vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  // checkbox list
  options: {
    type: Array,
  },
  defaultValue: {
    type: Array,
  },
});

const emits = defineEmits(["update:modelValue"]);

const selectedValues = ref([]);

onMounted(() => {
  // 初始化选中的值
  // options 中 选项 checked 为 true 的列表项的 value 值
  const array1 = props.options
    .filter((item) => item.checked === true)
    .map((item) => item.value);
  // v-model 绑定的值
  const array2 = props.modelValue;
  selectedValues.value = Array.from(new Set([...array1, ...array2]));
  emits("update:modelValue", selectedValues.value);
});

// 选中状态发生变更时
const checkboxChangeHandler = ({ checked, value }) => {
  if (checked) {
    selectedValues.value.push(value);
  } else {
    selectedValues.value = selectedValues.value.filter(
      (item) => item !== value
    );
  }
  emits("update:modelValue", selectedValues.value);
};

// 监听 options 和 modelValue 的变化
watch(
  () => [props.options, props.modelValue],
  ([options, modelValue]) => {
    const array1 = options
      .filter((item) => item.checked === true)
      .map((item) => item.value);
    const array2 = modelValue;
    selectedValues.value = Array.from(new Set([...array1, ...array2]));
    emits("update:modelValue", selectedValues.value);
  },
  { deep: true }
);

// 根据选中的值，算出需要渲染的列表
const selectedOptions = computed(() =>
  props.options.map((item) => ({
    ...item,
    checked: selectedValues.value.includes(item.value),
  }))
);
</script>

<template>
  <div class="royco-checkbox-group">
    <RoycoSpace>
      <RoycoCheckbox
        v-for="(item, index) in selectedOptions"
        v-model="item.checked"
        :value="item.value"
        :key="index"
        @change="checkboxChangeHandler"
        >{{ item.label }}</RoycoCheckbox
      >
    </RoycoSpace>
    {{ modelValue }}
    {{ selectedValues }}
  </div>
</template>

<style lang="scss" scoped></style>
