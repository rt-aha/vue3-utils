export const formatResponse = (resData: any) => {
  console.log('resData', resData);
  const { data, status } = resData;

  return {
    data,
    status,
  };
};
