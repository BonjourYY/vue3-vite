import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import ChildComponent from './views/ChildCom.vue';
import BlogPost from './views/BlogPost.vue';

const app = createApp(App);

// 配置应用级的选项
app.config.errorHandler = function (err) {
  console.error(err);
  console.error('捕获错误');
};

// 注册全局组件
app.component('ChildComponent', ChildComponent).component('BlogPost', BlogPost);

console.log(app.version);

// 挂载
app.mount('#app');
