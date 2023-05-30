// 路由表
const routes = [
  // {
  //   path: '/',
  //   component: () => {
  //     return import('@/App.vue');
  //   },
  // },
  {
    name: 'user',
    path: '/user',
    component: () => {
      return import('@/components/UserName.vue');
    },
    children: [
      {
        path: 'age',
        components: {
          default: () => {
            return import('@/components/UserAge.vue');
          },
          userID: () => {
            return import('@/components/UserID.vue');
          },
        },
      },
      {
        path: 'male',
        components: {
          default: () => {
            return import('@/components/UserMale.vue');
          },
        },
      },
    ],
  },
];

export default routes;
