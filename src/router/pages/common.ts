import type { RouteRecordRaw } from 'vue-router';
import addMeta from '@/router/addMeta';

const children: RouteRecordRaw[] = [
  {
    path: 'variable-name-convert',
    name: 'variable-name-convert',
    component: () => import(/* webpackChunkName: "VariableNameConvert" */ '@/views/common/VariableNameConvert.vue'),
    meta: {
      title: '變數命名規則轉換',
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
