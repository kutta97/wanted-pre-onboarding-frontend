import { useNavigate } from 'react-router-dom';

import { signup } from '@api/signup/signup';

const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const [email, password] = event.target.elements;
    const userInfo = {
      email: email.value,
      password: password.value,
    };

    const rs = await signup(userInfo);
    if (!rs) {
      return navigate('/signin', { replace: true });
    }
    return null;
  };

  return { handleSignup };
};

export default useSignup;
