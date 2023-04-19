import React from 'react';

import Inputs from '@components/inputs/Inputs';

import useSignup from './hooks/useSignup';

const Signup = () => {
  const { handleSignup } = useSignup();

  return (
    <Inputs type="signup-button" onSubmit={handleSignup}>
      회원가입
    </Inputs>
  );
};

export default Signup;
