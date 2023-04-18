export const validateEmail = (email) => String(email).includes('@');
export const validatePassword = (password) => String(password).length >= 8;
