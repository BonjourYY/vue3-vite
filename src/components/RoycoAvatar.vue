<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: () => "56px",
  },
  image: {
    type: String,
  },
  userName: {
    type: String,
    default: () => "S A",
  },
});

const getInitials = (username) => {
  const usernameParts = username.split(" ");
  const initials = usernameParts.map((e) => e.slice(0, 1).toUpperCase());
  if (initials.length > 3) return initials.slice(0, 3).join("");
  return initials.join("");
};

const initials = computed(() => getInitials(props.userName));
</script>

<template>
  <div class="royco-avatar">
    <img
      v-if="image"
      :src="image"
      alt="Avatar"
      class="image"
    />
    <span
      v-else
      class="text"
    >
      {{ initials }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.royco-avatar {
  font-size: v-bind("props.size");
  width: v-bind("props.size");
  height: v-bind("props.size");
  background-color: $primary-500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .image {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .text {
    font-size: 0.5em;
    color: $basics-white;
  }
}
</style>
