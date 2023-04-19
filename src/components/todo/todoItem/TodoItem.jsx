import React from 'react';

import TodoItemContainer from './container/TodoItemContainer';
import useTodoItem from './hooks/useTodoItem';

const TodoItem = (props) => {
  const { todo } = props;
  const { isEditing, handleCheckboxChange, handleInputChange, handleClick } =
    useTodoItem(props);

  return (
    <TodoItemContainer isEditing={isEditing} onClick={handleClick}>
      <label htmlFor={`checkbox-${todo.id}`}>
        <input
          id={`checkbox-${todo.id}`}
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onChange={handleCheckboxChange}
        />
        {isEditing ? (
          <input
            data-testid="modify-input"
            defaultValue={todo.todo}
            onChange={handleInputChange}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
    </TodoItemContainer>
  );
};

export default TodoItem;
