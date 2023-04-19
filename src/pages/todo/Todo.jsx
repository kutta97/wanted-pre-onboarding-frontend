import React from 'react';

import TodoInput from '@components/todo/todoInput/TodoInput';
import TodoItem from '@components/todo/todoItem/TodoItem';

import useTodo from './hooks/useTodo';

const Todo = () => {
  const { todos, handleCreateTodo, handleEditTodo, handleDeleteTodo } =
    useTodo();
  return (
    <div>
      <TodoInput onSubmit={handleCreateTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default Todo;
