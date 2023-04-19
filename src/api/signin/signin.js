import { baseInstance } from '@api';

export const signin = async (userInfo) => {
  try {
    const { data } = await baseInstance.post('/auth/signin', userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
