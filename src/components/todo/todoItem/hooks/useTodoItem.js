import { useState } from 'react';

const useTodoItem = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoInput, setTodoInput] = useState({
    todo: todo.todo,
    isCompleted: todo.isCompleted,
  });

  const handleCheckboxChange = (event) => {
    const newTodoInput = {
      ...todo,
      isCompleted: event.target.checked,
    };
    setTodoInput(newTodoInput);
    onEdit?.(todo.id, newTodoInput);
  };

  const handleInputChange = (event) => {
    const newTodoInput = {
      ...todo,
      todo: event.target.value,
    };
    setTodoInput(newTodoInput);
  };

  const handleEditTodo = () => {
    onEdit?.(todo.id, todoInput);
    setIsEditing(false);
  };

  const handleDeleteTodo = () => {
    onDelete?.(todo.id);
  };

  const handleClick = (code) => {
    switch (code) {
      case 'EDIT':
        return setIsEditing(!isEditing);
      case 'SUBMIT':
        return handleEditTodo();
      case 'DELETE':
        return handleDeleteTodo();
      default:
        return null;
    }
  };

  return {
    isEditing,
    handleCheckboxChange,
    handleInputChange,
    handleClick,
  };
};

export default useTodoItem;
