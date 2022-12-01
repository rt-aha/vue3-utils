import addMeta from '@/router/addMeta';

const children = [
  {
    path: 'test',
    name: 'test',
    component: () => import(/* webpackChunkName: "CamelCaseToKebabCase" */ '@/views/common/CamelCaseToKebabCase.vue'),
    meta: {
      title: 'CamelCaseToKebabCase',
    },
  },
 
];

const routes = [
  {
    path: '/common',
    name: 'common',
    component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/BaseLayout.vue'),
    children: addMeta(children, 'category', 'common'),
  },
];

export default routes;
export { children };
