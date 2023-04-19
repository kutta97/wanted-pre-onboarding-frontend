export const getAccountData = (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const accountData = {
    email: String(email),
    password: String(password),
  };
  return accountData;
};

export const getTodoData = (formData) => {
  const todo = formData.get('todo');

  const todoData = {
    todo: String(todo),
  };
  return todoData;
};
