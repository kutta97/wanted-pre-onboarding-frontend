import React from 'react';

import { getTodoData } from '@utils/formData';

const TodoInput = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoData = getTodoData(formData);
    onSubmit?.(todoData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
};

export default TodoInput;
