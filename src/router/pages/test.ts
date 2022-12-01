import addMeta from '@/router/addMeta';

const children = [
  {
    path: 't',
    name: 't',
    component: () => import(/* webpackChunkName: "Test" */ '@/views/test/Test.vue'),
    meta: {
      title: 'Test',
    },
  },
 
];

const routes = {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/BaseLayout.vue'),
    children: addMeta(children, 'category', 'test'),
  }


export default routes;
export { children };
