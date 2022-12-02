import type { RouteRecordRaw } from 'vue-router';

// const addMeta = () => {

// };

interface Imeta {
  category: string
}

export const addChildrenMeta = (children: RouteRecordRaw[], metaData: Imeta): RouteRecordRaw[] => {
  return children.map((item) => {
    const meta = item.meta || {};

    return {
      ...item,
      meta: {
        ...meta,
        ...metaData,
      },
    };
  });
};
