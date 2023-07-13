<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: null,
  },
  defaultChecked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 半选
  indeterminate: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue", "change"]);

const changeHandle = (e) => {
  emits("change", { checked: e.target.checked, value: props.value });
  emits("update:modelValue", e.target.checked);
};
</script>

<template>
  <div>
    <div class="royco-checkbox">
      <input
        type="checkbox"
        class="checkbox-input"
        :checked="modelValue"
        :disabled="disabled"
        @change="changeHandle" />
      <!-- box -->
      <div
        class="checkbox-box"
        :class="{
          checked: modelValue && !indeterminate,
          indeterminate: modelValue && indeterminate,
          unchecked: !modelValue,
          disabled: disabled,
        }"></div>
      <!-- box -->
      <div class="checkbox-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  // input
  .checkbox-input {
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
  .checkbox-box {
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
    &.disabled.checked,
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
  .checkbox-input:hover {
    & + .checkbox-box:not(.disabled) {
      &::after {
        opacity: 0.05;
      }
    }
  }

  // focus
  .checkbox-input:focus {
    & + .checkbox-box:not(.disabled) {
      &::after {
        opacity: 0.08;
      }
    }
  }
}
</style>
