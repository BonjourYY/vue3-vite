import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routes from './routes';
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {};
  },
});

// 导航错误时的回调
router.onError = () => {
  console.log('导航错误');
};

export default router;
