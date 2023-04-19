import { useNavigate } from 'react-router-dom';

import { JWT_TOKEN } from '@consts/localStorage';

import { setStorage } from '@utils/storage';

import { signin } from '@api/signin/signin';

const useSignin = () => {
  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();

    const [email, password] = event.target.elements;
    const userInfo = {
      email: email.value,
      password: password.value,
    };

    const { accesToken } = await signin(userInfo);
    if (!accesToken) {
      setStorage(JWT_TOKEN, accesToken);
      return navigate('/todo', { replace: true });
    }
    return null;
  };

  return { handleSignin };
};

export default useSignin;
