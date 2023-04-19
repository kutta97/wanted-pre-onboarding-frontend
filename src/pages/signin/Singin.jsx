import React from 'react';

import AccountInputs from '@components/accountInputs/AccountInputs';

import useSignin from './hooks/useSingin';

const Signin = () => {
  const { handleSignin } = useSignin();

  return (
    <AccountInputs buttonTestid="signin-button" onSubmit={handleSignin}>
      로그인
    </AccountInputs>
  );
};

export default Signin;
