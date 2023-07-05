<script setup>
import RoycoAvatar from "./RoycoAvatar.vue";

defineProps({
  userList: {
    type: Array,
  },
  size: {
    type: String,
  },
});
</script>

<template>
  <div class="royco-avatar-group">
    <RoycoAvatar
      @sizeChange="sizeChange($event)"
      v-for="({ avatar, userName }, index) in userList.slice(0, 5)"
      :image="avatar"
      :user-name="userName"
      :size="size"
      :key="index"
    />
    <div
      class="more"
      v-if="userList.length > 5"
    >
      +{{ userList.length - 5 }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-avatar-group {
  display: flex;
  align-items: center;
  .royco-avatar {
    border: 4px solid $basics-white;
  }
  .royco-avatar:not(.royco-avatar:first-child) {
    margin-left: -10px;
  }
  .more {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: $gray-600;
    text-align: center;
    line-height: 52px;
    font-size: 20px;
    color: $basics-white;
    border: 4px solid $basics-white;
  }
}
</style>
