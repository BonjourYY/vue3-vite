// JS 对象定义组件
import { ref } from 'vue';
export default {
  // 只能是Vue 指定的选项
  setup() {
    const count = ref(0);
    return { count };
  },
  template: ` <button @click="count++">
  You clicked me {{ count }} times.
</button>`,
};
