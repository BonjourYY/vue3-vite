import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useCounterStore = defineStore('counter', () => {
  const count = ref(1);
  const double = computed(() => count.value * 2);
  /**
   * this is increment function
   */
  function increment() {
    count.value += count.value;
  }
  return { count, double, increment };
});

export default useCounterStore;
