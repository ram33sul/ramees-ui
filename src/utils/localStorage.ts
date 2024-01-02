export const setLocalStorage = (key: string, value: unknown) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) ?? "null");
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
