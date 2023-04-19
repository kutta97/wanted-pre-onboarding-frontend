import React from 'react';

import AccountInputs from '@components/accountInputs/AccountInputs';

import useSignup from './hooks/useSignup';

const Signup = () => {
  const { handleSignup } = useSignup();

  return (
    <AccountInputs buttonTestid="signup-button" onSubmit={handleSignup}>
      회원가입
    </AccountInputs>
  );
};

export default Signup;
