export default [
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/user/user.vue'),
    meta: {
      title: '我的',
      depth: 0,
      showFooter: true,
      showHeader: true,
      showHeaderBack: false,
      login: true,
    },
  },
];
