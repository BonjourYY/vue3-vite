import { createApp, version } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import pinia from './stores/store';

// 创建应用实例
const app = createApp(App);

// 使用路由
app.use(router);

// 使用状态管理
app.use(pinia);

// 配置应用级的选项
app.config.errorHandler = (err) => {
  console.error(err);
  console.error('捕获错误');
};

// 全局依赖注入
// app.provide('author', ref('Jack Fan'));

console.log(version);
// 挂载
app.mount('#app');

// 卸载应用实例
// app.unmount();
