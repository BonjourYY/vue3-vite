<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: () => null,
  },
  defaultChecked: {
    type: Boolean,
    default: () => false,
  },
  value: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  // 半选
  indeterminate: {
    type: Boolean,
    default: () => false,
  },
});

const emits = defineEmits(["update:modelValue", "change"]);

const check = ref();
const nowCheck = ref();

// 判断是否有modelValue
if (props.modelValue != null) {
  nowCheck.value = props.modelValue;
}

const emitValue = (e) => {
  emits("update:modelValue", e.target.checked);
  check.value = e.target.checked;
};

const change = () => {
  if (props.modelValue != null) {
    nowCheck.value = props.modelValue;
  } else {
    nowCheck.value = check.value;
  }
  emits("change", [nowCheck.value, props.value]);
};

// 监听父级点击
watch(props, () => {
  nowCheck.value = props.modelValue;
});
</script>

<template>
  <div :class="{ disabled: disabled }">
    <div class="royco-checkbox">
      <input
        type="checkbox"
        class="checkbox-ui"
        :checked="modelValue"
        :disabled="disabled"
        @input="emitValue"
        @change="change" />
      <!-- box -->
      <div
        class="ui-checkbox"
        :class="{
          checked: nowCheck && !indeterminate,
          indeterminate: nowCheck && indeterminate,
          unchecked: !nowCheck,
          disabled: disabled,
        }"></div>
      <!-- box -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  // input
  .checkbox-ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 1;
  }
  // box
  .ui-checkbox {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    border: 2px solid;
    transition: all 0.3s;
    margin-right: 8px;
    // box-shadow
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background-color: $primary-500;
      border-radius: 50%;
      z-index: -1;
      opacity: 0;
    }
    &.unchecked {
      border-color: $gray-600;
      background-color: $basics-white;
    }
    &.checked {
      background-color: $primary-500;
      border-color: $primary-500;
      &::before {
        content: "";
        position: absolute;
        top: 40%;
        left: 50%;
        width: 4px;
        height: 7px;
        border: 2px solid;
        border-color: $basics-white;
        border-left: none;
        border-top: none;
        opacity: 1;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
    &.indeterminate {
      background-color: $primary-500;
      border-color: $primary-500;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 1.5px;
        background-color: $basics-white;
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
    &.disabled.unchecked {
      border-color: $gray-200;
      background-color: $basics-white;
    }
    &.disabled.checked {
      border-color: $gray-300;
      background-color: $gray-300;
    }
    &.disabled.indeterminate {
      border-color: $gray-300;
      background-color: $gray-300;
    }
  }
}
// Actions

.royco-checkbox {
  cursor: pointer;
  // hover
  .checkbox-ui:hover {
    & + .ui-checkbox:not(.disabled) {
      &::after {
        opacity: 0.05;
      }
    }
  }

  // focus
  .checkbox-ui:focus {
    & + .ui-checkbox:not(.disabled) {
      &::after {
        opacity: 0.08;
      }
    }
  }
}
</style>
