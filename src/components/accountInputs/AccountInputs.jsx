import React from 'react';

import { getAccountData } from '@utils/formData';

import useAccountInputs from './hooks/useAccountInputs';

const AccountInputs = (props) => {
  const { buttonTestid, onSubmit, children } = props;
  const { isFormValid, handleChange } = useAccountInputs();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const accountData = getAccountData(formData);
    onSubmit?.(accountData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" data-testid="email-input" onChange={handleChange} />
      <input
        name="password"
        data-testid="password-input"
        onChange={handleChange}
      />
      <button data-testid={buttonTestid} type="submit" disabled={!isFormValid}>
        {children}
      </button>
    </form>
  );
};

export default AccountInputs;
