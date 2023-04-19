import { useNavigate } from 'react-router-dom';

import { signup } from '@api/signup/signup';

const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (accountData) => {
    const rs = await signup(accountData);
    if (!rs) {
      return navigate('/signin', { replace: true });
    }
    return null;
  };

  return { handleSignup };
};

export default useSignup;
