import { createPinia } from 'pinia';

const pinia = createPinia();

/**
 * 创建插件
 */
const SecretPiniaPlugin = (context) => {
  if (context.options.debounce) {
    console.log('存在');
  } else {
    console.log('不存在');
  }
};

/**
 * 使用插件
 */
pinia.use(SecretPiniaPlugin);

export default pinia;
