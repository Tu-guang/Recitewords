export default [
  {
    path: '/video',
    name: 'video',
    component: (resolve) => require(['@/views/video/index.vue'], resolve),
    meta: {
      title: '效果',
      depth: 0,
      showFooter: true,
      showHeader: false,
      showHeaderBack: false,
      login: true,
    },
  },
];
