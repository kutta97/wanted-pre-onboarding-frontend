import { useEffect, useState } from 'react';

import { validateEmail, validatePassword } from '@utils/validation';

const useInputs = () => {
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

  return {
    isFormValid,
    handleChange,
  };
};

export default useInputs;
