import { cusLocalStorage } from '@/utils/cusStorage';

export const getToken = (): string => {
  const token = cusLocalStorage.getItem('token') || '';
  console.log('token', token);
  const bearerToken = token ? `Bearer ${token}` : '';

  return bearerToken;
};
