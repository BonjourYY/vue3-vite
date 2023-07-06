<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: () => false,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputChange = (e) => {
  emit("update:modelValue", e.target.checked);
};
</script>

<template>
  <div class="royco-switch">
    <label class="switch">
      <input
        type="checkbox"
        class="checkbox"
        :disabled="disabled"
        :checked="modelValue"
        @change="inputChange" />
      <span></span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.royco-switch {
  display: inline-block;
  .switch {
    position: relative;
    .checkbox {
      appearance: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      z-index: -1;
      position: absolute;
      right: 6px;
      top: -8px;
      display: block;
      background-color: #fff;
      opacity: 0;
      transform: scale(1);
      pointer-events: none;
      transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
      &:checked {
        right: -10px;
        & + span:before {
          background-color: $primary-200;
        }
        & + span:after {
          transform: translateX(16px);
          background-color: $primary-500;
        }
      }
      &:hover {
        background-color: $primary-500;
        opacity: 0.05;
      }
      &:focus {
        background-color: $primary-500;
        opacity: 0.08;
      }
      &:disabled {
        opacity: 0;
        & + span:before {
          background-color: $gray-300;
        }
      }
      &:checked:disabled {
        & + span:after {
          background-color: $gray-500;
        }
      }
    }
    span {
      display: flow-root;
    }
    // 轨道
    span:before {
      content: "";
      display: inline-block;
      margin: 5px 0 5px 10px;
      border-radius: 7px;
      width: 36px;
      height: 14px;
      background-color: $gray-500;
      vertical-align: top;
      transition: background-color 0.2s, opacity 0.2s;
    }
    // 滑块
    span:after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      overflow: hidden;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      right: 16px;
      background-color: $basics-white;
      box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.12),
        0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s, transform 0.2s;
    }
  }
}
</style>
