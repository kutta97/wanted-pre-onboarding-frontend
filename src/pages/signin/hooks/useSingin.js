import { useNavigate } from 'react-router-dom';

import { JWT_TOKEN } from '@consts/localStorage';

import { setStorage } from '@utils/storage';

import { signin } from '@api/signin/signin';

const useSignin = () => {
  const navigate = useNavigate();

  const handleSignin = async (accountData) => {
    const rs = await signin(accountData);
    const accessToken = rs.access_token;
    if (accessToken) {
      setStorage(JWT_TOKEN, accessToken);
      return navigate('/todo', { replace: true });
    }
    return null;
  };

  return { handleSignin };
};

export default useSignin;
