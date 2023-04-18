import React from 'react';
import useSignup from './hooks/useSignup';

const Signup = () => {
  const { isFormValid, handleChange, handleSignup } = useSignup();

  return (
    <form onSubmit={handleSignup}>
      <input name="email" data-testid="email-input" onChange={handleChange} />
      <input
        name="password"
        data-testid="password-input"
        onChange={handleChange}
      />
      <button data-testid="signup-button" type="submit" disabled={!isFormValid}>
        회원가입
      </button>
    </form>
  );
};

export default Signup;
