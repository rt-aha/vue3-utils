import type { RouteRecordRaw } from 'vue-router';
import addMeta from '@/router/addMeta';

const children: RouteRecordRaw[] = [
  {
    path: 'camel-case-to-kebaba-case',
    name: 'camel-case-to-kebaba-case',
    component: () => import(/* webpackChunkName: "CamelCaseToKebabCase" */ '@/views/common/CamelCaseToKebabCase.vue'),
    meta: {
      title: 'CamelCaseToKebabCase',
    },
  },
  {
    path: 'list-to-mapping',
    name: 'list-to-mapping',
    component: () => import(/* webpackChunkName: "ListToMapping" */ '@/views/common/ListToMapping.vue'),
    meta: {
      title: '陣列轉物件',
    },
  },
];

const routes: RouteRecordRaw = {
  path: '/common',
  name: 'common',
  component: () => import(/* webpackChunkName: "Lo" */ '@/layout/Lo.vue'),
  children: addMeta(children, 'category', 'common'),
};

export default routes;
export { children };
