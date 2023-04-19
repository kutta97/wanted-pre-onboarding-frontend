export const getUserData = (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const userData = {
    email: String(email),
    password: String(password),
  };
  return userData;
};

export const getTodoData = (formData) => {
  const todo = formData.get('todo');

  const todoData = {
    todo: String(todo),
  };
  return todoData;
};
