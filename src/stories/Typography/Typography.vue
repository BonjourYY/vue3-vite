<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "body1",
  },
  weight: {
    type: Number,
    default: 400,
  },
  color: {
    type: String,
    default: "#000000",
  },
});
</script>

<template>
  <p :class="['royco-typography', variant]">
    <slot name="default"></slot>
  </p>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Inter:wght@500;600;700&display=swap");
@import "@/style/variables.scss";
.royco-typography {
  font-weight: v-bind("props.weight");
  color: v-bind("props.color");
}

.headline1,
.headline2,
.headline3,
.headline4,
.headline5,
.headline6 {
  font-family: "Inter";
}

.subtitle1,
.subtitle2,
.body1,
.body2,
.button,
.assistive1,
.assistive2 {
  font-family: "Heebo";
}

.headline1 {
  font-size: 93px;
  line-height: 140%;
  letter-spacing: 1.5px;
}

.headline2 {
  font-size: 58px;
  line-height: 140%;
  letter-spacing: -0.5px;
}

.headline3 {
  font-size: 46px;
  line-height: 150%;
}

.headline4 {
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.25px;
}

.headline5 {
  font-size: 24px;
  line-height: 150%;
}

.headline6 {
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

.body2 {
  font-size: 14px;
  line-height: 20px;
}

.button {
  font-size: 14px;
  line-height: 20px;
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
