<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  label: {
    type: String,
    default: () => "",
  },
  value: {
    type: [String, Number],
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: () => "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateInput = ($event) => {
  emit("update:modelValue", $event.target.value);
};
</script>

<template>
  <div class="royco-radio">
    <input
      class="royco-radio__input"
      type="radio"
      :id="value"
      :value="value"
      :checked="modelValue === value"
      v-bind="$attrs"
      @change="updateInput"
    />
    <label class="royco-radio__label" :for="value">
      <span class="royco-radio__custom"></span>
      <span> {{ label }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.royco-radio {
  display: inline-block;
  position: relative;
  .royco-radio__input {
    position: absolute;
    width: 0;
    height: 0;
    // Hover
    &:hover {
      & + .royco-radio__label {
        .royco-radio__custom {
          box-shadow: 0px 0px 0px 11px rgba(0, 79, 255, 0.05);
        }
      }
    }
    // Focus
    &:focus {
      & + .royco-radio__label {
        .royco-radio__custom {
          border-color: $primary-500;
          box-shadow: 0px 0px 0px 11px rgba(0, 79, 255, 0.08);
        }
      }
    }
    // Disabled
    &:disabled {
      & + .royco-radio__label {
        .royco-radio__custom {
          border-color: $gray-300 !important;
          box-shadow: none;
          &::before {
            background-color: $gray-300;
          }
        }
      }
    }
    &:checked {
      & + .royco-radio__label {
        .royco-radio__custom {
          border-color: $primary-500;
          &::before {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    }
  }

  // Button & Label
  .royco-radio__label {
    font-size: 18px;
    cursor: pointer;
    // Button
    .royco-radio__custom {
      vertical-align: middle;
      display: inline-block;
      box-sizing: border-box;
      margin-right: 8px;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      border: 2px solid;
      border-color: $gray-600;
      transition: all 0.3s ease;
      position: relative;
      // Button Inner
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $primary-500;
        transform: translate(-50%, -50%) scale(0);
      }
    }
  }
}
</style>
