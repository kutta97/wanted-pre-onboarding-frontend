export const setStorage = (key, value) => {
  if (typeof window === 'undefined') return null;
  return localStorage.setItem(key, value);
};

export const getStorage = (key) => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key);
};
