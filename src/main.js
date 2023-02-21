import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import Button from '@/components/Button.vue';
import './assets/main.css';

const app1 = createApp(App);

app1.use(router);
// 配置应用级的选项
app1.config.errorHandler = function (err) {
  console.log(err);
  console.log('捕获错误');
};
// 注册应用范围内的组件
app1.component('my-button', Button);
app1.mount('#app');
