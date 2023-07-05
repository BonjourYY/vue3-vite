import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => ({
    name: 'JackFan',
    age: 20,
  }),
  getters: {
    doubleAge(state) {
      console.log(this);
      console.log(state);
      return state.age * 2;
    },
    /**
     * 返回 count 的值乘以 2 加 1
     * @returns {number}
     */
    doubleAgePlusOne() {
      return () => {
        console.log(123);
      };
    },
  },
  actions: {
    getFullName(e) {
      this.$patch({ sex: 'male' });
      console.log(e);
    },
  },
  debounce: {},
});

export default useUserStore;
