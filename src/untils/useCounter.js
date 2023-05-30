import { ref } from 'vue';
function useCounter() {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  return {
    count,
    increment,
  };
}

export { useCounter };
