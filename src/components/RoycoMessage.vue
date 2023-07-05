<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import RoycoTypography from "./RoycoTypography.vue";

defineProps({
  type: {
    type: String,
    default: () => "success",
    validator: (value) =>
      ["success", "hint", "warning", "error"].includes(value),
  },
});

const show = ref(true);

const closeMessage = () => {
  show.value = false;
};

// onMounted(() => {
//   setTimeout(() => {
//     props.show = false;
//   }, 3000);
// });
</script>

<template>
  <div :class="['royco-message', type]" v-if="show">
    <div class="body">
      <slot name="title"
        ><RoycoTypography variant="body2" :weight="700"
          >Message</RoycoTypography
        ></slot
      >
      <slot name="content"
        ><RoycoTypography variant="body2" :weight="400"
          >Here goes the warning message.</RoycoTypography
        ></slot
      >
      <XMarkIcon class="close-icon" @click="closeMessage"></XMarkIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-message {
  border-radius: 8px;
  padding: 16px;
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  z-index: 999;
  .body {
    display: flex;
    flex-direction: column;
    border-left: 5px solid;
    border-radius: 2px;
    padding-left: 8px;
    position: relative;
    .close-icon {
      width: 18px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
  }
  &.warning {
    background-color: $warning-50;
    .body {
      border-color: $warning-500;
    }
  }
  &.hint {
    background-color: $primary-50;
    .body {
      border-color: $primary-500;
    }
  }
  &.error {
    background-color: $error-50;
    .body {
      border-color: $error-500;
    }
  }
  &.success {
    background-color: $success-50;
    .body {
      border-color: $success-500;
    }
  }
}
</style>
