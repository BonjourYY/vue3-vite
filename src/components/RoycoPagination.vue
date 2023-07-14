<script setup>
import { computed, ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  // 总条数
  total: {
    type: Number,
    required: true,
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否显示全部
  showTotal: {
    type: Boolean,
    default: false,
  },
  // 是否显示跳页
  showJumper: {
    type: Boolean,
    default: false,
  },
  // 是否显示单页条数
  showPageSize: {
    type: Boolean,
    default: false,
  },
  // 是否简洁模式
  simple: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["pageData"]);

// 每页的列表数
const pageSize = ref(10);

// 当前页码
const currentPage = ref(1);

// 总页码数
const pages = computed(() => Math.ceil(props.total / pageSize.value));

// 选择具体页码
const selectPage = (e) => {
  if (!props.disabled) {
    currentPage.value = e;
    emits("pageData", { currentPage: currentPage.value });
  }
};

// 点击 ... 按钮
const updatePage = (delta) => {
  currentPage.value += delta;
  if (currentPage.value < 1) {
    currentPage.value = 1;
  } else if (currentPage.value > pages.value) {
    currentPage.value = pages.value;
  }
  emits("pageData", {
    currentPage: currentPage.value,
  });
};

const downMore = (e) => {
  if (!props.disabled) {
    if (e === 0) {
      updatePage(-5);
    } else if (e === 1) {
      updatePage(5);
    }
  }
};

const showPage = () => {
  if (currentPage.value < 3) {
    return 3;
  }
  if (currentPage.value > pages.value - 2) {
    return pages.value - 2;
  }
  return currentPage.value;
};

// prev next
const downSwitch = (e) => {
  if (e === 0 && currentPage.value > 1 && !props.disabled) {
    // 上一页
    currentPage.value -= 1;
  } else if (e === 1 && currentPage.value < pages.value && !props.disabled) {
    // 下一页
    currentPage.value += 1;
  }
  emits("pageData", { currentPage: currentPage.value });
};
</script>

<template>
  <div class="royco-pagination" :class="{ disabled: disabled }">
    <div :class="{ cover: disabled }" v-if="disabled"></div>
    <p class="total-data" v-if="showTotal">共{{ total }}条</p>
    <div class="pagination">
      <div
        class="icon left"
        :class="{ disabled: currentPage === 1 }"
        @click="downSwitch(0)">
        <ChevronLeftIcon
          :style="{ width: '20px', height: '20px' }"></ChevronLeftIcon>
      </div>
      <div class="pages default" v-if="!simple">
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage === 1 }"
          @click="selectPage(1)"
          v-show="pages > 0">
          1
        </p>
        <p
          class="pgitem more"
          v-show="currentPage > 4 && pages > 6"
          @click="downMore(0)">
          ...
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage == showPage() - 2 }"
          @click="selectPage(showPage() - 2)"
          v-show="showPage() - 2 > 1">
          {{ showPage() - 2 }}
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage == showPage() - 1 }"
          @click="selectPage(showPage() - 1)"
          v-show="showPage() - 1 < pages">
          {{ showPage() - 1 }}
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage == showPage() }"
          @click="selectPage(showPage())"
          v-show="showPage() < pages">
          {{ showPage() }}
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage == showPage() + 1 }"
          @click="selectPage(showPage() + 1)"
          v-show="showPage() + 1 < pages">
          {{ showPage() + 1 }}
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage == showPage() + 2 }"
          @click="selectPage(showPage() + 2)"
          v-show="showPage() + 2 < pages">
          {{ showPage() + 2 }}
        </p>
        <p
          class="pgitem more"
          v-show="currentPage < pages - 3 && pages > 6"
          @click="downMore(1)">
          ...
        </p>
        <p
          class="pgitem page"
          :class="{ currentPage: currentPage === pages }"
          @click="selectPage(pages)"
          v-show="pages > 1">
          {{ pages }}
        </p>
      </div>
      <div class="simples" v-if="simple"></div>
      <div
        class="icon right"
        :class="{ disabled: currentPage === pages }"
        @click="downSwitch(1)">
        <ChevronRightIcon
          :style="{ width: '20px', height: '20px' }"></ChevronRightIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.royco-pagination {
  display: flex;
  gap: 8px;
  .total-data {
    line-height: 36px;
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 4px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: $gray-300;
      }
    }
    .pages {
      display: flex;
      gap: 4px;
      .pgitem {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
      }
      .pgitem:not(.more) {
        background-color: $gray-200;
      }
      .pgitem {
        &:hover {
          background-color: $gray-300;
        }
      }
      .pgitem.currentPage {
        background-color: $primary-500;
        color: $basics-white;
      }
    }
    .disabled {
      opacity: 0.4;
      cursor: not-allowed;
      &:hover {
        background-color: $gray-200;
      }
    }
  }
}
</style>
