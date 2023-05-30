import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routes from './routes';
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach(async (to, from) => {
  console.log('to');
  console.log(to);
  console.log('-------------------------------------------');
  console.log('from');
  console.log(from);
  console.log('beforeEach');
});

// 全局解析守卫
router.beforeResolve(async (to, from) => {
  console.log('beforeResolve');
});

// 全局后置守卫
router.afterEach(async (to, from) => {
  console.log('afterEach');
});

// 导航错误时的回调
router.onError = () => {
  console.log('导航错误');
};

export default router;
