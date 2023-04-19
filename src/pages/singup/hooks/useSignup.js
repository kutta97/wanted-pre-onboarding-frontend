import { useNavigate } from 'react-router-dom';

import { getUserData } from '@utils/formData';

import { signup } from '@api/signup/signup';

const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData = getUserData(formData);

    const rs = await signup(userData);
    if (!rs) {
      return navigate('/signin', { replace: true });
    }
    return null;
  };

  return { handleSignup };
};

export default useSignup;
