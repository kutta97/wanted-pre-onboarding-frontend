import { baseInstance } from '..';

export const signup = async (userInfo) => {
  try {
    const { data } = await baseInstance.post('/auth/signup', userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
