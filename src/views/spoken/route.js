export default [
  {
    path: '/spoken',
    name: 'spoken',
    // route level code-splitting
    // this generates a separate chunk (spoken.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "spoken" */ '@/views/spoken/spoken.vue'),
    meta: {
      title: '关于我',
      depth: 0,
      showFooter: true,
      showHeader: false,
      showHeaderBack: false,
      login: true,
    },
  },
];
