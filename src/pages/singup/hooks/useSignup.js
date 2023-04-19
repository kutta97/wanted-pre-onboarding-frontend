import { useNavigate } from 'react-router-dom';
import { signup } from '../../../api/signup/signup';

const useSignup = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    const userInfo = {
      email: email.value,
      password: password.value,
    };

    const rs = await signup(userInfo);

    if (rs !== null) {
      return navigate('/signin');
    }
    return null;
  };

  return {
    handleSignup,
  };
};

export default useSignup;
