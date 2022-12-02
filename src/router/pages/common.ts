import { addChildrenMeta } from '@/router/addMeta';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const children: RouteRecordRawWithMeta[] = [
  {
    path: 'variable-name-convert',
    name: 'variable-name-convert',
    component: () => import(/* webpackChunkName: "VariableNameConvert" */ '@/views/common/VariableNameConvert.vue'),
    meta: {
      title: '變數命名規則轉換',
      showInMenu: true,
    },
  },
  {
    path: 'list-to-mapping',
    name: 'list-to-mapping',
    component: () => import(/* webpackChunkName: "ListToMapping" */ '@/views/common/ListToMapping.vue'),
    meta: {
      title: '陣列轉物件',
      showInMenu: true,
    },
  },
];

const routes: RouteRecordRawWithMeta = {
  path: '/common',
  name: 'common',
  component: () => import(/* webpackChunkName: "Lo" */ '@/layout/Lo.vue'),
  children: addChildrenMeta(children, { category: 'common' }),
  meta: {
    title: '通用',
    showInMenu: true,
  },
};

export default routes;
export { children };
