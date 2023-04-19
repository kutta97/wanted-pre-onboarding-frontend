import React from 'react';

const TodoItemDefaultButtonContainer = ({ children, onClick }) => {
  const handleEditClick = () => onClick?.('EDIT');
  const handleDeleteClick = () => onClick?.('DELETE');
  return (
    <li>
      {children}
      <button
        data-testid="modify-button"
        type="button"
        onClick={handleEditClick}
      >
        수정
      </button>
      <button
        data-testid="delete-button"
        type="button"
        onClick={handleDeleteClick}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItemDefaultButtonContainer;
