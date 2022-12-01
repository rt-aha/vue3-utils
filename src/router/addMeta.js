const addMeta = (children, key, data) => {
  return children.map((item) => {
    const meta = item.meta || {};

    return {
      ...item,
      meta: {
        ...meta,
        [key]: data,
      },
    };
  });
};

export default addMeta;
