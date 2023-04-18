import { useEffect, useState } from 'react';
import { validateEmail, validatePassword } from '../../../utils/validation';

const useSignup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { email, password } = inputs;
    setIsFormValid(validateEmail(email) && validatePassword(password));
  }, [inputs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    console.log(email.value, password.value);
  };

  return {
    isFormValid,
    handleChange,
    handleSignup,
  };
};

export default useSignup;
