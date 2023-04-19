import { useNavigate } from 'react-router-dom';
import { signin } from '../../../api/signin/signin';
import { JWT_TOKEN } from '../../../consts/localStorage';
import { setStorage } from '../../../utils/storage';

const useSignin = () => {
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    const userInfo = {
      email: email.value,
      password: password.value,
    };
    const { accesToken } = await signin(userInfo);

    if (accesToken !== null) {
      setStorage(JWT_TOKEN, accesToken);
      return navigate('/todo');
    }
    return null;
  };

  return {
    handleSignin,
  };
};

export default useSignin;
