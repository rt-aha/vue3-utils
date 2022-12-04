import { restfulRequest } from '@/service';

export const mockJsonPlaceholder = async () => {
  const res = await restfulRequest({
    url: '/users',
  });

  console.log('res', res);

  return res;
};
