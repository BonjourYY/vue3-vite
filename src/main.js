import { createApp, ref, version } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';

// 创建应用实例
const app = createApp(App);

// 使用路由
app.use(router);

// 配置应用级的选项
app.config.errorHandler = function (err) {
  console.error(err);
  console.error('捕获错误');
};

// 全局依赖注入
app.provide('author', ref('Jack Fan'));

console.log(version);
// 挂载
app.mount('#app');

// 卸载应用实例
// app.unmount();
