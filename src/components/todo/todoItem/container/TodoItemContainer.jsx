import React from 'react';

import TodoItemDefaultButtonContainer from './TodoItemDefaultButtonContainer';
import TodoItemEditButtonContainer from './TodoItemEditButtonContainer';

const TodoItemContainer = ({ isEditing, onClick, children }) =>
  isEditing ? (
    <TodoItemEditButtonContainer onClick={onClick}>
      {children}
    </TodoItemEditButtonContainer>
  ) : (
    <TodoItemDefaultButtonContainer onClick={onClick}>
      {children}
    </TodoItemDefaultButtonContainer>
  );

export default TodoItemContainer;
