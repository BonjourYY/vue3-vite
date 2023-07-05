// 定义路由独享守卫的函数
const removeQueryParams = function (to, from) {
  console.log(to);
};

// 路由表
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'name',
        components: {
          default: () => import('@/components/UserName.vue'),
        },
      },
      {
        path: 'hobby',
        components: {
          default: () => import('@/components/UserHobby.vue'),
        },
      },
    ],
  },
];

export default routes;
