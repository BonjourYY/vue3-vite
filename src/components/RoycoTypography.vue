<script setup>
const props = defineProps({
  variant: {
    type: String,
  },
  weight: {
    type: Number,
  },
});
</script>

<template>
  <h1 class="h1" v-if="variant === 'h1'">
    <slot name="default"></slot>
  </h1>
  <h2 class="h2" v-if="variant === 'h2'">
    <slot name="default"></slot>
  </h2>
  <h3 class="h3" v-if="variant === 'h3'">
    <slot name="default"></slot>
  </h3>
  <h4 class="h4" v-if="variant === 'h4'">
    <slot name="default"></slot>
  </h4>
  <h5 class="h5" v-if="variant === 'h5'">
    <slot name="default"></slot>
  </h5>
  <h6 class="h6" v-if="variant === 'h6'">
    <slot name="default"></slot>
  </h6>
  <p class="subtitle1" v-if="variant === 'subtitle1'">
    <slot name="default"></slot>
  </p>
  <p class="subtitle2" v-if="variant === 'subtitle2'">
    <slot name="default"></slot>
  </p>
  <p class="body1" v-if="variant === 'body1'">
    <slot name="default"></slot>
  </p>
  <p class="body2" v-if="variant === 'body2'">
    <slot name="default"></slot>
  </p>
  <span class="button" v-if="variant === 'button'">
    <slot name="default"></slot>
  </span>
  <span class="assistive1" v-if="variant === 'assistive1'">
    <slot name="default"></slot>
  </span>
  <span class="assistive2" v-if="variant === 'assistive2'">
    <slot name="default"></slot>
  </span>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Inter:wght@500;600;700&display=swap');
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: 'Inter';
  font-weight: v-bind('props.weight');
}

.subtitle1,
.subtitle2,
.body1,
.body2,
.button,
.assistive1,
.assistive2 {
  font-family: 'Heebo';
  font-weight: v-bind('props.weight');
}

.h1 {
  font-size: 93px;
  line-height: 140%;
  letter-spacing: 1.5px;
}

.h2 {
  font-size: 58px;
  line-height: 140%;
  letter-spacing: -0.5px;
}

.h3 {
  font-size: 46px;
  line-height: 150%;
}

.h4 {
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.25px;
}

.h5 {
  font-size: 24px;
  line-height: 150%;
}

.h6 {
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.15px;
}

.subtitle1 {
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
}

.subtitle2 {
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.1px;
}

.subtitle2 {
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.1px;
}

.body1 {
  font-size: 16px;
  line-height: 150%;
}

.body1 {
  font-size: 14px;
  line-height: 150%;
}

.button {
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 2px;
}

.assistive1 {
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.35px;
}

.assistive2 {
  font-size: 10px;
  line-height: 150%;
  letter-spacing: 0.35px;
}
</style>
