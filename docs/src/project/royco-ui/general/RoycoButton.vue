<script setup>
import RoycoTypography from "./RoycoTypography.vue";

defineProps({
  buttonText: {
    type: String,
    default: () => "BUTTON CTA",
  },
  type: {
    type: String,
    validator: (val) =>
      ["primary", "secondary", "basic", "delete", "link"].includes(val),
  },
  leftIcon: Object,
  rightIcon: Object,
  loading: Boolean,
});
</script>

<template>
  <button :class="[type, 'royco-button']">
    <!-- left icon-->
    <component
      :is="leftIcon"
      :style="{
        visibility: loading ? 'hidden' : '',
        width: '20px',
        marginRight: '8px',
      }"
    ></component>
    <!-- loding icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      v-if="loading"
      class="animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      :style="{ width: '20px', position: 'absolute' }"
    >
      <circle
        style="opacity: 0.25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        style="opacity: 0.75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2
         5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <RoycoTypography variant="button" :weight="500">
      <span :style="{ visibility: loading ? 'hidden' : '' }">{{
        buttonText
      }}</span>
    </RoycoTypography>
    <!-- right icon-->
    <component
      :is="rightIcon"
      :style="{
        visibility: loading ? 'hidden' : '',
        width: '20px',
        marginLeft: '8px',
      }"
    ></component>
  </button>
</template>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.royco-button {
  padding: 12px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .animate-spin {
    animation: spin 1s linear infinite;
  }
}

.royco-button.primary {
  color: $basics-white;
  background-color: $primary-500;
  border: 1px solid $primary-500;

  &:hover {
    background-color: $primary-400;
    border: 1px solid $primary-400;
  }

  &:focus {
    background-color: $primary-500;
    border: 2px solid $primary-200;
  }

  &:disabled {
    background-color: $gray-200;
    border: 1px solid $gray-200;
    color: $gray-400;
    cursor: not-allowed;
  }
}

.royco-button.secondary {
  color: $primary-500;
  border: 1px solid $primary-500;
  background-color: transparent;

  &:hover {
    background-color: $primary-400;
    border: 1px solid $primary-50;
  }

  &:focus {
    border: 2px solid $primary-200;
    background-color: transparent;
  }

  &:disabled {
    border: 1px solid $gray-200;
    color: $gray-400;
    background-color: transparent;
    cursor: not-allowed;
  }
}

.royco-button.basic {
  color: $primary-500;
  border: 1px solid transparent;
  background-color: transparent;

  &:hover {
    background-color: $primary-50;
    border: 1px solid transparent;
  }

  &:focus {
    border: 2px solid $primary-200;
    background-color: transparent;
  }

  &:disabled {
    border: 1px solid transparent;
    color: $gray-400;
    background-color: transparent;
    cursor: not-allowed;
  }
}

.royco-button.delete {
  color: $basics-white;
  border: 1px solid $error-500;
  background-color: $error-500;

  &:hover {
    border: 1px solid $error-400;
    background-color: $error-400;
  }

  &:focus {
    border: 2px solid $error-200;
    background-color: $error-500;
  }

  &:disabled {
    border: 1px solid $gray-200;
    color: $gray-400;
    background-color: $gray-200;
    cursor: not-allowed;
  }
}

.royco-button.link {
  letter-spacing: 0;
  padding: 0;
  border-radius: 0;
  color: $primary-500;
  border: 1px solid transparent;
  background-color: transparent;

  &:hover {
    color: $primary-400;
  }

  &:focus {
    color: $primary-600;
  }

  &:disabled {
    color: $gray-400;
    cursor: not-allowed;
  }
}
</style>
