import { getToken } from '@/service/libs/auth';
import restful from '@/service/libs/restful';
import graphql from '@/service/libs/graphql';
import { formatResponse } from '@/service/libs/formatResponse';

const restfulSetting = {
  apiUrlDomain: 'https://jsonplaceholder.typicode.com',
  formatResponse,
  getToken,
};

// const gqlSetting = {
//   apiUrlDomain: `${import.meta.env.VITE_API_GQL_URL}/graphql`,
//   timeout: 100000,
// };

export const restfulRequest = restful(restfulSetting);
// export const gqlReuqest = graphql(gqlSetting);
