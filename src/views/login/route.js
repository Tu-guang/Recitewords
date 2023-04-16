export default [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (spoken.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
    meta: {
      title: '登录',
      depth: 0,
      showFooter: false,
      showHeader: false,
      showHeaderBack: false,
      login: false,
    },
  },
];
