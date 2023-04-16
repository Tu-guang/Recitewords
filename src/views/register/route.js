export default [
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "register" */ '@/views/register/register.vue'
      ),
    meta: {
      title: '注册',
      depth: 0,
      showFooter: false,
      showHeader: false,
      showHeaderBack: false,
      login: false,
    },
  },
];
