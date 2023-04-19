import { JWT_TOKEN } from '@consts/localStorage';

import { getStorage } from '@utils/storage';

const useAuth = () => {
  const token = getStorage(JWT_TOKEN);
  return token;
};

export default useAuth;
