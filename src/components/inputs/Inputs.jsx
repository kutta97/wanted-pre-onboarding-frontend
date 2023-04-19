import React from 'react';

import useInputs from './hooks/useInputs';

const Inputs = (props) => {
  const { testid, onSubmit, children } = props;
  const { isFormValid, handleChange } = useInputs();

  return (
    <form onSubmit={onSubmit}>
      <input name="email" data-testid="email-input" onChange={handleChange} />
      <input
        name="password"
        data-testid="password-input"
        onChange={handleChange}
      />
      <button data-testid={testid} type="submit" disabled={!isFormValid}>
        {children}
      </button>
    </form>
  );
};

export default Inputs;
