import React from 'react';

const TodoItemEditButtonContainer = ({ children, onClick }) => {
  const handleEditClick = () => onClick?.('EDIT');
  const handleSubmitClick = () => onClick?.('SUBMIT');
  return (
    <li>
      {children}
      <button
        data-testid="submit-button"
        type="button"
        onClick={handleSubmitClick}
      >
        제출
      </button>
      <button
        data-testid="cancel-button"
        type="button"
        onClick={handleEditClick}
      >
        취소
      </button>
    </li>
  );
};

export default TodoItemEditButtonContainer;
