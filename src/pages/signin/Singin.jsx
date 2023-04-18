import React from 'react';
import useSignin from './hooks/useSingin';
import Inputs from '../../components/inputs/Inputs';

const Signin = () => {
  const { handleSignin } = useSignin();

  return (
    <Inputs type="signin-button" onSubmit={handleSignin}>
      로그인
    </Inputs>
  );
};

export default Signin;
