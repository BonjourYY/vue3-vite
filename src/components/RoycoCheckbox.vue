/** checkbox component */
<script setup>
defineProps({
  modelValue: Boolean,
  value: {
    type: String,
    default: () => "",
  },
  label: {
    type: String,
    default: () => "",
  },
  checked: {
    type: Boolean,
    default: () => false,
  },
  id: {
    type: String,
    default: () => "",
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <span class="royco-checkbox">
    <input
      :disabled="disabled"
      type="checkbox"
      class="checkbox-input"
      :id="label"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="checkbox-label" :for="label">{{ label }}</label>
  </span>
</template>

<style lang="scss" scoped>
.royco-checkbox {
  position: relative;
  display: inline-block;
  // 扩散的阴影
  > .checkbox-input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgb(0, 79, 255);
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
    // &:checked,
    // &:indeterminate {
    //   background-color: $primary-500;
    // }
    // // 选中状态
    // &:checked + #checkbox-label,
    // &:indeterminate + #checkbox-label {
    //   &::before {
    //     border: none;
    //     background-color: $primary-500;
    //   }
    //   &::after {
    //     border-color: $basics-white;
    //   }
    // }
    // // 未知状态
    // &:indeterminate + #checkbox-label {
    //   &::after {
    //     border-left: none;
    //     transform: translate(4px, 3px);
    //   }
    // }
    // &:focus {
    //   opacity: 0.12;
    // }
    // &:active {
    //   opacity: 1;
    //   transform: scale(0);
    //   transition: transform 0s, opacity 0s;
    // }
    // &:disabled {
    //   opacity: 0 !important;
    // }
    // &:disabled + #checkbox-label {
    //   color: $gray-200;
    //   cursor: initial;
    // }
    // &:disabled + #checkbox-label {
    //   &::before {
    //     border-color: currentColor;
    //   }
    // }
    // &:disabled:checked + #checkbox-label,
    // &:disabled:indeterminate + #checkbox-label {
    //   &::before {
    //     background-color: $gray-300;
    //   }
    // }
  }

  > .checkbox-label {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    // Box
    &::before {
      content: "";
      display: inline-block;
      box-sizing: border-box;
      margin: 3px 11px 3px 1px;
      border: 2px solid;
      background-color: $basics-white;
      border-color: $gray-600;
      border-radius: 2px;
      width: 18px;
      height: 18px;
      vertical-align: top;
      transition: border-color 0.2s, background-color 0.2s;
    }
    // Checkmark
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: 1px;
      width: 10px;
      height: 5px;
      border: 2px solid transparent;
      border-right: none;
      border-top: none;
      transform: translate(3px, 4px) rotate(-45deg);
    }
  }

  // Default & Checked
  > .checkbox-input:checked + .checkbox-label::before {
    border: none;
    background-color: $primary-500;
  }
  > .checkbox-input:checked + .checkbox-label::after {
    border-color: $basics-white;
  }

  &:hover {
    // Hover
    > .checkbox-input {
      opacity: 0.04;
    }
    // Hover & Checked 不需要写
  }

  & {
    // Active
    // 设置涟漪动效（没有Focus的情况下）
    > .checkbox-input:active {
      opacity: 1;
      transform: scale(0);
      transition: transform 0s, opacity 0s;
    }
  }

  & {
    // Focus
    // 设置涟漪动效（有Focus的情况下）
    > .checkbox-input:focus:active {
      opacity: 1;
      transform: scale(0);
      transition: transform 0s, opacity 0s;
    }
    > .checkbox-input:focus {
      opacity: 0.08;
    }
    > .checkbox-input:focus + .checkbox-label::before {
      border-color: $primary-500;
    }
    // Focus & Checked 不需要写
  }

  & {
    // Disabled
    > .checkbox-input:disabled {
      & {
        opacity: 0;
      }
      & + .checkbox-label::before {
        border-color: $gray-200;
      }
    }
    // Disabled & Checked
    > .checkbox-input:disabled:checked {
      & {
        opacity: 0;
      }
      & + .checkbox-label::before {
        background-color: $gray-300;
      }
    }
  }
}
</style>
