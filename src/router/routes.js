// 定义路由独享守卫的函数
const removeQueryParams = function (to, from) {
  console.log(to);
};

// 路由表
const routes = [
  {
    path: '/',
    components: {
      default: () => {
        return import('@/page/HomePage.vue');
      },
    },
    meta: { requireAuth1: true },
    children: [
      {
        path: 'name',
        components: {
          default: () => {
            return import('@/components/UserName.vue');
          },
        },
        // 路由独享守卫
        beforeEnter: [removeQueryParams],
        meta: { requireAuth2: true },
      },
      {
        path: 'login/:name',
        name: 'userlogin',
        components: {
          default: () => {
            return import('@/components/UserLogin.vue');
          },
        },
        beforeEnter: [removeQueryParams],
      },
    ],
  },
];

export default routes;
