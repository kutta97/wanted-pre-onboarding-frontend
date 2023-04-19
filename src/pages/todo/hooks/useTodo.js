import { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodos, updateTodo } from '@api/todo/todo';

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const rs = await getTodos();
      setTodos(rs);
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async (todo) => {
    const rs = await createTodo(todo);
    setTodos([...todos, rs]);
  };

  const handleEditTodo = async (id, todo) => {
    const rs = await updateTodo(id, todo);
    const newTodos = todos.map((it) => (it.id === id ? rs : it));
    setTodos(newTodos);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return { todos, handleCreateTodo, handleEditTodo, handleDeleteTodo };
};

export default useTodo;
