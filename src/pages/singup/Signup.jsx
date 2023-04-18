import React from 'react';
import useSignup from './hooks/useSignup';
import Inputs from '../../components/inputs/Inputs';

const Signup = () => {
  const { handleSignup } = useSignup();

  return (
    <Inputs type="signup-button" onSubmit={handleSignup}>
      회원가입
    </Inputs>
  );
};

export default Signup;
