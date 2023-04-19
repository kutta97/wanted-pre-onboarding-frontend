import { authInstance } from '@api';

export const createTodo = async (todo) => {
  try {
    const { data } = await authInstance.post('/todos', todo);
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const getTodos = async () => {
  try {
    const { data } = await authInstance.get('/todos');
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const updateTodo = async (id, todo) => {
  try {
    const { data } = await authInstance.put(`/todos/${id}`, todo);
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await authInstance.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
