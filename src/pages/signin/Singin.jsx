import React from 'react';

import Inputs from '@components/inputs/Inputs';

import useSignin from './hooks/useSingin';

const Signin = () => {
  const { handleSignin } = useSignin();

  return (
    <Inputs type="signin-button" onSubmit={handleSignin}>
      로그인
    </Inputs>
  );
};

export default Signin;
