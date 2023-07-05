<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  outlined: {
    type: Boolean,
    default: () => false,
  },
  leftIcon: Object,
  rightIcon: Object,
});
</script>

<template>
  <div :class="{ chip: true, outlined: outlined }">
    <span class="label">
      <component
        :is="leftIcon"
        :style="{
          width: '1em',
        }"
      ></component>
      {{ label }}
      <component
        :is="rightIcon"
        :style="{
          width: '1em',
        }"
      ></component>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: inline-flex;
  align-items: center;
  background-color: $gray-300;
  border-radius: 100px;
  height: 32px;
  vertical-align: middle;
  .label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
    color: $gray-900;
    padding: 0 12px;
  }
}

.chip.outlined {
  background: none;
  border: 1px solid $gray-300;
}
</style>
